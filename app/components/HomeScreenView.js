import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    Image,
    Button,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';

import I18n from '../i18n'
import Tweet from '../components/Tweet';

export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: I18n.t("home.title"),
          headerRight: (
            <TouchableOpacity onPress={navigation.getParam('sortButtonOnPress')}>
                <Image source={navigation.getParam('sortButtonSrc')} style={styles.sortButton}/>
            </TouchableOpacity>
          ),
        };
      };


    constructor(props) {
        super(props);

        this.sortButtonAscSrc = require("../../assets/images/sort_asc.png");
        this.sortButtonDescSrc = require("../../assets/images/sort_desc.png");
        this.sortButtonNoneSrc = require("../../assets/images/sort_none.png");
        this.state = {
            sort: 0
        };

        this.renderItem = this.renderItem.bind(this);
    }
    
    compareTweetsDesc(a,b) {
        if (a.followers_count < b.followers_count)
            return 1;
        if (a.followers_count > b.followers_count)
            return -1;
        return 0;
    }
    
    
    compareTweetsAsc(a,b) {
        if (a.followers_count < b.followers_count)
            return -1;
        if (a.followers_count > b.followers_count)
            return 1;
        return 0;
    }

    getSourceSortButton(sort){
        switch(sort){
            case 1: return this.sortButtonDescSrc;
            case -1: return this.sortButtonAscSrc;
            case 0: 
            default: 
                return this.sortButtonNoneSrc;
        } 
    }

    componentDidMount() {
        this.props.getData(); 
        this.props.navigation.setParams({ 
            sortButtonSrc: this.getSourceSortButton(this.state.sort),
            sortButtonOnPress: this.sortButtonOnPress.bind(this)
        });
    }
    
    sortButtonOnPress(){
        var sort = this.state.sort + 1;
        if(sort > 1){
            sort = -1;
        }
        this.setState({sort: sort});
        this.props.navigation.setParams({ sortButtonSrc: this.getSourceSortButton(sort)});
    }

    renderItem({item, index}) {
        return <Tweet data={item} cellKey={item.id + ""}/>
    }

    render() {
        console.log("Render", this.props.loading);
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else {
            var tweets;
            switch(this.state.sort){
                case 1: 
                    tweets = this.props.data.sort(this.compareTweetsDesc);
                    break;
                case -1: 
                    tweets = this.props.data.sort(this.compareTweetsAsc);
                    break;
                case 0: 
                default: 
                    tweets = this.props.data;
            } 
            return (
                <View style={{flex:1, backgroundColor: '#F5F5F5', paddingTop:20}}>
                    <FlatList
                        ref='listRef'
                        data={tweets}
                        extraData={this.state}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => item.id + ""}
                        />
                </View>
            );
        }
    }

};


const styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    sortButton: {
        width:24,
        height:24,
        marginRight:10
    }
});
