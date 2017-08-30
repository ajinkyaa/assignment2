import React from "react"
import ReactDOM from "react-dom"

export default class EditItems extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      selectedName: this.props.selectedItemName,
      selectedID:  this.props.selectedID
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedName: nextProps.selectedItemName,
      selectedID: nextProps.selectedID
    })  
  }

  handleChange(event) {
     this.setState({
      selectedName: event.target.value
    })
  }

  handleSubmit(event) {
    if(event.keyCode == 13) {
      this.props.handleSubmit(this.state.selectedID, this.state.selectedName)
    }
  }

  render() {
    return (
      <div>
        <input type="text" 
          value={this.state.selectedName} 
          onKeyUp={this.handleSubmit.bind(this)} 
          onChange={this.handleChange.bind(this)} 
        />
      </div>
    )
  }
}