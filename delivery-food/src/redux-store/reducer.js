

const reducer = (state = '', action) => {
  switch (action.type) {
    case 'LOG_IN': {
      return state = action.payload;
    }
  }
}

export default reducer;