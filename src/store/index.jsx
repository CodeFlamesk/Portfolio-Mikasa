import { createStore } from 'redux';

const defaultState = {
    showModal: false,
    isPlaying: false,  // Додано для зберігання стану відтворення музики
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return { ...state, showModal: true };
        case 'NO_MODAL':
            return { ...state, showModal: false };
        case 'PLAY_MUSIC':
            return { ...state, isPlaying: true };
        case 'PAUSE_MUSIC':
            return { ...state, isPlaying: false };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
