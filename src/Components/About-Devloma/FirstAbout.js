import React from "react";
import './FirstAbout.css'
const FirstAbout = (props) => {
    return (
        <div className="row m-0 flex-wrap-reverse justify-around w-100 pt-lg-4 pb-4  px-3">
            <div className="aboutImage  col-xs-11 col-lg-6">
                <img src={props.src} className='rounded-md m-auto' alt={props.alt} />
            </div>
            <div className="aboutContent  lh-base my-3 text-white col-xs-11 col-lg-4">
                <h2 className="">{props.title}</h2>
                {/* animation place */}
                <div className="animation me-2 rounded">
                    <span className="animation-loder1"></span>
                    <span className="animation-loder2"></span>
                </div>
                <p className="mt-4 ">{props.aboutTextTop}</p>
                <p className="mt-4 ">{props.aboutTextBtm}</p>
                <a href="https://api.whatsapp.com/send?phone=201094635188" target="blank" type="button"  className="btn btn-primary px-5 mt-4">{props.btn}</a>
            </div>
        </div>
    );
}

export default FirstAbout;