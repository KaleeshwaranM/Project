import react from 'react';

class Course extends react.Component {
    

    render() {
        return (
            <>
                <div style = {{width: '20%'}}>
                    {this.props.state.toggleChild&& <div style = {{marginBottom : '20px', textAlign :'end'}}> <button onClick={this.props.clear.bind(this,'toggleChild')}>Clear All</button></div>}
                    {this.props.state.html       && <div> <div style={{display : 'flex',justifyContent : 'space-between'}}>  <div style={{width : '62px'}}>  HTML          </div>    <div>    Price : 1000</div>  <div> <button onClick={this.props.clear.bind(this,'html')}>      X   </button>  </div> </div> </div> }
                    {this.props.state.css        && <div> <div style={{display : 'flex',justifyContent : 'space-between'}}>  <div style={{width : '62px'}}>  CSS           </div>    <div>    Price : 1100</div>  <div> <button onClick={this.props.clear.bind(this,'css')}>       X   </button>  </div>  </div> </div> }
                    {this.props.state.jst        && <div> <div style={{display : 'flex',justifyContent : 'space-between'}}>  <div style={{width : '62px'}}>  JavaScript    </div>    <div>    Price : 1200</div>  <div> <button onClick={this.props.clear.bind(this,'jst')}>       X   </button>  </div>  </div> </div> }
                    {this.props.state.python     && <div> <div style={{display : 'flex',justifyContent : 'space-between'}}>  <div style={{width : '62px'}}>  Python        </div>    <div>    Price : 1300</div>  <div> <button onClick={this.props.clear.bind(this,'python')}>    X   </button>  </div>  </div> </div> }
                    {this.props.state.sql        && <div> <div style={{display : 'flex',justifyContent : 'space-between'}}>  <div style={{width : '62px'}}>  SQL           </div>    <div>    Price : 1400</div>  <div> <button onClick={this.props.clear.bind(this,'sql')}>       X   </button>  </div>  </div> </div> }
                    {this.props.state.php        && <div> <div style={{display : 'flex',justifyContent : 'space-between'}}>  <div style={{width : '62px'}}>  PHP           </div>    <div>    Price : 1500</div>  <div> <button onClick={this.props.clear.bind(this,'php')}>       X   </button>  </div>  </div> </div> }
                    {this.props.state.jquery     && <div> <div style={{display : 'flex',justifyContent : 'space-between'}}>  <div style={{width : '62px'}}>  JQuery        </div>    <div>    Price : 1600</div>  <div> <button onClick={this.props.clear.bind(this,'jquery')}>    X   </button>  </div>  </div> </div> }
                    {this.props.state.java       && <div> <div style={{display : 'flex',justifyContent : 'space-between'}}>  <div style={{width : '62px'}}>  Java          </div>    <div>    Price : 1700</div>  <div> <button onClick={this.props.clear.bind(this,'java')}>      X   </button>  </div>  </div> </div> }
                    {this.props.state.cpp        && <div> <div style={{display : 'flex',justifyContent : 'space-between'}}>  <div style={{width : '62px'}}>  C++           </div>    <div>    Price : 1800</div>  <div> <button onClick={this.props.clear.bind(this,'cpp')}>       X   </button>  </div>  </div> </div> }
                    {this.props.state.wcss       && <div> <div style={{display : 'flex',justifyContent : 'space-between'}}>  <div style={{width : '62px'}}>  CSS           </div>    <div>    Price : 1900</div>  <div> <button onClick={this.props.clear.bind(this,'wcss')}>      X   </button>  </div>  </div> </div> }
                    {this.props.state.bootstrap  && <div> <div style={{display : 'flex',justifyContent : 'space-between'}}>  <div style={{width : '62px'}}>  BoootStrap    </div>    <div>    Price : 2000</div>  <div> <button onClick={this.props.clear.bind(this,'bootstrap')}> X   </button>  </div>  </div> </div> }
                    <div style = {{textAlign : 'end', marginTop : '20px'}}>Total = {this.props.state.total}</div>
                </div>
            </>
        );
    }
}

export default Course;