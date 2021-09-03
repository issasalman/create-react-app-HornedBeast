import React from "react";
import Form from "react-bootstrap/Form";
import Horned from "../assets/data.json";
// import Main from "./Main";
class HornForm extends React.Component {
  constructor(props) {
    super(props);
  }
  filterHorn = (event) => {
    let value = parseInt(event.target.value);
    let filteredArray;
    filteredArray = Horned.filter((element) => {
      if (element.horns === value) {
        return value;
      } else if (value === 0) {
        return Horned;
      }
    });
    this.props.parentCallback(filteredArray);
  };
  render() {
    return (
      <div>
        <Form className="selectForm">
          <Form.Label>Choose the Number Of Hornes</Form.Label>

          <Form.Control as="select" onChange={this.filterHorn}>
            <option value="0"> All Beasts </option>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
            <option value="100"> 100 </option>
          </Form.Control>
        </Form>
      </div>
    );
  }
}

export default HornForm;
