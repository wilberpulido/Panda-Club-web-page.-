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
        id: 'benefits',
        menu:'Benefits'
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

class ElementosNav extends React.Component{
    
    handleEventMouseOver(Event){
        Event.target.style.color = "rgb(135, 241, 144)";

        if(Event.target.id == 'sites'){
            document.getElementById('subSites').style.visibility ='visible';
        } else if (Event.target.id == 'benefits') {
            document.getElementById('subBenefits').style.visibility ='visible';
        } else if (Event.target.id == 'subcription') {
            document.getElementById('subSubcription').style.visibility ='visible';
        }else if (Event.target.id == 'galery') {
            document.getElementById('subGalery').style.visibility ='visible';
        } 
    };

    handlerEventMouseOut(Event){
        Event.target.style.color = "rgb(235, 255, 230)";

        if(Event.target.id == 'sites'){
            document.getElementById('subSites').style.visibility = 'hidden';
        }else if (Event.target.id == 'benefits') {
            document.getElementById('subBenefits').style.visibility ='hidden';
        }else if (Event.target.id == 'subcription') {
            document.getElementById('subSubcription').style.visibility ='hidden';
        }else if (Event.target.id == 'galery') {
            document.getElementById('subGalery').style.visibility ='hidden';
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
