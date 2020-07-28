import React from 'react';
import './ElementosNav.css';
import SubMenu from '../subMenu/subMenu' 

let arrayMenu = [
    {
        key: 1,
        id: 'sites',
        menu: 'Sites'
    },
    {
        key: 2,
        id: 'benefis',
        menu:'Benefis'
    },
    {
        key: 3,
        id: 'LogoNav',
        menu:'Panda CLUB'
    },
    {
        key: 4,
        id: 'subcription',
        menu:'Subcription'
    },
    {
        key: 5,
        id: 'galery',
        menu:'Galery'
    }
]

const subSites = document.getElementById('subSites');

class ElementosNav extends React.Component{
    
    handleEventMouseOver(e){
        e.target.style.color = "rgb(135, 241, 144)";

        if(e.target.id == 'sites'){
            document.getElementById('subSites').style.visibility ='visible';
        }
    };

    handlerEventMouseOut(e){
        e.target.style.color = "rgb(235, 255, 230)";

        if(e.target.id == 'sites'){
            document.getElementById('subSites').style.visibility = 'hidden';
        }

    };

    render(){
        //Retornare la lista del menu principal y los subMenu que des desplegan con los eventos
        //onMouseOver y onMouseOut
        
        return (
            <div>
                <div>
                    <ul className='menuPrincipal'>
                    {arrayMenu.map(element=>{
                        return <li id={element.id} className = 'listMenu' 
                        onMouseOver={this.handleEventMouseOver} key={element.key}
                        onMouseOut={this.handlerEventMouseOut}>{element.menu}</li>
                    })
                    } 
                    </ul>
                </div>
                <div>
                        <SubMenu />
                </div>
            </div>)
        
    }
}

export default ElementosNav;
