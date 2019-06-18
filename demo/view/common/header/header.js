import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import ReactDOM from 'react-dom'

import './header.sass'
import 'antd/dist/antd.css'


import { Menu, Dropdown, Icon } from 'antd';
import { IPv4 } from 'ipaddr.js';


// const ip = "http://localhost:3000"
const ip = window.location.origin


const introduce = (
    <Menu>
      <Menu.Item>
        <NavLink to="/introduce/brief">公司简介</NavLink>
      </Menu.Item>      
      <Menu.Item>
        <NavLink to="/introduce/dynamics">公司动态</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/introduce/advantages">公司优势</NavLink>
      </Menu.Item>
    </Menu>
  );
  
  
  const marketCenter = (
    <Menu>
      <Menu.Item>
        <NavLink to="/marketcenter/stockindex">股指期数</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink  to="/marketcenter/domestic">国内行情</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink  to="/marketcenter/international">国际行情</NavLink>
      </Menu.Item>
    </Menu>
  );
  
const infoCenter = (
    <Menu>
    <Menu.Item>
      <NavLink to="/infocenter/marketinfo">行业资讯</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to="/infocenter/dailynews">财经日历</NavLink>
    </Menu.Item>
    <Menu.Item>
    <NavLink to="/infocenter/everyweek">每周洞察</NavLink>
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
                           <Dropdown overlay={introduce}>
                              <NavLink to="/introduce/brief">公司简介
                                 <Icon type="down" />
                              </NavLink>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown overlay={marketCenter}>
                              <NavLink to="/marketcenter/stockindex">行情中心
                                 <Icon type="down" />
                              </NavLink>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown overlay={infoCenter}>
                              <NavLink to="/infocenter/marketinfo">资讯中心
                                 <Icon type="down" />
                              </NavLink>
                            </Dropdown>
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