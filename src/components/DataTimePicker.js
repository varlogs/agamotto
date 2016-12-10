import React, {Component} from 'react'
import {Button, Glyphicon} from 'react-bootstrap'
import moment from 'moment'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import 'react-bootstrap-daterangepicker/css/daterangepicker.css'

export default class DateTimePicker extends Component {

  state = {
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    startDate: moment(),
    endDate: moment()
  }

  handleEvent = (event, picker) => {
    this.setState({
      startDate: picker.startDate,
      endDate: picker.endDate
    })
  }

  label = () => {
    let start = this.state.startDate.format('YYYY-MM-DD HH:mm:ss')
    let end = this.state.endDate.format('YYYY-MM-DD HH:mm:ss')
    let label = start + ' - ' + end
    if (start === end) {
      label = start
    }
    return label
  }

  render() {
    return (
      <DateRangePicker startDate={this.state.startDate}
                       endDate={this.state.endDate}
                       ranges={this.state.ranges}
                       onEvent={this.handleEvent}
                       timePicker
                       timePicker24Hour
                       timePickerSeconds>
        <Button className="selected-date-range-btn" style={{width:'100%'}}>
          <div className="pull-left"><Glyphicon glyph="calendar" /></div>
          <div className="pull-right">
									<span>
										{this.label()}
									</span>
            <span className="caret"></span>
          </div>
        </Button>
      </DateRangePicker>
    );
  }
}
