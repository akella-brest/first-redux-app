const initialState = [];

export default function playList(state = initialState, action) {
    if (action.type === 'ADD_TEXT') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'DELETE_TEXT') {
        return state;
    }
    return state;
}