import React, { Component } from "react";
import { Form, Input, Button, Row, Col } from 'antd';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { loginRequest } from "../reducers/users/usersReducer";

const LoginStyled = styled.main`
    font-size: 1.5em;
    text-align: center;
    width: 100%;
    margin: auto;
    height: 100vh;
    display: block;
    margin-top :  50px
`;


class Login extends Component {
    state = {

    }
    onSubmit = () => {

    }
    render() {
        return (
            <>
                <LoginStyled>
                    <Row>
                        <Col span={12} style={{ margin: "auto" }}>
                            <h2>Login</h2>
                            <Form
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={this.onSubmit}
                            >
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">Login</Button>
                                </Form.Item>
                            </Form>
                        </Col>

                    </Row>
                </LoginStyled>
            </>
        )
    }
}



export default connect(
    state => ({
        
    }),
    {
        onLogin: loginRequest
    }
)(withRouter(Login));
