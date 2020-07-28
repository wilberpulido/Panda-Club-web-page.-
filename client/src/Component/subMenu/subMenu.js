import React from 'react';
import './subMenu.css';

class SubMenu extends React.Component{
    

    render(){
        return (
            <div className='subMenu'>
                <ul id ='subSites'>
                    <li className='SubMenuIndividual'>Palermo</li>
                    <li className='SubMenuIndividual'>Recoleta</li>
                    <li className='SubMenuIndividual'>Puero Madero</li>
                </ul>
                <ul id ='subBenefits'>
                    <li className='SubMenuIndividual'>Acceso total</li>
                    <li className='SubMenuIndividual'>Diversion</li>
                    <li className='SubMenuIndividual'>Comida</li>
                </ul>
                <ul>
                    <li> <img id="logo" src='https://www.dw.com/image/39558053_403.jpg'/> </li>
                </ul>
                <ul id ='subSubcription'>
                    <li className='SubMenuIndividual'>Bronce</li>
                    <li className='SubMenuIndividual'>Plata</li>
                    <li className='SubMenuIndividual'>Oro</li>
                </ul>
                <ul id ='subGalery'>
                    <li className='SubMenuIndividual'>Photos</li>
                    <li className='SubMenuIndividual'>Videos</li>
                </ul>
            </div>

            );
    }

}
export default SubMenu;


// <ul id ='login'>
//                     <li className='SubMenuIndividual' >Username: 
//                         <input placeholder='Username' type="name"/>
//                     </li>
//                     <li className='SubMenuIndividual'>Password: 
//                         <input placeholder='Password' type="password"/>
//                     </li>
//                 </ul>