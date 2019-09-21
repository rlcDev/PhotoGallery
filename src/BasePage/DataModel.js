import Poirsouille from './Others';
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
        path: "/landscape", 
        component: Landscape
    },
    {
        name: "Art",
        path: "/art",
        component: Art
    },
    {
        name: "Others",
        path: "/others", 
        component: Poirsouille
    }
];