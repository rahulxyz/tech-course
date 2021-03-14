import React, { Component } from 'react';

class Banner extends Component {
    state={
        child: "this is child"
    }

    
    componentDidMount(){
        // single time called on initialization of component
        console.log(">>>> Banner mount");
    }

    componentDidUpdate(){
        //called everytime when props is updated
        console.log(">>>> Banner update");
    }

    componentWillUnmount(){
        //called just before component is destroyed
        console.log(">>>> Banner unmount");
    }

    render() { 
        // console.log(">>>>props ", this.props)
        // console.log(">>>>state ", this.state)


        return ( 
            <div style={{background:"yellow"}}>
                <p>Banner</p>
                {this.props.username}
            </div>

         );
    }
}
 
export default Banner;