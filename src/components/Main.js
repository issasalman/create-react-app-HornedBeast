import React from "react";
import HornedBeasts from "./HornedBeasts";
import Horned from "../assets/data.json";
// import App from '../App';
class Main extends React.Component {
  render() {
    return (
      <main>
        {Horned.map((item) => {
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
      </main>
    );
  }
}

export default Main;
