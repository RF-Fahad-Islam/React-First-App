import React from 'react'

export default function Footer() {
    let footerStyle = {
        backgroundColor:"black",
        width:"100%",
        position:"absolute",
        bottom:"0px",
        color:"white",
        padding:"5px 0"
    }
    let pStyle = {
        margin:"0!important"
    }
    return (
        <div style={footerStyle}>
            <p style={pStyle}>Copyright &copy; Todo List App 2021</p>
        </div>
    )
}
