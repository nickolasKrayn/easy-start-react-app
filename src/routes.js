import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFoundPage from './pages/404'

export default () => (<Switch>
    <Route component={NotFoundPage} />
</Switch>)
