import React from 'react';
import { IMAGES } from './ImageLandscapeProvider';
import Gallery from 'react-grid-gallery';

function Landscape() {
  
  return(
    <div>
    <Gallery images={IMAGES}/>
    </div>
    )
}
export default Landscape;
