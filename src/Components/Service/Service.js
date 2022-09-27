import React from "react";
import { Link } from "react-router-dom";
import  './Service.css'
import 'animate.css';

const Service = (props) => {
    return (
        <>
            <div className="card text-end col-xs-11 col-md-5 col-lg-3 max-w-4xl  animate__animated animate__animated animate__slideInDown" >
                <div className="card-img h-52">
                    <img src={props.srcImage} className="card-img-top h-100" alt={props.altImage} />
                </div>
                    <div className="card-body pt-3">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.discrpshan}</p>
                        <Link to="/#" className="btn text-white">اقرأ المزيد</Link>
                    </div>
            </div>
        </>
    );
}

export default Service;