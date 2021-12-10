import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
//import { createBrowserHistory, History } from 'history';
//import { createBrowserHistory, History } from '@types/history';
import Project from './Project';

class Home extends React.Component {
    state = {home : false, list : true, back : false}
    cancel = () => {
        this.setState({home : true})
        this.setState({list : false})
        this.setState({back : true})
    }
    back = () => {
        this.setState({home : false})
        this.setState({list : true})
        this.setState({back : false})
    }

    render() {
        return (
            <>
                {this.state.back && <div> <buttton onClick={this.back} style={{ backgroundColor: "black", color: "white", width: "8%", marginRight: "1%" }} >Back</buttton> </div> }

                {this.state.list && <button onClick={this.cancel} style={{fontWeight : 'bolder',margin :'20% 45%'}}>List</button> }

                {this.state.home && <Project/>}
            </>
        );
    }
}

export default Home;