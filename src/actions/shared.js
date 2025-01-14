import { getInitialData } from "../utils/api";
import { setAuthedUser } from "./authedUser";
import { receiveTweets } from "./tweet";
import { receiveUsers } from "./users";
import { showLoading,hideLoading } from "react-redux-loading";

const AUTHED_ID = "sarah_edo";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading())
    });
  };
}
