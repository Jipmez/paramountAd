/* import api from "../services/call"; */

export const LOADER = (state, payload) => {
  state.loader = payload;
};

export const PUSH_NOTIFICATION = (state, notification) => {
  state.notifications.push({
    ...notification,
    id: (Math.random().toString(36) + Date.now().toString(36)).substr(2),
  });
};

export const REMOVE_NOTIFICATION = (state, notificationToRemove) => {
  state.notifications = state.notifications.filter((notification) => {
    return notification.id != notificationToRemove.id;
  });
};

/* export const GET_USER = async (state) => {
  let mg = {
    key: "getuser",
  };
  await api.post(mg).then((res) => {
    if (res["data"]["access"] == true) {
      state.user = res["data"]["message"];
    }
  });
};
 */
