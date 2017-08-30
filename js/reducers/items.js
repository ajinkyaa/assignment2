import {initialState} from './initialState'
export default function items(state = initialState, action) {
  switch (action.type) {
    case "EDIT_ITEM":
      return state.map(item =>
        item.id === action.id ?
          { ...item, text: action.text } :
          item
      )
      break;
    default:
      return state
  }
}