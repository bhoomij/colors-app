import React, {Component} from 'react';
import Slider from 'rc-slider';
import ColorBox from './ColorBox';
import 'rc-slider/assets/index.css';
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
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
          />
        </div>
        <div className="Palette-colors">
          {coloxBoxes}
        </div>
      </div>
    );
  }
}
