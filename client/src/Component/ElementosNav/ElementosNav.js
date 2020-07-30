import React from 'react';
import './ElementosNav.css';
import SubMenu from '../SubMenu/SubMenu';
import arrayMenu from './arrayMenu';

class ElementosNav extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <ul className='menuPrincipal'>{
                    arrayMenu.map(element=>{
                        return <div 
                            onMouseOver={this.props.handlerMouseOver}
                            onMouseOut={this.props.handlerMouseOut}>
                                <li id={element.id} key={element.key}
                                className='listMenu'
                                onMouseOver={this.props.changedColor}
                                onMouseOut={this.props.unChangedColor}
                                >{element.menu}
                                </li>
                        </div>
                        })
                    } 
                    </ul>
                </div>
                <div>
                    <SubMenu 
                    changedColor= {this.props.changedColor} 
                    unChangedColor= {this.props.unChangedColor}
                    handlerMouseOver={this.props.handlerMouseOver}
                    handlerMouseOut={this.props.handlerMouseOut}/>
                </div>
            </div>)
        
    }
}

export default ElementosNav;
