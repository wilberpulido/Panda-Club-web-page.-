import React from 'react';
import './Navegador.css';
import ElementosNav from '../ElementosNav/ElementosNav'

class Navegador extends React.Component{
    render(){
        return(
      <div>
          <ElementosNav changedColor={this.props.changedColor}
            unChangedColor={this.props.unChangedColor}
            handlerMouseOver={this.props.handlerMouseOver}
            handlerMouseOut={this.props.handlerMouseOut}/>
      </div>
        )
    }
}

export default Navegador;