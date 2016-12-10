import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Login from './../Login/Login';
import {DatePicker} from 'antd';
const {RangePicker} = DatePicker;
import './App.scss';
import {Menu, Breadcrumb, Icon} from 'antd';

import enUS from 'antd/lib/locale-provider/en_US'
import {LocaleProvider} from 'antd'
import Navbar from './Navbar'

class App extends Component {
  static propTypes = {
    children: PropTypes.element,
    isAuthenticated: React.PropTypes.bool,
    routing: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.renderAuthenticatedPage = this.renderAuthenticatedPage.bind(this);

    this.state = {
      collapse: false
    };
  }

  componentDidMount() {
  }

  renderAuthenticatedPage() {
    return <Navbar/>
  }

  render() {
    const {isAuthenticated} = this.props;
    return (
      <div>
        <LocaleProvider locale={enUS}>
          {isAuthenticated ? this.renderAuthenticatedPage() : <Login/>}
        </LocaleProvider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {routing, auth: {isAuthenticated, user}} = state;
  return {
    isAuthenticated, user, routing
  };
}

export default connect(mapStateToProps)(App);
