export const colors = Object.freeze({
    DARK_BLUE: '#1A9CB0',
    SHARP_BLUE: '#39C2D7',
    RASPBERRY: '#B22746',
    PLUM: '#8E244D',
    DARK_GREEN: '#7F993A',
    LIME_GREEN: '#A3C644',
    DARK: '#222',
    GRAPHITE: '#464547',
    MEDIUM_GRAY: '#666666',
    GRAY: '#999999',
    LIGHT_GRAY: '#CCCCCC',
    WHITE: '#FFFFFF',
});

export const routes = Object.freeze({
    LOGIN_SCREEN: 'LoginScreen',
    LOGIN_PATH: '/login',
    USER_ROOM_SCREEN: 'UserRoom',
    USER_ROOM_PATH: '/userroom',
    SECONDARY_PAGE_SCREEN: 'SecondaryPage',
    SECONDARY_PAGE_PATH: '/secondary-page',
    ABOUT_SCREEN: 'About',
    ABOUT_PATH: '/about',
    CONTACTS_SCREEN: 'Contacts',
    CONTACTS_PATH: '/contacts',
    WEATHER_WIDGET_SCREEN: 'Weather',
    WEATHER_WIDGET_PATH: '/weather',
});

export const assets = Object.freeze({
    // FONT_OSWALD: require('../assets/fonts/Oswald.ttf'), // TODO: continue when fixing font
    // FONT_OSWALD_BOLD: require('../assets/fonts/Oswald-Bold.ttf'),
    IMAGE_CODER: require('../assets/images/user-room-background.png'),
    IMAGE_WEATHER_RAIN: require('../assets/images/weather-rain.png'),
    IMAGE_WEATHER_SNOW: require('../assets/images/weather-snow.png'),
    IMAGE_WEATHER_CLEAR: require('../assets/images/weather-clear.png'),
    IMAGE_WEATHER_CLOUDS: require('../assets/images/weather-clouds.png'),
    IMAGE_WEATHER_EXTREME: require('../assets/images/weather-extreme.png'),
    iconsPath: '../assets/icons/',
});

export const LAYER_ACTIONS_MENU = 'ACTIONS_MENU';
/**
 * Calculates unique zIndex
 * Structure similar to Linked List prevents from z-indices collisions
 */
export const getZIndex = layerName => [
    LAYER_ACTIONS_MENU,
].indexOf(layerName) + 1;
