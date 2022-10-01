import React from "react";
import './Thoughts.css'
const Thoughts = (props) => {
    return (
        <div className="bg-slate-400 p-4 d-flex align-items-center justify-center col-xs-10  col-md-5 col-lg-2 Thoughts  rounded relative">
            <div className="showHeader w-100 text-center rounded bg-slate-700 absolute">
                <h4 className="bg-slate-100  font-extrabold pt-2 ">{props.TitleIcon}</h4>
                <p className="text-center font-medium p-2 pb-3 text-white">{props.disc}</p>
            </div>
            <div className="FesstedHeader text-center">
                <div className="bg-red-500 w-fit mt-1 p-3 rounded-full m-auto">
                    <i className={props.icon}></i>
                </div>
                <h4 className="mt-2 font-extrabold ">{props.TitleIcon}</h4>
            </div>
        </div>
    );
}

export default Thoughts;