import React from "react"
import ReactDOM from "react-dom"

export default class ListView extends React.Component{
  render() {
    return (
      <li>
        <span>{this.props.item.text}</span> 
        <a href="javascript:void(0)" onClick={() => {this.props.handleClick(this.props.item.id, this.props.item.text)}}>
          Select Item
        </a>
      </li>  
    )
  }
}() => {}