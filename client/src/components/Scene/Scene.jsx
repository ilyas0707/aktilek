import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Main } from '../../pages/Main/Main'
import { About } from '../../pages/About/About'
import { Courses } from '../../pages/Courses/Courses'

import Styles from './Scene.module.css'

export const Scene = () => {
    return (
        <div className={Styles.scene}>
            <Switch>
                <Route path="/main" exact>
                    <Main />
                </Route>
                <Route path="/aboutus" exact>
                    <About />
                </Route>
                <Route path="/courses" exact>
                    <Courses />
                </Route>
            </Switch>
        </div>
    )
}
