import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  render() {
    const src = `https://media3.giphy.com/media/${this.props.id}/200.gif?cid=ecf05e47awgtwnzza5w3dfpevgelpz79paysklmx3cy6mg89&rid=200.gif`
    return (
      <img src={src} alt="" className="gif"/>
    );
  }
}

export default Gif;
