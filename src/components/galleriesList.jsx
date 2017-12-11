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
            page: 0,
            userSelected: false,
            topSelected: false,
            load: false
        };
    }

    componentDidMount() {
        this.props.getGalleries(this.props.filter);
        window.addEventListener("scroll", this.infinityScroll.bind(this), false);
    }

    infinityScroll() {
        if(document.documentElement.clientHeight + window.pageYOffset >= document.documentElement.scrollHeight) {
            let count = this.state.page + 1;
            this.props.changeFilter("page", count);
            this.setState({page: count, load: true})
        }
    }

    onFilterChange(event) {
        const select = event.target;
        const option = select.options[select.selectedIndex];
        this.props.changeFilter(select.name, option.value)();
        this.props.changeFilter("page", 0);
        this.setState({page: 0});
        if(select.name === "section") {
            option.value === "user" ? this.setState({userSelected: true}) : this.setState({userSelected: false});
            option.value === "top" ? this.setState({topSelected: true}) : this.setState({topSelected: false});
        }
    }

    componentWillReceiveProps(nextProps) {
        if(JSON.stringify(nextProps.filter) !== JSON.stringify(this.props.filter)) {
            this.props.getGalleries(nextProps.filter);
        }
        this.setState({load: false})
    }

    render() {
        console.log("render");
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
                {this.state.load && <h1 style={{textAlign: "center"}}>Please wait, galleries are loading</h1>}
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