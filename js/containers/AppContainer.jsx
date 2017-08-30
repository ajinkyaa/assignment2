import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PanelContainer from './PanelContainer.jsx'
import {editItems} from '../actions'
import Navigation from '../components/Navigation.jsx'

const AppContainer = ({items, actions}) => (
  <div className="container">
    <Navigation />
    <PanelContainer items={items} actions={actions} />
  </div>
)

const mapStateToProps = state => ({
  items: state.items
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(editItems, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
