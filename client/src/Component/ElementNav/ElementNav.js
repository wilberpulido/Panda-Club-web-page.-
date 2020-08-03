import React from 'react';
import './ElementNav.css';

class ElementNav extends React.Component{
    render(){
        const {menu} = this.props;
        return (<div>
            <ul className='elementNav'>
            {menu.menuPrincipal.map((element)=>{
            return <li key={element} className='menuPrincipal'
                    id={element}>
                {element}
                </li>
                })
            }
            {menu.menuSecundario !== 'undefined'?
                menu.menuSecundario.map((element)=>{
                    return <li key={element} className='menuSecundario'>
                        {element}
                        </li>
                }): console.log('undefined')}
            </ul>
        </div>
        )
    }
}

export default ElementNav;