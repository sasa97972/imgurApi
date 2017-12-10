import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {asyncGetGalleries} from "../actions/galleries";

class GalleryView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {gallery} = this.props;
        return(
            <h1>{gallery.title}</h1>
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