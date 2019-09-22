import Landscape from './Landscape';
import Art from './Art';
import Home from './Home';

export const HEADER_TITLE = "@rlcdev";
export const COPYRIGHT = "©rlcdev";
export const WELCOME_MESSAGE = "Welcome";
export const METADATA_LANDSCAPE_URL = "https://raw.githubusercontent.com/rlcDev/PhotoGalleryMetadata/master/photosLandscapeMetadata.json";
export const METADATA_ART_URL = "https://raw.githubusercontent.com/rlcDev/PhotoGalleryMetadata/master/photosArtMetadata.json";

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
    }
];