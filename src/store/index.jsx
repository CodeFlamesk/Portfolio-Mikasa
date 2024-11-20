import { createStore } from 'redux';

const defaultState = {
    isLoggedIn: false,
    email: 'Please log in',
    changeImg: null,
    changeName: null,
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return { ...state, isLoggedIn: true };
        case 'CHANGE_IMG':
            return { ...state, changeImg: action.payload };
        case 'CHANGE_NAME':
            return { ...state, changeName: action.payload };
        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn: false,
                email: 'Please log in',
                changeImg: null
            };
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
