import './Contact.css';
import '../../model/ContactModel';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { ContactModel } from '../../model/ContactModel';
import {  useDispatch, useSelector,  } from "react-redux";
import Loader from '../loader/Loader';
import {updateShowLoader} from '../../store/reducers/loaderSlice';

const Contact = (props) =>{
    const validationSchema = Yup.object().shape({
        email : Yup.string().email(' Invalid email address').required('email is required'),
        name : Yup.string().required('name is required'),
        subject : Yup.string().required('subject is required'),
        message : Yup.string().required('message is required'),
    });
    const dispatch = useDispatch();
    const showLoading = useSelector(state => state.loader.showLoader);

    const [contactForm, setContactForm] = useState(new ContactModel());

    function handleSignUpFormSubmit(values,actions){
        dispatch(updateShowLoader(true));
            console.log(values);
            actions.resetForm();
        dispatch(updateShowLoader(false));
    }

    return (
        <section id="contact" className="contact">
            { showLoading && <Loader /> }
            <div className="container">

            <div className="section-title">
                <h2>Contact</h2>
                <p>Contact Us</p>
            </div>

            <div className="row mt-2">

                <div className="col-md-6 d-flex align-items-stretch">
                <div className="info-box">
                    <i className="bx bx-map"></i>
                    <h3>Our Address</h3>
                    <p>Zhongshan Ave. West Tianhe, Guangzhou, China</p>
                </div>
                </div>

                <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                <div className="info-box">
                    <i className="bx bx-share-alt"></i>
                    <h3>Social Profiles</h3>
                    <div className="social-links">
                    <a href="https://x.com/OliverKez?s=20" className="twitter"><i className="bi bi-twitter"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100095393598680" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/kezong_international_trade?utm_source=ig_web_button_share_sheet&igsh=ZDNIZDc0MzlxNw==" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="https://cn.linkedin.com/in/Ivyin-wu-94704261" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                </div>

                <div className="col-md-6 mt-4 d-flex align-items-stretch">
                <div className="info-box">
                    <i className="bx bx-envelope"></i>
                    <h3>Email Us</h3>
                    <a href='mailto:Kezongtrading@gmail.com'>Send mail</a>
                </div>
                </div>
                <div className="col-md-6 mt-4 d-flex align-items-stretch">
                <div className="info-box">
                    <i className="bx bx-phone-call"></i>
                    <h3>Call Us</h3>
                    <p>0086 158 1880 2184</p>
                </div>
                </div>
            </div>
            <Formik enableReinitialize initialValues={contactForm} 
            onSubmit={handleSignUpFormSubmit} 
            validationSchema={validationSchema} >
                {({touched, errors}) => (
                    <Form className="php-email-form mt-4">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <Field type="text" name="name" id="name" placeholder="Your Name" className={`form-control 
                                ${touched.name && errors.name && 'is-invalid'} ${touched.name && !errors.name && 'is-valid'}`  }/>
                                <ErrorMessage name="name" component="div" className="invalid-feedback"/>
                            </div> 
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <Field type="email" name="email" id="email" placeholder="Your Email" className={`form-control 
                                ${touched.email && errors.email && 'is-invalid'} ${touched.email && !errors.email && 'is-valid'}`  }/>
                                <ErrorMessage name="email" component="div" className="invalid-feedback"/>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <Field type="text" name="subject" id="subject" placeholder="Subject" className={`form-control 
                            ${touched.subject && errors.subject && 'is-invalid'} ${touched.subject && !errors.subject && 'is-valid'}`  }/>
                            <ErrorMessage name="subject" component="div" className="invalid-feedback"/> 
                        </div>
                        <div className="form-group mt-3">
                            <Field as='textarea' name="message" rows="5" id="message" placeholder="Message" className={`form-control 
                            ${touched.message && errors.message && 'is-invalid'} ${touched.message && !errors.message && 'is-valid'}`  }/>
                            <ErrorMessage name="message" component="div" className="invalid-feedback"/>
                        </div>
                        <div className="text-center mt-3"><button type="submit">Send Message</button></div>
                    </Form>
                )}
            </Formik>

            </div>
        </section>
    );
}
export default Contact;