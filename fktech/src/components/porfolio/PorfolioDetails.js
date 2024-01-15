
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules';
import  SwiperCore  from 'swiper';

import './PorfolioDetails.css';
import '../../assets/vendor/swiper/swiper-bundle.min.css';
import { NavLink } from 'react-router-dom';

SwiperCore.use([Pagination, Autoplay]);

const PorfolioDetails = (props) =>{
    
    return (
        <div id="portfolio-details" class="portfolio-details">
            <div class="container">

                <div class="row">

                <div class="col-lg-8">
                    <h2 class="portfolio-title">This is an example of portfolio detail</h2>
                    
                    <div class="portfolio-details-slider swiper">
                        <Swiper
                            speed={600}
                            loop={true}
                            autoplay={{delay: 5000, disableOnInteraction: false}}
                            slidesPerView={1}
                            spaceBetween={50}
                            pagination={{clickable: true}}  >
                           
                            <SwiperSlide className='swiper-slide'>
                                <img src="assets/img/portfolio/portfolio-details-2.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <img src="assets/img/portfolio/portfolio-details-1.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <img src="assets/img/portfolio/portfolio-details-3.jpg" alt="" />
                            </SwiperSlide>
                            <div class="swiper-pagination"></div>
                        </Swiper>
                    
                    </div>

                </div>

                <div class="col-lg-4 portfolio-info">
                    <h3>Project information</h3>
                    <ul>
                    <li><strong>Category</strong>: Web design</li>
                    <li><strong>Client</strong>: ASU Company</li>
                    <li><strong>Project date</strong>: 01 March, 2020</li>
                    <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                    </ul>

                    <p>
                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                    </p>
                    <div>
                        <NavLink to='/' className='btn btn-danger'><i className='bi bi-house-fill'></i> Back to Hone</NavLink>
                    </div>
                </div>

                </div>

            </div>
        </div>
    );
};

export default PorfolioDetails;