import { NavigationActions } from "@expo/ex-navigation";
import Store from "../redux/store";
import Router from "../navigation/routes";

export const formatSessionData = sessions => {
  return sessions
    .reduce((acc, curr) => {
      const timeExists = acc.find(section => section.title === curr.start_time);
      timeExists
        ? timeExists.data.push(curr)
        : acc.push({ title: curr.start_time, data: [curr] });
      return acc;
    }, [])
    .sort((a, b) => a.title - b.title);
};

export const goToSession = (currentNavigatorUID, sessionData) => {
  Store.dispatch(
    NavigationActions.push(
      currentNavigatorUID,
      Router.getRoute("session", { sessionData })
    )
  );
};
