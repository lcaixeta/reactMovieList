// import React, { Component } from 'react';
// import { Spinner } from 'reactstrap';
// import { connect } from "react-redux";
// import './fullPageLoader.css';

// export class FullPageLoader extends Component {
//     state = {};
 
//     render() { 
//         const { loading } = this.props;
    
//         if (!loading) return null;
       
//         return (
//             <div className="loader-container">
//                 <div className="loader">
//                     <Spinner color="danger" /> 
//                 </div>
//             </div>
//         )
//     }
// }

// const mapStateToProps = state =>({ loading: state.application.loading });

// export default connect(mapStateToProps)(FullPageLoader);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Spinner } from 'reactstrap';
import './fullPageLoader.css';

class FullPageLoader extends Component {
    state = {  }


    render() { 
        const {loading} = this.props;

        if(!loading) return null;

        return ( 
            <div className="loader-container">
                <div className="loader">
                    <Spinner color="secondary" />
                </div>
            </div>
         );
    }
}


const mapStateToProps = state => ({ loading: state.loading })

export default connect(mapStateToProps)(FullPageLoader);