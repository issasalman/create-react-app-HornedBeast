import React from 'react'; 
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './components/SelectedBeast.js';
import Horned from './assets/data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AllHorned:Horned,
      show: false,
      theSelectedOne: {},
    };
  }
  

  showModal = (title) => {
    
    let selectedArr =Horned.find(element => {
      return(element.title === title);
      
      
    });
    
    this.setState({
      show: true,
      theSelectedOne: selectedArr,
    });
    return selectedArr ;
    
  };

  handleClose = () => {
    this.setState({ show: !this.state.show
     
    
    });
  }
  
  render() {
    return (
      <div>
        <Header />
        <Main
          theSelectedOne={this.state.theSelectedOne}
          showModal={this.showModal}
        />
        <SelectedBeast
            
          handleClose={this.handleClose}
          show={this.state.show}
          theSelectedOne={this.state.theSelectedOne} 
        />
        <Footer />
      </div>
    );
  }
}

export default App;
