import react from 'react'
import {Link} from 'react-router-dom'
const MenuBar=()=>{
   return(
    <div className='menu'>
      <ul className='menu-item'>
        <li>
            <Link to="/">Make PortFolio Website</Link>
        </li>
        {/* <li>
            <Link to="/view">View PortFolio Website</Link>
        </li> */}
      </ul>
    </div>
   ) 
}
export default MenuBar;