import axios from 'axios';

const getQuote = async (url: string) => {
    const result = await axios.get("https://api.kanye.rest")
    const { data: { quote } } = result
    console.log(quote)
}

getQuote("https://api.kanye.rest")

const fetchAlbums = async () => {
    const res = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
    console.log(res);
};

fetchAlbums();