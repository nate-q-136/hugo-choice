export const initialState = {
    page1: {
        email: '',
        name: ''
    },
    page2: ''
};

const formReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PAGE1':
            return {
                ...state,
                page1: {
                    ...state.page1,
                    ...action.payload
                }
            };
        case 'SET_PAGE2':
            return {
                ...state,
                page2: action.payload
            };
        default:
            return state;
    }
};

export default formReducer;
