import { TabNavigator } from "react-navigation";

import { colors, routes } from "../../styles/constants";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import WeatherWidget from "../WeatherWidget/WeatherWidget";

export default TabNavigator(
  {
    [routes.ABOUT_SCREEN]: {
      screen: About,
      name: "About the app",
      description: `Tells the purpose of this application, some credits and author's personal thanks`,
      path: routes.ABOUT_PATH
    },
    [routes.CONTACTS_SCREEN]: {
      screen: Contacts,
      name: "Contact me :)",
      description: "Write me anything you want, bae",
      path: routes.CONTACTS_PATH
    },
    [routes.WEATHER_WIDGET_SCREEN]: {
      screen: WeatherWidget,
      name: "Current weather",
      description: "Gets your location and tells what is the weather there",
      path: routes.WEATHER_WIDGET_PATH
    }
  },
  {
    tabBarPosition: "top",
    animationEnabled: true,
    tabBarOptions: { activeTintColor: colors.RASPBERRY }
  }
);

// the second "prettier" manual test: whether it will prettify files via "Webstorm"-way commit
