import React, { Component } from 'react';
import Banner from '../Banner/Banner';

class Home extends Component {
    state={
        flag: true,
        name: 'rahul'
    }

    updateName = ()=>{
        //this.state.name="alpit"

        // this.setState({
        //     flag: !this.state.flag,
        //     name: 'alpit'
        // })

        this.setState({
                name: this.state.flag ? 'alpit':'rahul'
        })
    }

    render() { 
        const {flag, name} = this.state;
        console.log(">>>>render ", this.state)
        return ( 
            <div style={{background:"green"}}>
                <p>My name is {name} </p>
                <button onClick={this.updateName}>Change Name</button>
                
                { true && <Banner username={name} address="Pune" />}
           </div>
        );
    }
}
 
export default Home;