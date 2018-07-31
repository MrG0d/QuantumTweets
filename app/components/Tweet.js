import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class Tweet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: this.props.data.user.screen_name,
            text: this.props.data.text,
            followers: this.props.data.followers_count
        };

    }

    render() {
        return (
            <View style={styles.row}>
                <Text style={styles.title}>
                    {this.state.userName}
                </Text>
                <Text style={styles.text}>
                    {this.state.text}
                </Text>
                <Text style={styles.followers}>
                    {this.state.followers}
                </Text>
            </View>
        );
    }
};


const styles = StyleSheet.create({
    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },

    title:{
        fontSize: 15,
        fontWeight: "600"
    },

    text:{
        marginTop: 5,
        fontSize: 14,
    },

    followers:{
        textAlign: 'right'
    }
});