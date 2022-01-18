import React from 'react'
import { Switch} from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import HomePage from '../Pages/Home'
import PromotionPage from '../Pages/Promotion'
import Route from './routes'


const Routers = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/dashboard' component={Dashboard} isPrivate/>
                <Route path='/promotions' component={PromotionPage} />
            </Switch>
        </>
    )
}

export default Routers
