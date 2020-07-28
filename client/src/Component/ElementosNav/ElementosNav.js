import React from 'react';
import './ElementosNav.css';
import SubMenu from '../subMenu/subMenu' 

let arrayMenu = [
    {
        id: 'sites',
        menu: 'Sites'
    },
    {
        id: 'benefis',
        menu:'Benefis'
    },
    {
        id: 'pandaClub',
        menu:'Panda CLUB'
    },
    {
        id: 'galery',
        menu:'Galery'
    },
    {
        id: 'subcription',
        menu:'Subcription'
    }
]

class ElementosNav extends React.Component{
    
    constructor(props){
        super(props);

        // this.handleEventMouseOver = this.handleEventMouseOver.bind(this);
    }

    handleEventMouseOver(e){
        e.target.style.color = "red";
    };

    handlerEventMouseOut(e){
        e.target.style.color = "rgb(235, 255, 230)";
    };

    render(){
    
        return (
        
        <div>
            <ul className='menuPrincipal'>
               {arrayMenu.map(element=>{
                return <li key={element.id} onMouseOver={this.handleEventMouseOver}
                onMouseOut={this.handlerEventMouseOut}> {element.menu} </li>
                })
               } 
            </ul>
            
            <ul className='subMenu'>
                <SubMenu onMouseOver={this.handleEventMouseOver}/>
            </ul>
        </div>)
        
    }
}

export default ElementosNav;

// <li id='sites' onMouseOver={this.handleEventMouseOver}
// onMouseOut={this.handlerEventMouseOut}>
// Sites</li>
// <li id='benefis'>Benefits</li>
// <li id='pandaClub'>PANDA CLUB</li>
// <li id='galery'>Galery</li>
// <li id="subcription">Subcription</li> 