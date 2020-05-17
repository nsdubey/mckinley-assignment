import React, { Component } from "react";
import { Row, Col, Input } from 'antd';
import { fetchMessagesRequest } from "../reducers/users/usersReducer";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
const { Search } = Input;

class Messages extends Component {
    state = {
        loading: false,
        error: null,
        messages: []
    }

   
    render() {
        return (
            <>
                <Row>
                    <Col span={24}>
                        <h1>Messages</h1>
                        <Col span={24}>
                            
                        </Col>
                    </Col>
                </Row>
                
            </>
        )
    }
}

export default connect(
    state => ({
        messages: state.users.messages
    }),
    {
        fetchMessages: fetchMessagesRequest
    }
)(withRouter(Messages));
