import React from 'react';
import style from './style';

class ElementNav extends React.Component{
    render(){
        const {menu,changedColor,unChangedColor} = this.props;

        return (<div>
            <ul style={style.navigationElements}>
            <li key={menu.menuPrincipal} style={style.mainMenu}
                    id={menu.menuPrincipal} onMouseOver={changedColor}
                    onMouseOut={unChangedColor}>
                {menu.menuPrincipal}
                </li>
            {menu.menuSecundario !== 'undefined'?
                menu.menuSecundario.map((element)=>{
                    return <li key={element} style={style.subMenu}
                        onMouseOver={changedColor} onMouseOut={unChangedColor}>
                        {element}
                        </li>
                }): console.log('undefined')}
            </ul>
        </div>
        )
    }
}

export default ElementNav;