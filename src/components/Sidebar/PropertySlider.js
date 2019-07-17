import React from 'react'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'

export default class PropertySlider extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="input-component">
        <h5>{this.props.label}</h5>
        <Slider
          min={1}
          defaultValue={this.props.value}
          max={3}
          marks={{ 1: 'Small', 3: 'Big' }}
          step={1}
          onChange={value =>
            this.props.setAppState({ [this.props.valueName]: value })
          }
        />
      </div>
    )
  }
}
