import React, { Component } from "react";
import { Button } from 'antd';
import styled from 'styled-components';


const Main = styled.main`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    width: 100%;
    margin: auto;
    background-color: #e1e0e0;
    height: 100vh;
    display: block;
`;

const StyledButton = styled(Button)`
    border: 1px solid #f6f0f0;
    top: 50%;
    background-color: #78789d;
    border-radius: 20px;
    &:hover {
        background-color: #4d4c51;
        border: transparent;
    }  
`;



const Home = props => (
    <Main>
        <StyledButton type="primary" onClick={() => props.history.push("/login")}>Go to Login</StyledButton>
    </Main>
)

export default Home;