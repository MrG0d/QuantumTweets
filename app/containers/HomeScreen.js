import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomeScreenView from '../components/HomeScreenView';

import * as Actions from '../actions';

function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreenView)
