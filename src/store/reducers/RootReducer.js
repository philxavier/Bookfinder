const initState = {
  list: [],
  books: [],
  left: false,
  open: false,
  description: null,
  currentBookTitle: null
};

const RootReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      var newList = Object.assign({}, state.list);
      newList.push(action.payload);
      return {
        ...state,
        list: newList
      };

    case "SAVE_BOOKS":
      return {
        ...state,
        books: action.payload[0]
      };

    case "SHOW_LIST":
      return {
        ...state,
        left: !state.left
      };

    case "CLOSE_BAR":
      return {
        ...state,
        left: action.payload
      };

    case "UPDATE_LIST":
      var book = action.payload;
      var newList = state.list.slice();
      newList.push(book);
      return {
        ...state,
        list: newList
      };

    case "UPDATE_MODAL":
      return {
        ...state,
        open: !state.open,
        left: false
      };

    case "SHOW_DESCRIPTION":
      console.log("this is payload", action.payload);
      return {
        ...state,
        open: !state.open,
        description: action.payload.description,
        currentBookTitle: action.payload.title,
        left: false
      };

    default:
      return state;
  }
};

export default RootReducer;
