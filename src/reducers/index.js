export default (state, action) => {
  console.log(action)
  state = action.type;
  return state
  // switch (action.type) {
  //   case 'INCREMENT':
  //     state = 
  //     return state + 1
  //   case 'DECREMENT':
  //     return state - 1
  //   default:
  //     return state
  // }
}
