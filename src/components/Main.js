import React from "react";
import HornedBeasts from "./HornedBeasts";
import Horned from "../assets/data.json";
import HornForm from "./HornForm";
// import App from '../App';
import Row from "react-bootstrap/Row";
class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      RenderedHorne: Horned,
    };
  }

  filterHorn = (event) => {
    let value = parseInt(event.target.value);

  

    let filteredArray = Horned.filter((element) => {
      if (element.horns === value) {
        return true;
      }
    });
    this.setState({
      RenderedHorne: filteredArray,
    });
    
    if (value === 0) {
      this.setState({
        RenderedHorne: Horned,
      });
    }
  
  };
  render() {
    return (
      <main>
        <HornForm filterHorn={this.filterHorn} />
        <Row xs={1} md={3} className="g-4">
          {this.state.RenderedHorne.map((item) => {
            return (
              <HornedBeasts
                title={item.title}
                desc={item.description}
                image_url={item.image_url}
                horns={item.horns}
                alt={item.keyword}
                showModal={this.props.showModal}
                handleClose={this.props.handleClose}
              />
            );
          })}
        </Row>
      </main>
    );
  }
}

export default Main;
