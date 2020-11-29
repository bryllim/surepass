import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Table from "react-table";  

//Import Commonn Components
import Header from './Header';
import Footer from './Footer';

//Import images
import Landing from '../../../public/surepass/img/intro-img.svg';
import About from '../../../public/surepass/img/landing/about.jpg'
import FirstFeature from '../../../public/surepass/img/features-1.svg';
import SecondFeature from '../../../public/surepass/img/features-2.svg';
import Bryl from '../../../public/surepass/img/landing/surepass/bryl.png';
import Ian from '../../../public/surepass/img/landing/surepass/ian.png';
import Justin from '../../../public/surepass/img/landing/surepass/justin.png';
import Miko from '../../../public/surepass/img/landing/surepass/miko.png';
export default class App extends Component {
    // constructor(){
    //     super();
    //     this.state = {
            
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

            {/* ======= About Section ======= */}
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

            {/* End About Section */}

            {/* ======= Services Section ======= */}
            <section id="services" class="services section-bg">
                <div class="container" data-aos="fade-up">

                    <header class="section-header">
                    <h3>Travel Guide</h3>
                    <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
                    </header>

                    <div class="row">

                    <div class="col-md-6 col-lg-4 wow bounceInUp" data-aos="zoom-in" data-aos-delay="100">
                        <div class="box">
                        <div class="icon"><i class="ion-ios-bookmarks-outline"></i></div>
                        {/* <div class="icon" style="background: #fceef3;"><i class="ion-ios-bookmarks-outline" style="color: #ff689b;"></i></div> */}
                        <h4 class="title"><a href="">1.Register</a></h4>
                        <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="200">
                        <div class="box">
                        <div class="icon"><i class="ion-ios-search"></i></div>
                        {/* <div class="icon" style="background: #fff0da;"><i class="ion-ios-search" style="color: #e98e06;"></i></div> */}
                        <h4 class="title"><a href="">2.Search Destination</a></h4>
                        <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="300">
                        <div class="box">
                        <div class="icon"><i class="ion-ios-paper-outline"></i></div>
                        {/* <div class="icon" style="background: #e6fdfc;"><i class="ion-ios-paper-outline" style="color: #3fcdc7;"></i></div> */}
                        <h4 class="title"><a href="">3.Requirements</a></h4>
                        <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 wow" data-aos="zoom-in" data-aos-delay="100">
                        <div class="box">
                        <div class="icon"><i class="ion-ios-chatboxes"></i></div>
                        {/* <div class="icon" style="background: #eafde7;"><i class="ion-ios-chatboxes" style="color:#41cf2e;"></i></div> */}
                        <h4 class="title"><a href="">4.Coordinate</a></h4>
                        <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="200">
                        <div class=" box">
                            <div class="icon"><i class="ion-ios-plus-outline"></i></div>
                            {/* <div class="icon" style="background: #e1eeff;"><i class="ion-ios-plus-outline" style="color: #2282ff;"></i></div> */}
                            <h4 class="title"><a href="">5.Reserve Room</a></h4>
                            <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                        </div>
                    </div>
               
                    <div class="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="300">
                        <div class="box">
                            <div class="icon"><i class="ion-ios-analytics"></i></div>
                            {/* <div class="icon" style="background: #ecebff;"><i class="ion-ios-analytics" style="color: #8660fe;"></i></div> */}
                            <h4 class="title"><a href="">6.Monitor</a></h4>
                            <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                        </div>
                    </div>

                </div>
                </div>
            </section>
            {/* End Service Section */}


            {/* ======= Why Us Section ======= */}
            <section id="why-us" class="why-us">
                <div class="container" data-aos="fade-up">

                    <header class="section-header">
                        <h3>Locations</h3>
                        <p>Search your Location to know the Requirements</p>
                    </header>
                    {/* <Table id="example" class="display">
                        <thead>
                            <tr>
                                <th>Province</th>
                                <th>City</th>
                                <th>Baranggay</th>
                                <th>Action</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Leyte</td>
                            <td>Baybayt</td>
                            <td>Plaridel</td>
                            <td><button type="button" class="btn btn-info" data-toggle="modal" data-target=".bd-example-modal-lg">View</button></td>
                        </tr>
                        <tr>
                        <td>Cebu</td>
                        <td>Mandaue</td>
                        <td>Upper Malibu</td>
                        <td><button type="button" class="btn btn-info" data-toggle="modal" data-target=".bd-example-modal-lg">View</button></td>
                    </tr>
                    
                    
                    </tbody>
                    </Table> */}
                
                    {/* <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h3 class="modal-title" id="exampleModalLabel">Brgy.Plaridel Baybay City Requirements</h3>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                </div>

                                <div class="modal-body">
                                <ul>
                                    <li><h5>Travel Pass</h5></li>
                                    <li><h5>Health Certificate</h5></li>
                                    <li><h5> Rapid Test Result</h5></li>
                                </ul>
                                </div>

                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                            </div>
                    </div>*/}
                </div>

                <div class="container-fluid" id="counter">
                    <div class="row counters" data-aos="fade-up" data-aos-delay="100">

                    <div class="col-lg-3 col-6 text-center">
                        <span data-toggle="counter-up">425,918</span>
                        <p>Total Cases</p>
                    </div>

                    <div class="col-lg-2 col-6 ml-1 text-center">
                        <span data-toggle="counter-up">1,000</span>
                        <p>New Case</p>
                    </div>

                    <div class="col-lg-2 col-6 ml-1 text-center">
                        <span data-toggle="counter-up">30,047</span>
                        <p>Active Cases</p>
                    </div>

