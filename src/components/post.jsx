import React, {Component} from "react"
import {Link} from "react-router-dom"

export default class Post extends Component
{
    constructor(props) {
        super(props);
    }

    render() {
        const {post} = this.props;
        return(
            <Link to={`gallery/${post.id}`}>
                <li>{post.title}</li>
            </Link>
        );
    }
}