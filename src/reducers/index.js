export default (state, action) => {
  console.log(action);
  // state = 'something error'
  // switch (action.type) {
  //   case 'musicUrl':
  //     state = action.musicUrl
  //     return state
  //   case "searchApi":
  //     return action
  //   default:
  //     return state
  // }
  return action
}
