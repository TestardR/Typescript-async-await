import axios from 'axios';

interface ServerData {
    quote: string
}

const getQuote = async (url: string): Promise<ServerData> => {
    const result = await axios.get("https://api.kanye.rest")
    const { data: { quote } } = result
    return quote
}

getQuote("https://api.kanye.rest")

const fetchAlbums = async () => {
    const res = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
    console.log(res);
};

fetchAlbums();