import React from 'react';
import './subMenu.css';

class SubMenu extends React.Component{
    
    handlerEventMouseOverSubMenu(Event){
        if (Event.target.id == 'subSites' || Event.target.className == 'SubMenuIndividualSites') {
            document.getElementById('subSites').style.visibility='visible';
        }else if (Event.target.id == 'subBenefits' || Event.target.className == 'SubMenuIndividualBenefits') {
            document.getElementById('subBenefits').style.visibility='visible';
        }
    }

    handlerEventMouseOutSubMenu(Event){
        if (Event.target.id == 'subSites' || Event.target.className == 'SubMenuIndividualSites') {
            document.getElementById('subSites').style.visibility='hidden';
        }else if (Event.target.id == 'subBenefits' || Event.target.className == 'SubMenuIndividualBenefits') {
            document.getElementById('subBenefits').style.visibility='hidden';
        }
    }

    render(){
        return (
            <div className='subMenu'>
                <ul id ='subSites' onMouseOver={this.handlerEventMouseOverSubMenu}
                    onMouseOut={this.handlerEventMouseOutSubMenu}>
                    <li className='SubMenuIndividualSites'
                        onMouseOver={this.handlerEventMouseOverSubMenu}>Palermo</li>
                    <li className='SubMenuIndividualSites'>Recoleta</li>
                    <li className='SubMenuIndividualSites'>Puerto Madero</li>
                </ul>
                <ul id ='subBenefits' onMouseOver={this.handlerEventMouseOverSubMenu}
                onMouseOut={this.handlerEventMouseOutSubMenu}>
                    <li className='SubMenuIndividualBenefits'>Acceso total</li>
                    <li className='SubMenuIndividualBenefits'>Diversion</li>
                    <li className='SubMenuIndividualBenefits'>Comida</li>
                </ul>
                <ul>
                    <li> <img id="logo" src='https://www.dw.com/image/39558053_403.jpg'/> </li>
                </ul>
                <ul id ='subSubcription' onMouseOver={this.handlerEventMouseOverSubMenu}
                onMouseOut={this.handlerEventMouseOutSubMenu}>
                    <li className='SubMenuIndividualGalery'>Bronce</li>
                    <li className='SubMenuIndividualGalery'>Plata</li>
                    <li className='SubMenuIndividualGalery'>Oro</li>
                </ul>
                <ul id ='subGalery' onMouseOver={this.handlerEventMouseOverSubMenu}
                onMouseOut={this.handlerEventMouseOutSubMenu}
                onMouse>
                    <li className='SubMenuIndividualSubcription'>Photos</li>
                    <li className='SubMenuIndividualSubcription'>Videos</li>
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