import React, { Component } from 'react';
import { ScrollView, Text, View, Linking } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import Row from 'react-native-row';

import { assets, colors } from '../../../styles/constants';
import commonStyles from '../../../styles/styles';
import WithBrackets from "../../WithBrackets/WithBrackets";

const contactItems = [
    { title: 'VK', type: 'vk', url: 'https://vk.com/id20693334' },
    { title: 'FB', type: 'facebook', url: 'https://www.facebook.com/max.alexch' },
    { title: 'Github', type: 'github', url: 'https://github.com/goodwin64' },
    { title: 'Twitter', type: 'twitter', url: 'https://twitter.com/while__TRUE' },
    { title: 'LinkedIn', type: 'linkedin', url: 'https://www.linkedin.com/in/max-donchenko-792a60b8/' },
    { title: 'Pinterest', type: 'pinterest', url: 'https://www.pinterest.com/maxxxdon' },
    { title: 'Instagram', type: 'instagram', url: 'https://www.instagram.com/madmaxxdon/' },
].map(item => ({
    ...item,
    iconPath: `${assets.iconsPath}/${item.type}.svg`,
    key: item.type,
    light: item.type === 'pinterest',
    disabled: item.type === 'vk',
    raised: item.type !== 'twitter',
    ...(item.type === 'vk' ? { iconColor: '#222' } : {})
}));

export default class Contacts extends Component {
    static navigationOptions = {
        headerStyle: commonStyles.header,
        headerTintColor: colors.WHITE,
        headerTitle: <WithBrackets textInside="contacts"/>, // TODO: add normal styles
    };

    constructor(props) {
        super(props);
        this.state = {
            tilesPerRow: 3,
        };
    }

    render() {
        const perRow = this.state.tilesPerRow;

        return (
            <View>
                <Text>In a row: {perRow}{/* TODO: Ideally, move into Settings and Preferences */}</Text>
                <Text onPress={() => this.setState({ tilesPerRow: 1 })}>1</Text>
                <Text onPress={() => this.setState({ tilesPerRow: 2 })}>2</Text>
                <Text onPress={() => this.setState({ tilesPerRow: 3 })}>3</Text>
                <Text onPress={() => this.setState({ tilesPerRow: 4 })}>4</Text>

                {/* FIXME: Scroll doesn't work when content overflow */}
                <ScrollView>
                    <Row
                        dial={5}
                        flex
                        margin={[10, 25]}
                        style={{
                            flexWrap: 'wrap',
                            // backgroundColor: '#444',
                        }}
                    >
                        {contactItems.map(contactItem => (
                            <View
                                key={contactItem.title}
                                style={{
                                    width: `${100 / perRow}%`,
                                }}
                            >
                                <SocialIcon
                                    {...contactItem}
                                    type={contactItem.type}
                                    onPress={() => Linking.openURL(contactItem.url)}
                                    style={{ alignSelf: 'center' }}
                                    // Props below don't work
                                    title={contactItem.title}
                                    caption={contactItem.caption || contactItem.title || ''}
                                />
                            </View>
                        ))}
                    </Row>
                </ScrollView>

            </View>
        );
    }
}
