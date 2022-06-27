import useControllerContext from "../../../context/useControllerContext";
import useCreateNotificationObserver from "../observer/useCreateNotificationObserver";

interface Data {
    fakeData: () => void;
}

export const useHomeWindow = (): Data => {
    const createFakeDataController = useControllerContext().createFakeDataController;
    const observerCreateData = useCreateNotificationObserver();

    const createFakeData = () => {
        createFakeDataController.createFakeData().subscribe(observerCreateData);
    }

    const fakeData = () => {
        createFakeData();
    }

    return { fakeData };
}