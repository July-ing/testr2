import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'antd';

export default class Banner extends React.Component {
  render() {
    let style = (i) => {
      return {backgroundImage: 'url(images/banner'+i+'.jpg)'}
    }
    
    return (
      <Carousel autoplay>
        <div style={style(1)}>1</div>
        <div style={style(2)}>2</div>
        <div style={style(3)}>3</div>
        <div style={style(4)}>4</div>
      </Carousel>
    );
  }
}
