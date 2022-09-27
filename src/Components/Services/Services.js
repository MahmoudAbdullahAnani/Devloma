import React from "react";
import Service from "../Service/Service";
import webDesign from '../../Images/webDedine.jpg'
import mobApp from '../../Images/mobaile-app.jpg'
import ecommars from '../../Images/E-commerce design.jpg'
import Ps4 from '../../Images/4Ps.jpg'
import seo from '../../Images/seo.png'
import buildBrand from '../../Images/build-Brand.jpg'
import motion from '../../Images/motion.png'
import sapport from '../../Images/sapport.jpg'
import 'animate.css';

const Services = () => {
    return (
        <div className="services">
            <h2 className="text-white font-bold text-center py-4 animate__animated animate__slideInDown">الخدمات التى نقدمها</h2>
            <div className="service px-4 d-flex flex-wrap gap-5 justify-center pt-3 pb-5 animate__animated animate__slideInUp">
                {/* تصميم المواقع */}
                <Service srcImage={webDesign} altImage="Sites Design" title="تصميم المواقع الالكترونية" discrpshan="حسب الاحصائيات , يقوم المستهلك بالبحث عن المنتج أو الخدمة الذي يرغب بها قبل قرار الشراء , لذا من الضروري  تواجدك كصاحب مشروع علي الانترنت من خلال موقعك الكتروني"/>
                {/* تصميم التطبيقات الموبايل */}
                <Service srcImage={mobApp} altImage="Mobile Application Design" title="تصميم تطبيقات الجوال" discrpshan="معظم المستخدمين بالعالم يمتلكون هاتف ذكي و يقومون بتحميل العديد من التطبيقات يوميا اجعل تطبيقك من ضمنهم"/>
                {/* تصميم متاجر الكترونية */}
                <Service srcImage={ecommars} altImage="E-commerce design" title="تصميم المتاجر الالكترونية" discrpshan="صمم الان متجرك الالكتروني وبادر في بيع منتجاتك بكل سهوله"/>
                {/*  التسويق */}
                <Service srcImage={Ps4} altImage="E-Marketing" title="تسويق الكتروني عبر السوشيال ميديا" discrpshan="تعتبر منصات التواصل الاجتماعي أو السوشيال ميديا أول وسيلة تخطر ببالك عند التفكير في التسويق الالكتروني لمشروعك , بسبب سهولة التعامل معها و بسبب قلة تكاليفها بالمقارنه بالمواقع الاخري"/>
                {/*  seo */}
                <Service srcImage={seo} altImage="Search Engine Optimization" title="تحسين ظهور المواقع الاكترونية علي محركات البحث SEO" discrpshan="خدمة ال SEO هي مجموعه الإجراءات و الأساليب التقنية و التسويقية الرقمية التي تضع موقعك في النتائج الأولي علي محركات البحث مثل جوجل    "/>
                {/* تصميم الهوية التجارية اللوجو */}
                <Service srcImage={buildBrand} altImage="business identity" title="(Logo) هوية للعلامة التجارية Branding" discrpshan="اذا كنت تنوي التسويق لمشروعك الجديد , سوف تحتاج في البداية لعمل علامة تجارية لشركتك أو مؤسستك حيث تعتبر اهم خطوة في مشروعك حيث تستخدم لخلق هوية تجارية مميزة للشركة"/>
                {/* موشن جرافيك */}
                <Service srcImage={motion} altImage="motion graphics" title="(motion graphics) الرسوم المتحركة " discrpshan="قم بتصميم الفيديو الخاص بك الذي يعرف الاخرين عليك بطريقة لطيف و بسيط"/>
                {/* الدعم الفني */}
                <Service srcImage={sapport} altImage="Technical support" title="الدعم الفني" discrpshan="دعم فنى متاح على مدار الساعة للرد على العملاء وحل مشاكلهم"/>
            </div>
        </div>
    );
}

export default Services;