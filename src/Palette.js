import React, { Component } from 'react'
import ColorBox from './ColorBox';
import './Palette.css';

export default class Palette extends Component {
  render() {
    const coloxBoxes = this.props.colors.map(({color, name}) => <ColorBox background={color} name={name} /> );
    return (
      <div className="Palette">
        <div className="Palette-colors">
          {coloxBoxes}
        </div>
      </div>
    )
  }
}
