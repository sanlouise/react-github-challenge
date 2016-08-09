import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions';

class SearchBar extends Component {

	render() {
    return (
        <div className="search">
            <input className="search-input" onKeyDown={this._onSearch} placeholder="Input symbol" ref="input"/>
            <button className="search-button" onClick={this._onClick}><i className="material-icons">search</i></button>
        </div>
    )
  }

function select(state) {
  return {
    search: state.get('search')
  }
}

function dispatch(dispatch) {
  return bindActionCreators(actions.search, dispatch);
}

export default connect(select, dispatch)(SearchBar);