import React, {Component} from "react"
import {Link} from "react-router-dom"

import "../css/post.css"

export default class Post extends Component
{
    constructor(props) {
        super(props);
    }

    render() {
        const {post} = this.props;
        return(
            <div className="col-md-3 col-xs-4 post">
                <Link to={`gallery/${post.id}`}>
                    <div className="post__image-container">
                        <img className="post__image" src={
                            post.cover ?
                                `http://i.imgur.com/${post.cover}b.jpg`
                                :
                                `http://i.imgur.com/${post.id}b.jpg`
                        }/>
                    </div>
                    {post.title}
                </Link>
            </div>
        );
    }
}