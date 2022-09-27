import React from "react";
import style from './Galrye.module.css'
import 'animate.css';

const Galrye = () => {
    return (
        <div className="galrye d-flex flex-wrap-reverse gap-3 justify-around pt-5 align-items-center py-20  container ">
            <div className="galryeVideo col-xs-11 col-lg-5  animate__animated animate__slideInRight">
                {/* <iframe src="https://player.vimeo.com/video/753248640?h=e6fcc13592" className="h-96 w-80" title="Devloma" allow="autoplay; fullscreen; picture-in-picture" ></iframe> */}
                {/* <video controls>
                    <source src="https://youtu.be/UyYmI5MJ2n0"  />
                    Your browser does not support HTML video.
                </video> */}
                <iframe className="rounded-tl-3xl rounded-br-3xl" src="https://www.youtube.com/embed/UyYmI5MJ2n0" height={style.galryeVideoIframeHeight} width={style.galryeVideoIframeWidth} title="devloma" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </div>
            <div className="galryeText text-white col-xs-11 col-lg-5   animate__animated animate__slideInLeft">
                <div className={style.galryeTextTeps}>
                    <h6>نحلل ... نخطط ... ننفذ ...</h6>
                    <h1>دڤلوما لإنشاء و تطوير تطبيقات الموبايل و مواقع الويب</h1>
                    <h5 className="my-7">نحلل و نخطط وننفذ للوصول الي النجاح المطلوب المتمثل في  ارضاء العملاء</h5>
                    <button className="btn btn-danger ">اطلب خدماتنا الان</button>
                </div>
            </div>
        </div>
    );
}

export default Galrye;