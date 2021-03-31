import songsService from '../services/songsService';
const songsReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_SONGS':
            return action.data;
        default:
            return state;
    }
};
export const initSongs = () => {
    return async dispatch => {
       const songs = await songsService.getAllSongs(); 
       dispatch({
           type: 'INIT_SONGS',
           data: songs,
       });
    };
};
export default songsReducer;