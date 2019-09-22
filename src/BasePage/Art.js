import React from 'react';
import { IMAGES } from './ImageArtProvider';
import Gallery from 'react-grid-gallery';

function Art() {
  
  return(
    <div style={container}>
    <Gallery images={IMAGES}/>
    </div>
    )
}
export default Art;

const container = {
  width: '80%',
  height: '80%',
  position: 'relative',
  top: '5rem',
  left: '8rem'
}