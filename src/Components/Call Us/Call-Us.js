import React from "react";
import BoxCall from "./BoxCall";
const CallUs = (props) => {
    return (
        <div className="py-5 px-4">
            <h2 className="text-center text-white">{props.title}</h2>
            {/* animation place */}
            <h5 className="text-center text-white mt-4 mb-5">{props.disc}</h5>
            <div className="row gap-4 container justify-around m-auto">
                <BoxCall avatar='fa-solid fa-phone text-orange-400 fs-1' ankarLink="tel:+201028876202" ankarLinkShow="Phone call" />
                <BoxCall avatar='fa-regular fa-envelope text-orange-400 fs-1' ankarLink="mailto:adevloma@gmail.com" ankarLinkShow="Gmail" />
                <BoxCall avatar='fa-brands fa-facebook text-orange-400 fs-1' ankarLink="https://www.facebook.com/devloma.co" ankarLinkShow="Facebook" />
                <BoxCall avatar='fa-brands fa-instagram text-orange-400 fs-1' ankarLink="https://instagram.com/adevloma?igshid=YmMyMTA2M2Y=" ankarLinkShow="Instagram" />
                <BoxCall avatar='fa-brands fa-linkedin text-orange-400 fs-1' ankarLink="https://www.linkedin.com/company/devloma/" ankarLinkShow="Linkedin" />
            </div>
        </div>
    );
}

export default CallUs;