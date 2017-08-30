import React from "react"
import ReactDOM from "react-dom"

export default class Navigation extends React.Component{
  render() {
    return (
      <div className="navigation">
        <span>Hello</span>
        <div className="navLeft"></div>
        <div className="navRight"></div>
      </div>
    )
  }
}