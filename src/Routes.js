import React from 'react'
import {Switch,Route,BrowserRouter} from 'react-router-dom'
import Usuario from './pages/Usuario'
import Sidebar from './components/sidebar/Sidebar'

import Main from './components/main/Main'

function Routes() {
    return(
        

        <Switch>
            <Route path='/usuario' component={Usuario}/>
            <Route path='/' exact component={Main}/>
            
        </Switch>
        
        
        
    )
    
}



export default Routes;