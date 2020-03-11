import React from 'react';
import Banner from './Components/Banner';
import Subnav from './Components/Subnav';
import './App.css';
import Navbar from './Components/Navbar';
import ProductArea from './Components/ProductArea';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
    }
  }

  render() {
    return (
      <div>
        <Banner />
        <Navbar />
        <Subnav />
        <ProductArea />
      </div>

    )
  }
}

export default App;
