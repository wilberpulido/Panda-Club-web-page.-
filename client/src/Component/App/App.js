import React from 'react';
import Navegador from '../Navegador/Navegador'
import './App.css';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = ({
      customers:[]

    })
   }
  changedColor(event){
    event.target.style.color = "rgb(135, 241, 144)";
  }
  unChangedColor(event){
    event.target.style.color = "rgb(235, 255, 230)";
  }
  handlerMouseOver(event){

    if(
      event.target.id === 'sites'||
      event.target.id === 'subSites'||
      event.target.className === 'individualSites'){
        document.getElementById('subSites').style.visibility ='visible';

    }else if (
      event.target.id === 'benefits'||
      event.target.id === 'subBenefits' ||
      event.target.className === 'individualBenefits'
      ){
        document.getElementById('subBenefits').style.visibility='visible';

    }else if (
      event.target.id === 'subcription'||
      event.target.id === 'subSubcription'||
      event.target.className === 'individualSubcription'
      ){
        document.getElementById('subSubcription').style.visibility='visible';

    }else if (
      event.target.id === 'galery'||
      event.target.id === 'subGalery'||
      event.target.className === 'individualGalery'
      ){
        document.getElementById('subGalery').style.visibility='visible';
    
    }
  }
  handlerMouseOut(event){
    if(
      event.target.id === 'sites'||
      event.target.id === 'subSites'||
      event.target.className === 'individualSites'){
        document.getElementById('subSites').style.visibility ='hidden';

    }else if (
      event.target.id === 'benefits'||
      event.target.id === 'subBenefits' ||
      event.target.className === 'individualBenefits'){
        document.getElementById('subBenefits').style.visibility='hidden';

    }else if (
      event.target.id === 'subcription'||
      event.target.id === 'subSubcription'||
      event.target.className === 'individualSubcription'){
        document.getElementById('subSubcription').style.visibility='hidden';

    }else if (
      event.target.id === 'galery'||
      event.target.id === 'subGalery'||
      event.target.className === 'individualGalery'){
        document.getElementById('subGalery').style.visibility='hidden';
    
    }
  }


  render() {
    return (
      <div className="App">
        <nav>
          <Navegador
            changedColor={this.changedColor}
            unChangedColor={this.unChangedColor}
            handlerMouseOver={this.handlerMouseOver}
            handlerMouseOut={this.handlerMouseOut}/>
        </nav>
      <div className="Introduction">
      </div>
      </div>
    );
  }
}

export default App;