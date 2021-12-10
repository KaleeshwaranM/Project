import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import W3 from './W3';
import Zomato from './Zomato';

class Project extends React.Component {

    state = {school : true}
    
    school = () => {
        this.setState({school : false})
    }
    w3 = () => {
        this.setState({w3 : true})
        this.setState({zom : false})
    }
    zom = () => {
        this.setState({zom : true})
        this.setState({w3 : false})
    }

    render(){
        return (
            <>

                <BrowserRouter>
                   
                    <div>
                        <Link to="/Zomato" onClick={this.school}>Zomato</Link>
                        
                        <Route path="/Zomato" exact component={Zomato} />
                    </div>

                    <div>

                        <Link to="/W3">W3School</Link>

                        <Route path="/W3" exact component={W3} />
                    
                    </div>
                
                </BrowserRouter>
            </>
        );
    }
}

export default Project;
