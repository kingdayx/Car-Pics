import axios from 'axios';


export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID 4Iq1_moRg-pWVurn3zpRVwDJUfx1hW681L3DILk5g9g'
    }
});