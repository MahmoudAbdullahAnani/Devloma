import React from "react";
const BoxCall = (props) => {
    return (
        <div className="py-3 bg-white text-center px-4 rounded-md col-xs-11 col-md-5 col-lg-2">
            <div className="avatar">
                {/* Avatar */}
                <i className={props.avatar}></i>
            </div>
            <h4 className="text-center mt-2">
                <a href={props.ankarLink} className="text-red-500">{props.ankarLinkShow}</a>
            </h4>
        </div>
    );
}

export default BoxCall;