import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter, Link} from 'react-router-dom';

import {asyncComments} from '../actions/comments'

class GalleryView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getComments(this.props.gallery.id);
    }

    componentWillUnmount() {
        this.props.getComments(this.props.gallery.id, true);
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

const mapStateToProps =  (state, {match}) =>  ({
    gallery: state.galleriesList.find(i => i.id === match.params.galleryId),
    comments: state.comments
});

const mapDispatchToProps = dispatch => ({
    getComments: (id, clear) => {
        dispatch(asyncComments(id, clear));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(GalleryView));