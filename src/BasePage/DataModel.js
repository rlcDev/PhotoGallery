import Others from './Others';
import Landscape from './Landscape';
import Art from './Art';
import Home from './Home';

export const HEADER_TITLE = "@rlcdev";
export const COPYRIGHT = "©rlcdev";
export const WELCOME_MESSAGE = "Welcome";
export const CATEGORIES = [
    {
        name: "",
        path: "/",
        component: Home
    },
    {
        name: "Landscape", 
        path: process.env.PUBLIC_URL + "/landscape", 
        component: Landscape
    },
    {
        name: "Art",
        path: process.env.PUBLIC_URL + "/art",
        component: Art
    },
    {
        name: "Others",
        path: process.env.PUBLIC_URL + "/others", 
        component: Others
    }
];