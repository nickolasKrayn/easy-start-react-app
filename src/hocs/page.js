import React, { Component } from 'react'
import { injectAsyncReducer } from './../store'
import { connect } from 'react-redux'

export default ({ asyncReducers } = {}) => (WrappedComponent) => {
    class PageHoc extends Component {
        componentDidMount () {
            if (asyncReducers) {
                Object.keys(asyncReducers).map(name => {
                    injectAsyncReducer(name, asyncReducers[name])
                })
            }
        }

        render () {
            return <React.Fragment>
                <WrappedComponent {...this.props} />
            </React.Fragment>
        }
    }

    return connect(mapStateToProps)(PageHoc)
}
