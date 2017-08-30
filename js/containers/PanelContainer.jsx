import React from "react"
import ListView from './../components/ListView.jsx'
import EditItems from './../components/EditItems.jsx'

export default class PanelContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state= {
      selectedItem: {
        text: '',
        id: ''
      }
    }
  }

  handleClick(id, text) {
    this.setState({
      selectedItem: {
        text: text,
        id: id
      }
    })
  }

  handleSubmit(id, text) {
    this.props.actions(id, text)
  }

  render() {
    return (
      <div>
        <div className="leftPanel">
          <ul>
            {this.props.items.map(item =>
              <ListView item={item} handleClick={this.handleClick.bind(this)} key={item.id}/>
            )}
          </ul>
        </div> 
        <div className="rightPanel">
          <h3>
            Select name from left Panel to edit
          </h3>
          <EditItems 
            selectedItemName={this.state.selectedItem.text} 
            handleSubmit={this.handleSubmit.bind(this)} 
            selectedID={this.state.selectedItem.id} 
          />
        </div>
      </div>
    )
  }
}