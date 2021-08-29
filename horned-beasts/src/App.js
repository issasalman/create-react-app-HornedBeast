import React from 'react'; // we are adding the react library into our App component

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


class App extends React.Component {

  render() { 
    return (
      <div>
      
      <Header />
        <Main />
        <Footer />
       
       
      </div>
    )
  }
}

export default App; 
