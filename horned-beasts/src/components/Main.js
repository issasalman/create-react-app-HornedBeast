import React from 'react';
import HornedBeasts from './HornedBeasts';
import Horned from '../assets/data.json';
class Main extends React.Component {

  render() {
    return (
      <div >
        {Horned.map((item,index)=>{
          return(
            <HornedBeasts  title={item.title} desc={item.description} image_url={item.image_url} key={index} horns={item.horns} />
          );
        })}

      </div>
    );
  }
}

export default Main;
