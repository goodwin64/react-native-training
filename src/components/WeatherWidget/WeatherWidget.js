import React, { Component } from 'react';
import { Image, ScrollView, Text } from 'react-native';

import { assets, colors } from "../../styles/constants";
import commonStyles from "../../styles/styles";
import WeatherWidget from "./WeatherWidget.styled";

// weather types: Rain, Snow, Extreme, Clouds, Clear

export default class Weather extends Component {
    static navigationOptions = {
        headerStyle: commonStyles.header,
        headerTintColor: colors.WHITE,
        headerTitle: 'Weather',
    };

    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            error: null,
            weatherData: {},
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
                getWeather({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                }).then(weatherData => {
                    this.setState({
                        weatherData: JSON.parse(weatherData._bodyText) || {}
                    });
                }).catch(error => this.setState({ error: String(error) }));
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }

    render() {
        return (
            <ScrollView style={{ flexGrow: 1 }}>
                <Text>Latitude: {this.state.latitude}</Text>
                <Text>Longitude: {this.state.longitude}</Text>
                <Text>Location: {this.state.weatherData['name']}</Text>
                <Text>WeatherData:</Text>
                {
                    (() => {
                        let weatherType = 'Error while retrieving weather';
                        try {
                            weatherType = this.state.weatherData['weather'][0]['main'];
                            const imageAsset = assets[`IMAGE_WEATHER_${weatherType.toUpperCase()}`];
                            return (
                                <Image
                                    style={WeatherWidget.weatherImage}
                                    source={imageAsset}
                                />
                            );
                        }
                        catch (error) {
                            return (
                                <Text>{weatherType}</Text>
                            );
                        }
                    })()
                }
                {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
            </ScrollView>
        );
    }
}

// TODO: move to action after Redux connect
// TODO: ideally, store private API key on server and send responses from there, but who gives a f*ck
function getWeather({ lat, lon }) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9214cd3ba5880cea08f2c9d6962025c5`);
}
