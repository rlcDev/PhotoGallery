import React from 'react';
import { IMAGES } from './ImageLandscapeProvider';
import Gallery from 'react-grid-gallery';

function Landscape() {
  
  return(
    <div style={container}>
    <Gallery images={IMAGES}/>
    </div>
    )
}
export default Landscape;

const container = {
  width: '80%',
  height: '80%',
  position: 'relative',
  top: '5rem',
  left: '8rem'
}