import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter, Link} from 'react-router-dom';

class GalleryView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {gallery} = this.props;
        return(
            <div>
                <Link to="/">Home</Link>
                <h1>{gallery.title}</h1>
            </div>

        );
    }
}

const mapStateToProps =  (state, {match}) =>  ({ gallery: state.galleriesList.find(i => i.id === match.params.galleryId) });

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(GalleryView));