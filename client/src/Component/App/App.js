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
  // componentDidMount(){
  //   fetch('/api/customers')
  //     .then(res=> res.json())
  //     .then(customers => this.setState(
  //       {customers},
  //       () => console.log('Customers fetched..',
  //       customers))
  //     );
  // }

  render() {
    return (
      <div className="App">
        <nav>
          <Navegador />
        </nav>
      <div className="Introduction">
      </div>
      </div>
    );
  }
}

export default App;
