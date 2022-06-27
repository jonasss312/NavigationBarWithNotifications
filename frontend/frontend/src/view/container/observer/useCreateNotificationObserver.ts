
import { useSnackbar } from "notistack";
import { Observer } from "rxjs";

export default function useCreateNotificationObserver<T>(): Observer<T> {
  const { enqueueSnackbar } = useSnackbar();

  return {
    next: () => { },
    error: (error: Error) => {
      enqueueSnackbar("Error with server: " + error.message, {
        variant: "error",
        preventDuplicate: true,
      });
    },
    complete: () => enqueueSnackbar("Added fake data", {
      variant: "success",
      preventDuplicate: true,
    })
  };
}