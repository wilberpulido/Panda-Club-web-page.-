import React from 'react';
import './Navegador.css';
import ElementNav from '../ElementNav/ElementNav';
import menuObj from './menuObj';

class Navegador extends React.Component{
    render(){
        return(<div className='elemenosNavNuevos'>
        <ElementNav menu={menuObj.sites}/>
        <ElementNav menu={menuObj.benefits}/>
        <ElementNav menu={menuObj.pandaClub}/>
        <ElementNav menu={menuObj.subcription}/>
        <ElementNav menu={menuObj.galery}/>
      </div>
      )
    }
}

export default Navegador;