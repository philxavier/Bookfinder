const addBook = book => {
  return {
    type: "ADD_BOOK",
    payload: book
  };
};

const SaveBooks = booksList => {
  return {
    type: "SAVE_BOOKS",
    payload: booksList
  };
};

const showList = () => {
  return {
    type: "SHOW_LIST"
  };
};

const updateModal = () => {
  return {
    type: "UPDATE_MODAL"
  };
};

const updateList = book => {
  return {
    type: "UPDATE_LIST",
    payload: book
  };
};

const showDescription = bookInfo => {
  return {
    type: "SHOW_DESCRIPTION",
    payload: bookInfo
  };
};

const closeBar = side => {
  return {
    type: "CLOSE_BAR",
    payload: side
  };
};

module.exports = {
  addBook,
  SaveBooks,
  showList,
  closeBar,
  updateList,
  updateModal,
  showDescription
};
