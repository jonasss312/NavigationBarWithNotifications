import { useState, useEffect } from "react";
import { map, switchMap } from "rxjs";
import useControllerContext from "../../../context/useControllerContext";
import { ViewMessageThread } from "../../../controller/model/ViewMessageThread";
import useDeleteNotificationObserver from "../observer/useDeleteNotificationObserver";

interface Data {
    toggleNotifications: () => void;
    toggle: Boolean;
    notifications: ViewMessageThread[] | undefined;
    deleteThread: (id: number) => void;
    seeThread: (id: number) => void;
    deleteAllThreads: () => void;
    newNotificationsCount: number;
}

export const useNotificationButton = (): Data => {
    const getMessageThreadController = useControllerContext().getMessageThreadController;
    const getMessageContentController = useControllerContext().getMessageContentController;
    const deleteMessageThreadController = useControllerContext().deleteMessageThreadController;
    const updateMessageThreadController = useControllerContext().updateMessageThreadController;
    const [toggle, setToggle] = useState<Boolean>(false);
    const [newNotificationsCount, setNewNotificationsCount] = useState<number>(0);
    const [notifications, setNotifications] = useState<ViewMessageThread[] | undefined>(undefined);
    const [forceRefresh, setForceRefresh] = useState<Boolean>(false);

    const refreshNotifications = () => setForceRefresh(!forceRefresh);
    const observerDeleteMessage = useDeleteNotificationObserver(false, refreshNotifications);
    const observerDeleteAllMessage = useDeleteNotificationObserver(true, refreshNotifications);

    useEffect(() => {
        const subscription = getMessageThreadController.getMessageThreads().subscribe(data => {
            setNotifications(data);
            setNewNotificationsCount(data?.filter(notification => notification.isNew()).length ?? 0)
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [forceRefresh]);

    const toggleNotifications = () => {
        refreshNotifications();
        setToggle(!toggle);
    }

    const deleteThread = (id: number) => deleteMessageThreadController.deleteMessageThread(id).subscribe(observerDeleteMessage);

    const deleteAllThreads = () => {
        deleteMessageThreadController.deleteAllMessageThreads().subscribe(observerDeleteAllMessage);
    }

    const seeThread = (id: number) => {
        getMessageContentController.getMessageContents(id)
            .pipe(
                map(contents => alert(contents.map(content => content.getContent() + "\n").join(''))),
                switchMap(
                    () => updateMessageThreadController.makeMessageThreadSeen(id)))
            .subscribe(() => refreshNotifications());
    }

    return {
        toggleNotifications,
        toggle,
        notifications,
        deleteThread,
        seeThread,
        deleteAllThreads,
        newNotificationsCount
    };
}