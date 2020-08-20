import React from 'react';
import './Navegador.css';
import ElementNav from '../ElementNav/ElementNav';
import menuObj from './menuObj';

class Navegador extends React.Component{
    render(){
      const {changedColor,unChangedColor}=this.props;

        return(<div className='elemenosNavNuevos'>
        <ElementNav menu={menuObj.sites} changedColor={changedColor} 
          unChangedColor={unChangedColor}/>

        <ElementNav menu={menuObj.benefits} changedColor={changedColor} 
          unChangedColor={unChangedColor}/>

        <ElementNav menu={menuObj.pandaClub} changedColor={changedColor} 
          unChangedColor={unChangedColor}/>

        <ElementNav menu={menuObj.subcription} changedColor={changedColor} 
          unChangedColor={unChangedColor}/>

        <ElementNav menu={menuObj.galery} changedColor={changedColor} 
          unChangedColor={unChangedColor}/>

      </div>
      )
    }
}

export default Navegador;