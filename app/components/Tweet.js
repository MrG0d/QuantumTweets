import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import {fontMaker} from '../scripts/Font'
import DateFormat from '../scripts/Date'
import { Ionicons } from '@expo/vector-icons';

export default class Tweet extends Component {
    constructor(props) {
        super(props);
        this.avatarImg = require("../../assets/images/avatar.png");
        this.state = this.props.data;

        var date = new DateFormat(this.state.created_at);
        this.state.date = date.getDate();
    }

    render() {
        return (
            <View style={styles.row}>
                <View style={styles.avatarView}>
                    <Image source={this.avatarImg} style={styles.avatar}/>
                </View>
                <View style={styles.contentView}>
                    <View style={styles.headerView}>
                        <Text style={styles.name}>
                            {this.state.user.name}
                        </Text>
                        <Text style={styles.screenName}>
                            @{this.state.user.screen_name}
                        </Text>
                    </View>


                    <Text style={styles.text}>
                        {this.state.text}
                    </Text>

                    <View style={styles.footer}>
                        <View style={styles.dateView}>  
                            <Text style={styles.date}>
                                {this.state.date}
                            </Text>
                        </View>
                        <View style={styles.followersView}> 
                            <View style={styles.followersCounterView}>
                                <Text style={styles.followers}>
                                    {this.state.user.followers_count}
                                </Text>
                            </View>
                            <Ionicons name="md-heart-outline" size={16} color="#666" />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
};


const styles = StyleSheet.create({
    row:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderColor: "#EEE",
        paddingTop: 10,
        paddingBottom: 10,
    },
    avatarView:{
        flexBasis: 60,
        maxWidth: 60,
        width: 60,
        padding: 5
    },
    avatar:{
        width: 50,
        height: 50
    },
    contentView: {
        flex: 1,
        flexDirection: 'column'
    },
    headerView: {
        flexDirection: 'row'
    },
    name:{
        fontSize: 15,
        ...fontMaker({ weight: 'Light'})
    },
    screenName:{
        marginLeft: 10,
        fontSize: 15,
        color: '#999',
        ...fontMaker({ weight: 'Light'})
    },
    text:{
        marginTop: 5,
        fontSize: 14,
        ...fontMaker({ weight: 'Normal'})
    },
    footer:{
        paddingTop: 5,
        flex: 1,
        flexDirection: 'row'
    },
    dateView:{
        flex:1,
        flexShrink:1,
        alignItems: 'center',
    },
    date:{
        fontSize: 15,
        color: '#999',
        fontWeight: "100",
        ...fontMaker({ weight: 'Light'})
    },
    followersView:{
        flex:1,
        flexShrink:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    followersCounterView:{
        marginRight: 8,
    },
    followers:{
        fontSize: 16,
        color: '#666',
        ...fontMaker({ weight: 'Light'})
    }
});