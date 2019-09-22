import React from 'react';
import { IMAGES } from './ImageArtProvider';
import Gallery from 'react-grid-gallery';

function Art() {
  
  return(
    <div>
    <Gallery images={IMAGES}/>
    </div>
    )
}
export default Art;
