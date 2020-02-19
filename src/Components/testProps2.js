import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexboxCenter } from '../StyledCom/flexbox.js'

const testProps2 = (props) => {
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
            <span>Second child</span>
            <button>Second Child Value</button>
            <span style={{
                color: "#000000"
            }}>
                {props.secondChildValue}
            </span>
        </div>
    );
}

export default testProps2