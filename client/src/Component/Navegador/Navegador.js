import React from 'react';
import './Navegador.css';
import ElementosNav from '../ElementosNav/ElementosNav';
import ElementNav from '../ElementNav/ElementNav';

// const elementosNav=[
//   {menuPrincipal: ['Sites','Benefits','Panda CLUB','Subcription','Galery']}
// ];

class Navegador extends React.Component{
    render(){
        return(<div>
          <ElementosNav
            changedColor={this.props.changedColor}
            unChangedColor={this.props.unChangedColor}
            handlerMouseOver={this.props.handlerMouseOver}
            handlerMouseOut={this.props.handlerMouseOut}/>

      <div className='elemenosNavNuevos'>
      
      <ElementNav/>

      </div>
      </div>
      )
    }
}

export default Navegador;