                    <div class="col-lg-2 col-6 ml-1 text-center">
                        <span data-toggle="counter-up">387,616</span>
                        <p>Recovered</p>
                    </div>

                    <div class="col-lg-2 col-6 ml-1 text-center">
                        <span data-toggle="counter-up">8,255</span>
                        <p>Died</p>
                    </div>

                    </div>

                </div>
            </section>
            {/* End of Why Us */}

            {/* ======= Features Section ======= */}
            <section id="features" class="features">
                <div class="container" data-aos="fade-up">

                    <div class="row feature-item">
                    <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                        <img src={FirstFeature} class="img-fluid" alt=""></img>
                    </div>
                    <div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0" data-aos="fade-left" data-aos-delay="150">
                        <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4>
                        <p>
                        Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati possimus ea. Quas molestiae perspiciatis occaecati qui rerum. Deleniti quod porro sed quisquam saepe. Numquam mollitia recusandae non ad at et a.
                        </p>
                        <p>
                        Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti. Odit qui asperiores ea corporis deserunt veritatis quidem expedita perferendis. Qui rerum eligendi ex doloribus quia sit. Porro rerum eum eum.
                        </p>
                    </div>
                    </div>

                    <div class="row feature-item mt-5 pt-5">
                    <div class="col-lg-6 wow fadeInUp order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                        <img src={SecondFeature} class="img-fluid" alt=""></img>
                    </div>

                    <div class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-right" data-aos-delay="150">
                        <h4>Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit.</h4>
                        <p>
                        Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis beatae incidunt sunt.
                        </p>
                        <p>
                        Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae debitis. Dolorem cupiditate est perferendis iusto.
                        </p>
                        <p>
                        Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint quia modi. Numquam est aut fuga mollitia exercitationem nam accusantium provident quia.
                        </p>
                    </div>

                    </div>

                </div>
                </section>
                {/* End of Feature Section */}

                {/* ======= Team Section ======= */}
                <section id="team" class="team section-bg">
                    <div class="container" data-aos="fade-up">
                        <div class="section-header">
                        <h3>Team Bluewind</h3>
                        <p>We are fueled by passion and innovation. We put a lot of skill, effort, and heart onto all our solutions and services because we prioritize or clients' satisfaction.</p>
                        </div>

                        <div class="row">

                        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div class="member">
                            <img src={Bryl} class="img-fluid" alt=""></img>
                            <div class="member-info">
                                <div class="member-info-content">
                                <h4>Bryl Lim</h4>
                                <div><span>Back End Developer</span></div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div class="member">
                            <img src={Ian} class="img-fluid" alt=""></img>
                            <div class="member-info">
                                <div class="member-info-content">
                                <h4>Lindley Olmoguez</h4>
                                <div><span>Back End Developer</span></div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div class="member">
                            <img src={Miko} class="img-fluid" alt=""></img>
                            <div class="member-info">
                                <div class="member-info-content">
                                <h4>Michael Aninon</h4>
                                <div><span>Front End Developer</span></div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div class="member">
                            <img src={Justin} class="img-fluid" alt=""></img>
                            <div class="member-info">
                                <div class="member-info-content">
                                    <h4>Justin Manigo</h4>
                                    <div><span>Front End Developer</span></div>
                                </div>
                            </div>
                            </div>
                        </div>

                        </div>

                    </div>
                </section>
                {/* End Team Section */}

                {/* ======= FAQ Section ======= */}
                <section id="faq" class="faq">
                    <div class="container" data-aos="fade-up">
                        <header class="section-header">
                        <h3>Frequently Asked Questions</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                        </header>
                        
                    
                        <ul id="faq-list" data-aos="fade-up" data-aos-delay="100">
                        <li>
                            <a data-toggle="collapse" class="collapsed" href="#faq1">Non consectetur a erat nam at lectus urna duis? <i class="ion-android-remove"></i></a>
                            <div id="faq1" class="collapse" data-parent="#faq-list">
                            <p>
                                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                            </p>
                            </div>
                        </li>

                        <li>
                            <a data-toggle="collapse" href="#faq2" class="collapsed">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i class="ion-android-remove"></i></a>
                            <div id="faq2" class="collapse" data-parent="#faq-list">
                            <p>
                                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                            </p>
                            </div>
                        </li>

                        <li>
                            <a data-toggle="collapse" href="#faq3" class="collapsed">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i class="ion-android-remove"></i></a>
                            <div id="faq3" class="collapse" data-parent="#faq-list">
                            <p>
                                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                            </p>
                            </div>
                        </li>

                        <li>
                            <a data-toggle="collapse" href="#faq4" class="collapsed">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i class="ion-android-remove"></i></a>
                            <div id="faq4" class="collapse" data-parent="#faq-list">
                            <p>
                                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                            </p>
                            </div>
                        </li>

                        <li>
                            <a data-toggle="collapse" href="#faq5" class="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i class="ion-android-remove"></i></a>
                            <div id="faq5" class="collapse" data-parent="#faq-list">
                            <p>
                                Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                            </p>
                            </div>
                        </li>

                        <li>
                            <a data-toggle="collapse" href="#faq6" class="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i class="ion-android-remove"></i></a>
                            <div id="faq6" class="collapse" data-parent="#faq-list">
                            <p>
                                Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                            </p>
                            </div>
                        </li>

                        </ul> 

                    </div>
                    </section>
                {/* End FAQ Section */}
            </main>

            <Footer />
        </div>
    );
    }
};

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}