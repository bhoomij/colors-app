import React, {Component} from 'react';

import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

export default class Palette extends Component {
  state = {level: 500};

  changeLevel = level => {
    this.setState ({level});
  };
  render () {
    const {colors} = this.props.pallete;
    const {level} = this.state;
    const coloxBoxes = colors[level].map (({hex, name}) => (
      <ColorBox background={hex} name={name} />
    ));

    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className="Palette-colors">
          {coloxBoxes}
        </div>
      </div>
    );
  }
}
