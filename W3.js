import React from "react";
import './App.css';
import Course from "./Course";

class W3 extends React.Component {
    state={toggleChild: false,html : false, css : false, jst : false, python : false, sql : false, php : false, jquery : false, java : false, cpp : false, wcss : false, bootstrap : false, total : 0}
    toggleMethod = (type) => {
        this.setState({toggleChild: true})
        switch (type) {
            case "html":
                if(this.state.html == false){
                this.setState({html: true});
                this.setState({total : 1000});
                }
                break;
            case "css":
                if(this.state.css == false){
                    this.setState({css: true});
                    this.setState({total : this.state.total + 1100});
                }
                break;
            case "jst":
                if(this.state.jst == false){
                    this.setState({jst: true});
                    this.setState({total : this.state.total + 1200});
                }
                break;
            case "python":
                if(this.state.python == false){
                    this.setState({python: true});
                    this.setState({total : this.state.total + 1300});
                }
                break;
            case "sql":
                if(this.state.sql == false){
                    this.setState({sql: true});
                    this.setState({total : this.state.total + 1400});
                }
                break;
            case "php":
                if(this.state.php == false){
                    this.setState({php: true});
                    this.setState({total : this.state.total + 1500});
                }
                break;
            case "jquery":
                if(this.state.jquery == false){
                    this.setState({jquery: true});
                    this.setState({total : this.state.total + 1600});
                }
                break;
            case "java":
                if(this.state.java == false){
                    this.setState({java: true});
                    this.setState({total : this.state.total + 1700});
                }
                break;
            case "cpp":
                if(this.state.cpp == false){
                    this.setState({cpp: true});
                    this.setState({total : this.state.total + 1800});
                }
                break;
            case "wcss":
                if(this.state.wcss == false){
                    this.setState({wcss: true});
                    this.setState({total : this.state.total + 1900});
                }
                break;
            case "bootstrap":
                if(this.state.html == false){
                    this.setState({bootstrap: true});
                    this.setState({total : this.state.total + 2000});
                }
                break;
        }
    }
    
    
    clear = (type) =>{
        switch (type) {
            case "toggleChild" :
                this.setState({toggleChild : false});
                this.setState({html : false});
                this.setState({css : false});
                this.setState({jst : false});
                this.setState({python : false});
                this.setState({sql : false});
                this.setState({php : false});
                this.setState({jquery : false});
                this.setState({java : false});
                this.setState({cpp : false});
                this.setState({wcss : false});
                this.setState({bootstrap : false});
                this.setState({total : 0});
                break;
            case "html":
                this.setState({html : false});
                this.setState({total : this.state.total - 1000});
                break;
            case "css":
                this.setState({css : false});
                this.setState({total : this.state.total - 1100});
                break;
            case "jst":
                this.setState({jst : false});
                this.setState({total : this.state.total - 1200});
                break;
            case "python":
                this.setState({python : false});
                this.setState({total : this.state.total - 1300});
                break;
            case "sql":
                this.setState({sql : false});
                this.setState({total : this.state.total - 1400});
                break;
            case "php":
                this.setState({php : false});
                this.setState({total : this.state.total - 1500});
                break;
            case "jquery":
                this.setState({jquery : false});
                this.setState({total : this.state.total - 1600});
                break;
            case "java":
                this.setState({java : false});
                this.setState({total : this.state.total - 1700});
                break;
            case "cpp":
                this.setState({cpp : false});
                this.setState({total : this.state.total - 1800});
                break;
            case "wcss":
                this.setState({wcss : false});
                this.setState({total : this.state.total - 1900});
                break;
            case "bootstrap":
                this.setState({bootstrap : false});
                this.setState({total : this.state.total - 2000});
                break;
        }
    }
    
