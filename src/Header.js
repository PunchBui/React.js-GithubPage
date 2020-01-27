import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
class Header extends Component {
    render() {
      return (
        <Wrapper>
            <Button>About</Button>
        </Wrapper>
      )
    }
  }
  
export default Header

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 70px;
background: linear-gradient(135deg, rgba(218,0,222,1) 0%, rgba(218,0,222,1) 2%, rgba(224,49,90,1) 46%, rgba(214,185,0,1) 100%);
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;