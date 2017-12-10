import React, {Component} from 'react';
import { connect } from 'react-redux';

import "./css/app.css"
import "./css/framework.css"

import Container from "./mainLayout.jsx";



class App extends Component
{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <Container>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Test</h1>
                    </div>
                </div>
            </Container>
        );
    }
}

const mapStateToProps = state => ({ list: state });

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);