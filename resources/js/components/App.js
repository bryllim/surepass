import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './Header';

//Import images
import Landing from '../../../public/surepass/img/intro-img.svg';
import About from '../../../public/surepass/img/landing/about.jpg'

export default class App extends Component {
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
        <div>
            <Header />

            <section id="hero" class="clearfix">
            <div class="container d-flex h-100">
                <div class="row justify-content-center align-self-center" data-aos="fade-up">
                    <div class="col-md-6 intro-info order-md-first order-last" data-aos="zoom-in" data-aos-delay="100">
                    <h2><div>Your Travel Guide<br />Going<span>Home</span></div></h2>
                    <div>
                        <a href="#about" class="btn-get-started scrollto">Get Started</a>
                    </div>
                    </div>

                    <div class="col-md-6 intro-img order-md-last order-first" data-aos="zoom-out" data-aos-delay="200">
                        <img src={Landing} alt="" class="img-fluid"></img>
                    </div>
                </div>
            </div>

            </section>

            <main id="main">

            <section id="about" class="about">

                <div class="container" data-aos="fade-up">
                    <div class="row">

                        <div class="col-lg-5 col-md-6">
                        <div class="about-img" data-aos="fade-right" data-aos-delay="100">
                            <img src={About} alt=""></img>
                        </div>
                        </div>

                        <div class="col-lg-7 col-md-6">
                        <div class="about-content" data-aos="fade-left" data-aos-delay="100">
                            <h2>About SurePass</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis qui dolor nulla dolores neque. Aspernatur consectetur omnis numquam quaerat. Sed fugiat nisi. Officiis veniam molestiae. Et vel ut quidem alias veritatis repudiandae ut fugit. Est ut eligendi aspernatur nulla voluptates veniam iusto vel quisquam. Fugit ut maxime incidunt accusantium totam repellendus eum error. Et repudiandae eum iste qui et ut ab alias.</p>
                            <ul>
                            <li><i class="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li><i class="ion-android-checkmark-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li><i class="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            </main>
        </div>
    );
    }
};

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}