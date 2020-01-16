import React, {Component} from 'react';

import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

export default class Palette extends Component {
  state = {level: 500, format: 'hex'};

  changeLevel = level => {
    this.setState ({level});
  };

  changeFormat = format => {
    this.setState ({format});
  };

  render () {
    const {colors} = this.props.pallete;
    const {level, format} = this.state;
    const coloxBoxes = colors[level].map (({[format]: formatStr, name}) => (
      <ColorBox background={formatStr} name={name} />
    ));

    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleFormatChange={this.changeFormat}
        />
        <div className="Palette-colors">
          {coloxBoxes}
        </div>
      </div>
    );
  }
}
