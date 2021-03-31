import genresService from '../services/genresService';
const musicReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_MUSIC':
            return action.data;
        default:
            return state;
    }
};
export const initMusic = () => {
    return async dispatch => {
       const music = await genresService.getAllGenres(); 
       dispatch({
           type: 'INIT_MUSIC',
           data: music,
       });
    };
};
export default musicReducer;