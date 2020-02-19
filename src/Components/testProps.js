import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexboxCenter } from '../StyledCom/flexbox.js'

const TestProps = (props) => {
    let reciveValue = props.parentValue ? "success" : "fail"
    return(
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
            <span>First child</span>
            <button onClick={() => this.props.childToParent()}>Parent Value</button>
            <span style={{
                color: "#000000"
            }}>
                {reciveValue}
            </span>
        </div>
    );
}

export default TestProps;