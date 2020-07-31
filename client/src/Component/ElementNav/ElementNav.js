import React from 'react';
import './ElementNav.css';
// import subMenuObj from '../SubMenu/subMenuObj';
// import subMenuObj from '../SubMenu/subMenuObj';


class menu {
    constructor(menuP,sub1,sub2,sub3,id){
        this.menuPrincipal=menuP;
        this.sub1=sub1;
        this.sub2=sub2;
        this.sub3=sub3;
        this.id=id;
    }
}

let sites = new menu(
'Sites','Palermo','Recoleta','Puerto Madero','mpSite');
let benefits = new menu('Benefits','Acceso a las instalaciones','Servicios de comida','Eventos privados pandasu familia','mpBenefit');
let pandaClub = new menu('Panda CLUB','','','','mpPandaClub');
let subcription = new menu('Subcription','Bronce','Plata','Oro','mpSub');
let galery = new menu('Galery','Photo','Video','','mpGalery');

let menuObj=[sites,benefits,pandaClub,subcription,galery]


class ElementNav extends React.Component{
    render(){
        return (<React.Fragment>
            {menuObj.map(menu=>{
                if(menu.id==='mpPandaClub'){
                    return <ul key={menu.id} className='elementNav'>
                    <li id={menu.id}>
                        {menu.menuPrincipal}
                    </li>
                </ul>
                } else if(menu.id === 'mpGalery'){
                    return <ul key={menu.id} className='elementNav'>
                    <li className='mPrincipal'>
                        {menu.menuPrincipal}
                    </li>
                    <li className='mSegundario'>{menu.sub1}</li>
                    <li className='mSegundario'>{menu.sub2}</li>
                    </ul>
                }return <ul key={menu.id} className='elementNav'>
                    <li className='mPrincipal'>
                        {menu.menuPrincipal}
                    </li>
                    <li className='mSegundario'>{menu.sub1}</li>
                    <li className='mSegundario'>{menu.sub2}</li>
                    <li className='mSegundario'>{menu.sub3}</li>
                </ul>
            })
            }
        </React.Fragment>
        )
    }
}

export default ElementNav;