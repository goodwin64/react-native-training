import { TabNavigator } from "react-navigation";

import { colors, routes } from "../../styles/constants";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";

export default TabNavigator({
    [routes.ABOUT_SCREEN]: {
        screen: About,
        name: 'About the app',
        description: `Tells the purpose of this application, some credits and author's personal thanks`,
        path: routes.ABOUT_PATH,
    },
    [routes.CONTACTS_SCREEN]: {
        screen: Contacts,
        name: 'Contact me :)',
        description: 'Write me anything you want, bae',
        path: routes.CONTACTS_PATH,
    },
}, {
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: colors.RASPBERRY,
    },
});
