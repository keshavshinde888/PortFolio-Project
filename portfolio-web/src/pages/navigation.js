import react from 'react'
import {Route,Router} from 'react-router-dom'
import {portfolioRegister} from "../components/portfolioRegister"
export const navigation=()=>{
   return(
    <div>
       <Router>
        <Route path='/form' Component={portfolioRegister}></Route>
        </Router> 
    </div>
   ) 
}