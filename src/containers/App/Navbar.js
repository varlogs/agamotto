import React, {Component} from 'react';
import LogoImg from '../../images/logo.png'
import {Row, Col} from 'antd';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './Navbar.scss'

const allSources = [
  { value: 'MagicListService', label: 'MagicListService' },
  { value: 'Blender', label: 'Blender' },
  { value: 'Propeller', label: 'Propeller' },
  { value: 'QuoteTrackerApi', label: 'QuoteTrackerApi' },
  { value: 'CustomerOrderService', label: 'CustomerOrderService' }
];

export default class Navbar extends Component {

  state = {selectedSources: ''}

  sourceSelected = (selectedValues) => {
    this.setState({selectedSources: selectedValues})
  }

  render() {
    const {selectedSources} = this.state
    return (
      <div className="navbar">
        <Row>
          <Col span={4} className="logoPos">
            <img src={LogoImg} className="logo"/>
          </Col>
          <Col span={8}  className="sourcePicker">
            <Select
              multi
              simpleValue
              name="form-field-name"
              placeholder="Select one or more sources specifically"
              value={selectedSources}
              options={allSources}
              onChange={this.sourceSelected}
            />
          </Col>
          <Col span={12}>
          </Col>
        </Row>
      </div>
    )
  }
}
