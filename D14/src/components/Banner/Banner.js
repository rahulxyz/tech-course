import React, { Component } from 'react';
import person from 'assets/person.jpg';
import './Banner.scss';

class Banner extends Component {
    state = {  }
    render() { 
        const {start, end} = this.props;
        return ( 
            <section className="banner">
                <div className="container">
                    <div className="content">
                        
                        <div className="start">
                           {start}
                        </div>
                        <div className="end">
                            {end}
                        </div>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default Banner;