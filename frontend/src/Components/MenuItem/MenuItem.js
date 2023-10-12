import React, { useState } from 'react'
import "./MenuItem.css"
import { NavLink} from 'react-router-dom';
import {ListGroup } from 'react-bootstrap';
function MenuItem(props ) {

     const {name, subMenus, iconClassName, to , click} = props;
       const [expand, setExpand] = useState(false);
     
  return (

   <li >
    {
      subMenus && subMenus.length > 0 ?(
       <a   onClick={() => setExpand(!expand)} >              
        <i className={iconClassName}></i>
         <span className="linkName">{name}</span>
             </a>  
      ): (<NavLink to={to}  onClick={() => setExpand(!expand)} >              
        <i className={iconClassName}></i>
         <span className="linkName">{name}</span>
             </NavLink>)}
             {
                subMenus && subMenus.length > 0 ? ( 
                         <ul className={ expand ? 'expanded submenu' : 'submenu' }>
                            {subMenus.map((menu,index) => 
                                 <li key={index}>
                                    <NavLink to={menu.to} >
                                    <span className="sublinkName">{menu.name}</span>
                                    </NavLink>
                                 </li>)}
                                
                                
                             </ul>) : null
             }
                
                    </li>
                    
  )
}

export default MenuItem