import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Login extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         items:[]
    //     }
    // }

    // componentDidMount(){
    //     axios.get('api/household').then(
    //         response=>{
    //             const items = response.data;
    //             this.setState({ items });
    //         }
    //     );
    // }
    
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" name="email" className="form-control form-control-user" placeholder="Enter Email Address..."></input>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" className="form-control form-control-user" placeholder="Password"></input>
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                <input type="checkbox" name="password" className="custom-control-input"></input>
                                                <label className="custom-control-label" for="customCheck">Remember
                                                        Me</label>
                                                </div>
                                            </div>
                                            <a className="btn btn-primary btn-user btn-block">Login</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
};

if (document.getElementById('root')) {
    ReactDOM.render(<Login />, document.getElementById('root'));
}