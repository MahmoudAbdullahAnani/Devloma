import React from "react";
// import style from './Brief.module.css'
import 'animate.css';

const Brief = () => {
    return (
        <div className="brief py-32 px-4  bg-gradient-to-r from-slate-800 to-slate-900  rounded my-3 animate__animated animate__slideInDown" >
            <div className="brief-chailder p-10 m-auto text-center max-w-6xl shadow-lg bg-white rounded-lg ">
                <h2 className="font-bold pb-4  ">نقدم مجموعة كاملة من خدمات التسويق الإلكتروني</h2>
                <h5 className="font-normal ">شركة ديڤلوما هي شركة تسويق الكتروني سنوات من الخبرة في التسويق وتصميم وتطوير مواقع الويب وبرمجة تطبيقات الهاتف المحمول ، نعتمد في عملنا علي العلم والخبرة معاً  نتميز بالنجاح الكبير والعلاقات المستدامة التي حققناها مع عملائنا  بناءً على جهود فريق محترف ومتعاون
                    ديفلوما خيارك الافضل دائما</h5>
            </div>
        </div>
    );
}

export default Brief;