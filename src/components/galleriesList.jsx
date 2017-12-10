import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import "../css/galleriesList.css";
import {asyncGetGalleries} from "../actions/galleries";
import Post from "./post.jsx"

class App extends Component
{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        this.props.getGalleries();
    }

    render() {
        return(
            <div className="row">
                {this.props.list.length ?
                    <ol>
                        {this.props.list.map((post) => {
                            return(
                                <Post
                                    key={post.id}
                                    post={post}
                                />
                            );
                        })}
                    </ol>
                    :
                    <p>Please wait, galleries are loading now</p>}
            </div>
        );
    }
}

const mapStateToProps = state => ({ list: state.galleriesList });

const mapDispatchToProps = dispatch => ({
    getGalleries: () => {
        dispatch(asyncGetGalleries());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(App));