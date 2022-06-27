import { useSnackbar } from "notistack";
import { Observer } from "rxjs";

export default function useDeleteNotificationObserver<T>(multiple: Boolean, refreshNotifications: () => void): Observer<T> {
  const { enqueueSnackbar } = useSnackbar();

  return {
    next: () => { },
    error: (error: Error) => {
      enqueueSnackbar("Error with server: " + error.message, {
        variant: "error",
        preventDuplicate: true,
      });
    },
    complete: () => {
      enqueueSnackbar(multiple ? "Deleted all messages" : "Deleted message", {
        variant: "success",
        preventDuplicate: true,
      })
      refreshNotifications()
    }
  };
}