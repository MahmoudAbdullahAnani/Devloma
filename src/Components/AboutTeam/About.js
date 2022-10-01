import React from "react";
import './About.css'
const About = (props) => {
    return (
        <div className="row m-0 about-sc flex-wrap-reverse justify-around w-100 pt-lg-4 pb-4  px-3">
            <div className="aboutImage  col-xs-11 col-lg-6">
                <img src={props.src} className='rounded-md m-auto' alt={props.alt} />
            </div>
            <div className="aboutContent  lh-base my-3 text-black col-xs-11 col-lg-4">
                <h2 className="">{props.title}</h2>
                {/* animation place */}
                <div className="animation me-2 rounded">
                    <span className="animation-loder1"></span>
                    <span className="animation-loder2"></span>
                </div>
                <p className="mt-4 fs-5 font-bold">{props.aboutTextTop}</p>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne1">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                                <div className="text-end w-100">باس واحد</div>
                            </button>
                        </h2>
                        <div id="collapseOne1" className="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                اي كلام لحدا ما نلاقي كلام
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne2">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
                                <div className="text-end w-100">باس واحد</div>
                            </button>
                        </h2>
                        <div id="collapseOne2" className="accordion-collapse collapse " aria-labelledby="headingOne2" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                اي كلام لحدا ما نلاقي كلام
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne3">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3">
                                <div className="text-end w-100">باس واحد</div>
                            </button>
                        </h2>
                        <div id="collapseOne3" className="accordion-collapse collapse " aria-labelledby="headingOne3" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                اي كلام لحدا ما نلاقي كلام
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne4">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne4" aria-expanded="true" aria-controls="collapseOne4">
                                <div className="text-end w-100">باس واحد</div>
                            </button>
                        </h2>
                        <div id="collapseOne4" className="accordion-collapse collapse " aria-labelledby="headingOne4" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                اي كلام لحدا ما نلاقي كلام
                            </div>
                        </div>
                    </div>
                </div>


                <a href="https://api.whatsapp.com/send?phone=201094635188" target="blank" type="button" className="btn btn-primary px-5 mt-4">{props.btn}</a>
            </div>
        </div>
    );
}

export default About;