  render() {
    return (
        <>

            <div style = {{height: '50px',display: 'flex', width : '100%'}}>
                <div className="header" style={{width:'65%',display: 'flex',float: 'left'}}>
                    <div className="header" style={{color: '#04AA6D',width: '77px'}}>W3</div>
                    <div className="header hv2" style={{width: '116px'}}>Tutorials</div>
                    <div className="header hv3" style={{width: '118px'}}>Exercises</div>
                    <div className="header hv4" style={{width: '132px'}}>References</div>
                    <div className="header hv5" style={{width: '105px',display: 'inline-flex'}}>Videos
                        <div className="top-bar-new">New</div>
                    </div>
                    <div className="header hv6" style={{width: '93px'}}>Menu</div>
                </div>
                <div className="header" style={{width: '35%',display: 'flex',float: 'right'}}>
                    <div className="header website hv7">Website
                        <div className="top-bar-new">New</div>
                    </div>
                    <div className="header hv8" style={{borderRadius: '25px',width: '132px'}}>Paid course</div>
                    <div className="header" style={{backgroundColor: '#04AA6D',width: '130px',marginLeft: '5px',borderRadius: '25px'}}>Login</div>
                </div>
            </div>
            <div style = {{display : 'flex', width : '100%'}}>
                <div className="container-parent">
                    <div className="container1">
                        <div className="container-width">
                            <div className="cont-title color-white">HTML</div>
                            <div className="container-cnt color-white">The language for building web pages</div>
                            <div className="padding c1 green" onClick={this.toggleMethod.bind(this,'html')}>Add Course</div>
                        </div>
                        <div className="container-width container1" style={{height: 'auto'}}>
                            <div className="grey-box">HTML Example
                                <div className="white-box">
                                    <div className="margin-green"></div>
                                </div>
                                <div className="try-it-yoursef green">Try it Yourself</div>
                            </div>
                        </div>
                    </div>
                    <div className="container2">
                        <div className="container-width">
                            <div className="cont-title color-black">CSS</div>
                            <div className="container-cnt color-black">The language for styling web pages</div>
                            <div className="padding c1 green" onClick={this.toggleMethod.bind(this,'css')}>Add Course</div>
                        </div>    
                        <div className="container-width container2" style={{height: 'auto'}}>
                            <div className="grey-box">CSS Example
                                <div className="white-box">
                                    <div className="margin-green"></div>
                                </div>
                                <div className="try-it-yoursef green">Try it Yourself</div>
                            </div>
                        </div>
                    </div>
                    <div className="container3">
                        <div className="container-width" style={{height: 'auto'}}>
                            <div className="cont-title color-black">JavaScript</div>
                            <div className="container-cnt color-black">The language for programming web pages</div>
                            <div className="padding c1 green" onClick={this.toggleMethod.bind(this,'jst')}>Add Course</div>
                        </div>    
                        <div className="container-width container3" style={{height: 'auto'}}>
                            <div className="grey-box">JavaScript Example
                                <div className="white-box">
                                    <div className="margin-green"></div>
                                </div>
                                <div className="try-it-yoursef green">Try it Yourself</div>
                            </div>
                        </div>
                    </div>
                    <div className="container4">
                        <div className="container-width" style={{height: 'auto'}}>
                            <div className="cont-title color-white">PYTHON</div>
                            <div className="container-cnt color-white">A popular programming language</div>
                            <div className="padding c1 green" onClick={this.toggleMethod.bind(this,'python')}>Add Course</div>
                        </div>    
                        <div className="container-width container4" style={{height: 'auto'}}>
                            <div className="grey-box">Python Example
                                <div className="white-box">
                                    <div className="margin-green"></div>
                                </div>                        
                                <div className="try-it-yoursef green">Try it Yourself</div>
                            </div>
                        </div>
                    </div>
                    <div className="container5">
                        <div className="container-width" style={{height: 'auto'}}>
                            <div className="cont-title color-black">SQL</div>
                            <div className="container-cnt color-black">A language for accessing databases</div>
                            <div className="padding c1 green" onClick={this.toggleMethod.bind(this,'sql')}>Add Course</div>
                        </div>    
                        <div className="container-width container5" style={{height: 'auto'}}>
                            <div className="grey-box">SQL Example
                                <div className="white-box">
                                    <div className="margin-green"></div>
                                </div>
                                <div className="try-it-yoursef green">Try it Yourself</div>
                            </div>
                        </div>
                    </div>
                    <div className="frame">
                        <div className="frame-work" style={{display: 'flex'}}>
                            <div className="container-width" style={{verticalAlign: 'middle'}}>
                                <div style={{backgroundColor: '#FFC0C7'}} className='f1'>
                                        <div style={{fontSize: '45px',marginBottom: '30px'}}>PHP</div>
                                        <div style={{marginBottom: '30px'}}>A Programming Language</div>
                                        <div className="f3 black" onClick={this.toggleMethod.bind(this,'php')}>Add Course</div>
                                </div>
                            </div>
                            <div className="container-width" style={{verticalAlign: 'middle'}}>
                                <div style={{backgroundColor: '#FFF4A3'}} className="f1">
                                    <div style={{fontSize: '45px',marginBottom: '30px'}}>jQuery</div>
                                    <div style={{marginBottom: '30px'}}>A JS library for developing web pages</div>
                                    <div className="f3 black" onClick={this.toggleMethod.bind(this,'jquery')}>Add Course</div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-work" style={{display: 'flex'}}>
                            <div className="container-width">
                                <div style={{backgroundColor: '#F3ECEA'}} className="f1">
                                    <div style={{fontSize: '45px',marginBottom: '30px'}}>JAVA</div>
                                    <div style={{marginBottom: '30px'}}>A Programming Language</div>
                                    <div className="f5 black" onClick={this.toggleMethod.bind(this,'java')}>Add Course</div>
                                </div>
                            </div>
                            <div className="container-width">
                                <div style={{backgroundColor: '#D9EEE1'}} className="f1">
                                    <div style={{fontSize: '45px',marginBottom: '30px'}}>C++</div>
                                    <div style={{marginBottom: '30px'}}>A Programming Language</div>
                                    <div className="f5 black" onClick={this.toggleMethod.bind(this,'cpp')}>Add Course</div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-work" style={{display: 'flex'}}>
                            <div className="container-width">
                                <div style={{backgroundColor: '#96D4D4'}} className="f1">
                                    <div style={{fontSize: '45px',marginBottom: '30px'}}>W3.CSS</div>
                                    <div style={{marginBottom: '30px'}}>A CSS framework for faster and better responsive web pages</div>
                                    <div className="f5 black" onClick={this.toggleMethod.bind(this,'wcss')}>Add Course</div>
                                </div>
                            </div>
                            <div className="container-width">
                                <div style={{backgroundColor: '#E7E9EB'}}className="f1">
                                    <div style={{fontSize: '45px',marginBottom: '30px'}}>Bootstrap</div>
                                    <div style={{marginBottom: '30px'}}>A CSS framework for designing better web pages</div>
                                    <div className="f5 black" onClick={this.toggleMethod.bind(this,'bootstrap')}>Add Course</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    {this.state.toggleChild  && <Course state={this.state} clear={this.clear} total={this.state.total}/>}
                
            </div>
        </>
    );
    }
}

export default W3;