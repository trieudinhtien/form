import React, { Component } from "react";
import {Col,Row, Container} from 'reactstrap';
import './Header.scss'
import { FaSearch } from 'react-icons/fa'
import { FaMicrophone } from 'react-icons/fa'


class Header extends Component{
    render(){
        return(
            <div className="header">
                <Container>
                    <Row>
                        <Col xs='2'>
                            <div className='logo'>
                            <div  className="logo_image"></div>
                            </div>
                        </Col>
                        <Col xs='8'>
                            <div className="Search">
                                <div className="Search_Box">
                                    
                                <div className='iconSearch'><FaSearch/></div>    
                                <input className='Search_Input' type='text' placeholder='Tìm kiếm theo mã, tên, sdt ...'></input>
                                <div className='iconMicro'><FaMicrophone/></div>
                                </div>
                            </div>    
                        </Col>

                        <Col xs='2'>
                            <div className='avatar'>
                                <div className="avatar_dropdown">
                                <div className="dropdown">
                                    <button class="dropbtn">Hi, Hung &#9660;</button>
                                    <div class="dropdown-content">
                                        <a href='/'>Đổi mật khẩu</a>
                                        <a href='/'>Thông tin</a>
                                        <a href='/'>Đăng xuất</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}


export default Header;