import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutOutlined } from '@ant-design/icons';
import './App.less'

export default class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <div className="app-layout">
          <LayoutOutlined />
        </div>
        app...
        <Outlet />
      </div>
    )
  }
}
