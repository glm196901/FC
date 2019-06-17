import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import ReactDOM from 'react-dom'

import './header.sass'


import { Menu, Dropdown, Icon } from 'antd';



const menu = (
    <Menu>
      <Menu.Item>
        {/* <NavLink to="/introduce/dynamics">公司动态</NavLink> }
      </Menu.Item>
      <Menu.Item>
        {/* <NavLink to="/introduce/advantages">优势</NavLink> */ }
      </Menu.Item>
    </Menu>
  );
  
  
  const menu1 = (
    <Menu>
      <Menu.Item>
        <NavLink to="/marketcenter/stockindex">股指期数</NavLink>
      </Menu.Item>
      <Menu.Item>
      <NavLink to="/marketcenter/domestic">国内行情</NavLink>
      </Menu.Item>
      <Menu.Item>
      <NavLink to="/marketcenter/international">国际行情</NavLink>
      </Menu.Item>
    </Menu>
  );
  



// class 

class Header extends Component {
    render() {
        return (
                <div className={"navBox"}>
                    <ul className={"navBar"}>
                        <li>
                            <NavLink exact to="/">首页</NavLink>
                        </li>
                        <li>
                           <NavLink to="/introduce/brief">公司介绍</NavLink>
                        </li>
                        <li>
                            <NavLink to="/marketcenter/stockindex">行情中心</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/infocenter/marketinfo">资讯中心</NavLink>
                        </li>
                        <li>
                            <NavLink to="/download">下载软件</NavLink>
                        </li>
                        <li>
                            <NavLink to="/connection">联系我们</NavLink>
                        </li>
                    </ul>
                </div>
        );
    }
}

export default Header;