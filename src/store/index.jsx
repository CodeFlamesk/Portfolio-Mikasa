import { createStore } from 'redux';

const defaultState = {
    currentTrack: null,
    trackTimes: {},
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_TRACK':
            return { ...state, currentTrack: action.payload };
        case 'SET_TRACK_TIME':
            return {
                ...state,
                trackTimes: {
                    ...state.trackTimes,
                    [action.payload.track]: action.payload.time,
                },
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
