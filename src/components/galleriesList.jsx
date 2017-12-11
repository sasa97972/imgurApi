import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import "../css/galleriesList.css";
import {asyncGetGalleries} from "../actions/galleries";
import {changeFilter} from "../actions/filter";
import {GalleryFilter} from './galleryFilter.jsx';
import Post from "./post.jsx";

class GalleriesList extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            userSelected: false,
            topSelected: false
        };
    }

    componentDidMount() {
        this.props.getGalleries(this.props.filter);
    }

    onFilterChange(event) {
        const select = event.target;
        const option = select.options[select.selectedIndex];
        this.props.changeFilter(select.name, option.value);
        if(select.name === "section") {
            option.value === "user" ? this.setState({userSelected: true}) : this.setState({userSelected: false});
            option.value === "top" ? this.setState({topSelected: true}) : this.setState({topSelected: false});
        }
    }

    componentWillReceiveProps(nextProps) {
        if(JSON.stringify(nextProps.filter) !== JSON.stringify(this.props.filter)) {
            this.props.getGalleries(nextProps.filter);
        }
    }

    render() {
        return(
            <div className="row">
                <GalleryFilter
                    filterOptions={this.props.filter}
                    onFilterChange={this.onFilterChange.bind(this)}
                    userSelected={this.state.userSelected}
                    topSelected={this.state.topSelected}
                />
                {this.props.list.length ?
                    this.props.list.map((post) => {
                        return(
                            <Post
                                key={post.id}
                                post={post}
                            />
                        );
                    })
                    :
                    <p>Please wait, while galleries are loading</p>}
            </div>
        );
    }
}

const mapStateToProps = state => ({ list: state.galleriesList, filter: state.galleriesFilter });

const mapDispatchToProps = dispatch => ({
    getGalleries: (params) => {
        dispatch(asyncGetGalleries(params));
    },
    changeFilter: (name, newValue) => {
        dispatch(changeFilter(name, newValue))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(GalleriesList));