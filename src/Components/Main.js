import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexboxCenter } from '../StyledCom/flexbox.js'
import profile from '../Assets/Profile.jpg'
import TestProps from './testProps.js'
import TestProps2 from './testProps2.js'

class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          parentValue : "ready",
          childValue : "ready",
          secondChildValue : "ready",
        };
    }
    parentToChild() {
        this.setState({
            parentValue : "success"
        });
    }
    childToParent = () => {
        this.setState({
            childValue : "success"
        });
    }
    childToChild = () => {
        this.setState({
            secondChildValue : "success"
        });
    }
    render() {
        return (
        <Wrapper>
            <ProfileContainer>
                
                {/* <ProfileImg src={profile} /> */}
                <TestProps parentValue = {this.state.parentValue} childToParent = {this.childToParent}/>
                <div style={{
                    height: "200px",
                    width: "300px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#CCCCCC",
                    borderRadius: "25px",
                    boxShadow: "5px 10px",
                    margin: "20px"
                }}>
                    <span>Parent</span>
                    <button>Child value</button>
                    <span>{this.state.childValue}</span>
                </div>
                <TestProps2 secondChildValue = {this.state.secondChildValue}/>
            </ProfileContainer>
        </Wrapper>
        )
    }
}
  
export default Main

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
`;

const ProfileContainer = styled(FlexboxCenter)`
height: 300px;
width: 100%;
/* background-color: #000000; */
`;

const ProfileImg = styled.img`

`;