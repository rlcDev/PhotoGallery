import React from 'react';
import Gallery from 'react-grid-gallery';
import { METADATA_ART_URL } from './DataModel';

class Art extends React.Component {

    state = {
        IMAGES: []
    }

    // Idem
    componentWillMount() {
        fetch(METADATA_ART_URL)
            .then(res => res.json())
            .then((rows) => this.setState({ IMAGES: rows.art }))
    }

    render() {
        return (
            <div>
                <Gallery images={this.state.IMAGES}/>
            </div>
        )
    }
}
export default Art;
