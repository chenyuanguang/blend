import React, { Component } from 'react';
import './app.css';
import Footer from '@components/Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { children } = this.props;
        return (
            <div className="app">
                {children}

                <Footer />
            </div>
        );
    }
}

export default App;
