

const initState = "Привет мир"

export const reducer = (state = initState, action) => {
    switch(action.type) {
        case 'ENG':
            return "Hello world";
            case 'RUS':
                return "Привет мир";
                default:
                    return state;
    }
}

export default reducer;