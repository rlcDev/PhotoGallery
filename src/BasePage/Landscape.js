import React from 'react';
import Gallery from 'react-grid-gallery';
import { METADATA_LANDSCAPE_URL } from './DataModel';

class Landscape extends React.Component {

    state = {
        IMAGES: []
    }

    // Need to fetch data from photoGalleryMetadata to display it
    // The use of react component lifecycle is needed, need to find another way
    componentWillMount() {
        fetch(METADATA_LANDSCAPE_URL)
            .then(res => res.json())
            .then((rows) => this.setState({ IMAGES: rows.landscape }))
    }

    render() {
        return (
            <div>
                <Gallery images={this.state.IMAGES}/>
            </div>
        )
    }
}
export default Landscape;
