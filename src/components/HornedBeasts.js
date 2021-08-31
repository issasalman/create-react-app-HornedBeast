import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numOfHornedVotes: 0
       
    };
  }
  increaseHorneVotes = () => {
    this.setState({
      numOfHornedVotes: this.state.numOfHornedVotes + 1 
      
    });
    
    this.updateSelected();
    
  }
 
  updateSelected = () => {
    this.props.showModal(this.props.title);
  }
  

  render() {


    return (
      <div>
       
        <Card style={{ width: '25rem',border: 'solid',background:"#89cff0" ,color :"blue"}}>
          <Card.Img variant="top" src={this.props.image_url } onClick={this.increaseHorneVotes} alt={this.props.alt} />
          <Card.Body>
            <Card.Title>The Title is {this.props.title}</Card.Title>
            <Card.Text>
              number of horns {this.props.horns}
            </Card.Text>
            <Card.Text>
             Summary:- {this.props.desc}
            </Card.Text>
            <Card.Text>
              Number of votes : {this.state.numOfHornedVotes} 💓
              {/*               
    function issa() {
      if (this.state.numOfHornedVotes === 1) { 
                    
        hi}
     }; */}
            </Card.Text>
            <Button onClick={this.increaseHorneVotes}>Click here or on Image to see more Details</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}


export default HornedBeasts;
