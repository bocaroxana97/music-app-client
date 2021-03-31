let genres = JSON.parse(localStorage.getItem('genres')) || [];
let genres_songs = JSON.parse(localStorage.getItem('genres_songs')) || [];
let songs = JSON.parse(localStorage.getItem('songs')) || [];

function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        const { method, headers } = opts;
        const body = opts.body && JSON.parse(opts.body);

        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(handleRoute, 500);

            function handleRoute() {
                switch (true) {
                    case url.endsWith('/genres') && method === 'GET':
                        return receiveGenres();
                    case url.endsWith('/genres/songs') && method === 'GET':
                        return receiveGenreSongs();
                    default:
                        // pass through any requests not handled above
                        return realFetch(url, opts)
                            .then(response => resolve(response))
                            .catch(error => reject(error));
                }
            }

            // route functions

            function receiveGenreSongs(genre_id) {
                const genreSongIds = genres_songs.filter(elem => elem.id_genre === genre_id);
                const genreSongList = [];
                genreSongIds.map(elem => { 
                    const song = songs.find(item => item.id === elem.id_song);
                    genreSongList.push(song);
                });
                localStorage.setItem('genreSongs', JSON.stringify(genreSongList));

                return ok();
            }

            function receiveGenres() {
                return ok(genres);
            }
    
            // helper functions

            function ok(body) {
                resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) });
            }

            function error(message) {
                resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) });
            }
    
            function idFromUrl() {
                const urlParts = url.split('/');
                return parseInt(urlParts[urlParts.length - 1]);
            }
        });
    }
}
export default configureFakeBackend;