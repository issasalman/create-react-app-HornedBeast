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
      data: Horned,
    };
  }

  handleCallback = (childData) => {
    this.setState({ data: childData });
    console.log("data",childData );
  };
  render() {
    const { data } = this.state;
   
    return (
      <main>
        <HornForm parentCallback={this.handleCallback} />

        <Row xs={1} md={3} className="g-4">
          {data.map((item) => {
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
