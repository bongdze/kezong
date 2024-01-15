import React from "react";
import './Biographie.css';

const Biographie = (props) =>{
    return (
        <React.Fragment>
            <div className="about-me container">

                <div className="section-title">
                    <h2>About</h2>
                    <p>Learn more about us</p>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src="assets/img/me.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>Import, Export, Delivery</h3>
                        <p className="fst-italic">
                            Let's collaborate to bring your vision to life.
                        </p>
                        <div className="row">
                        <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>0086 158 1880 2184</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Guangzhou, China</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span><a href='mailto:Kezongtrading@gmail.com'>Kezongtrading@gmail.com</a></span></li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            
                        </div>
                        </div>
                        <p>
                            Guangzhou Kezong International Trade Co; Ltd is a leading Chinese registered Import/Export trade company
                            with extensive experience in the China market for over 19 years.
                            Our company is based in Guangzhou, China and we  have established branch offices and warehouses in strategic
                             locations such as Foshan, Chaozhou, Yiwu Zhenjiang Province, Liangshan County Henan Province. Additionally, we have
                             expanded our presence to Nigeria with offices in Lagos and Onitsha, as well as Douala and Bamenda in Cameroon. We have
                             also forged partnerships with reputable companies in Ghana, Kenya, South Africa, Tanzania and more.
                             At Guangzhou Kezong International Trade Co; Ltd, we offer a comprehensive range of services to cater to diversed business needs.
                             Our services encompass the supply of building materials, both internal and external decor, hardware, heavy-duty machinery, trucks,
                             medical equiptment and factory liaison. Futhermore, we excel in project management, including the overseas installation of equiptment
                             by our skilled Chinese engineers. We also provide production inspection and ensure smooth delivery follow-up, as well as professional warehousing,
                             shipping, and clearing services.
                             In addition, we understand the challenges faced by international businesses when operating in China. To ease your business journey, we offer assistance 
                             with China business trips, including aiport pickups and hotel reservations. We can help arrange factory visits and provide translators for effective communication
                             . Moreover, our team is proficient in contract negotiations and skilled in products procurement, ensuring a seamless sourcing process for a wide range of Chinese products.
                             We take pride in providing top-notch services and solutions tailored to meet your business requirements. Your satisfaction is our priority and we are committed to fostering
                             long term partnerships based on trust, reliability, and mutual success. So, feel free to consult with us or place your orders. We look forward to serving you.
                             At Guangzhou Kezong International Trade Co; Ltd, We Source, We Purchase, We Inspect, We Load, We Ship, We Clear, We Deliver, We Care.
                             All In One Service! Customer's Satisfaction, Our First Priority.
                        </p>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}

export default Biographie;