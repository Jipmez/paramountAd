import store from "../store";

export const toast = {
  notify,
};

function notify(x, message) {
  store.dispatch(
    "addNotification",
    {
      type: x,
      message: message,
    },
    { root: true }
  );
}
