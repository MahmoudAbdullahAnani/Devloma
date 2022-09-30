import React from "react";
import FirstAbout from "../../Components/About-Devloma/FirstAbout";
import Thoughts from "../../Components/Thoughts/Thoughts";
import pana from '../../Images/About Images/Online world.gif'
import About from "../../Components/AboutTeam/About";
import CallUs from "../../Components/Call Us/Call-Us";

const AboutUs = () => {
    return (
        <>
            <FirstAbout btn="اطلب الان" src={pana} alt='pana' title='لماذا ديفلوما' aboutTextBtm="تُعد شركتنا واحدة من أفضل الشركات الرائدة في مجال تطوير وتصميم المواقع الإلكترونية في مصر والعالم العربي  ولدينا خبرات طويلة في مجال التسويق الإلكتروني  وبرمجة التطبيقات للأندرويد والايفون..." aboutTextTop="هل تبحث عن شركة مبدعة تكرس كل جهودها من أجل نجاحك ونجاح موقعك الإلكتروني؟ إذا كانت الإجابة بنعم، لا تقلق نحن هنا لخدمتك شركة قيمة تك شريك إلكتروني رائع للوصول للنجاح الذي تسعى له ، من خلال خبرتنا الطويلة في مجال التسويق الإلكتروني والحلول الرقمية فإننا نضمن لك العمل مع فريق من المحترفين في عالم الإنترنت" />
            <div className="aboutThoughts row gap-3 m-auto container justify-around px-4 py-5">
                <Thoughts disc="دفلوما تقدم لك مجموعة من المحترفين في مجالات البرمجة المتعددة و هم مجموعة علي اعلي مستوي من الخبرة " icon="fa-solid fa-code text-white fs-4" TitleIcon="خبرة في البرمجة"/>
                <Thoughts disc="خبرتنا في كثير من المشاريع البرمجية خلقت لنا الكثير من الافكار المميزة التي تؤدي الي الكثير من الربح" icon="fa-solid fa-lightbulb fs-4 text-white" TitleIcon="أفكار و حلول"/>
                <Thoughts disc="في دفلوما نقدم لك مجموعة علي اعلي مستوي من الكفائة لستقبال الاستفسارات و المكالمات علي مدار 24 ساعة" icon="fa-solid fa-headphones text-white fs-4" TitleIcon="دعم فني 24 ساعة"/>
                <Thoughts disc="لدينا مجموعة من المصممين ذوي خبرة كبيرة جدا في مجال التصميم و انشاء الفديوهات القصيرة علي اعلي مستوي" icon="fa-solid fa-pen-nib fs-4 text-white" TitleIcon="تصاميم احترافية"/>
            </div>
            <About btn="تواصل معنا الان " src={pana} alt='pana' title='من نحن' aboutTextTop="نحن فريق من المتخصصين في البرمجة و التسويق الالكتروني و ايضا كل ما يتعلق بالتصميم و صناعة الرسوم المتحركة." />
            <CallUs title="اتصل بنا" disc="توصل معنا علي مدار ال 24 ساعة وتحدث مع مهندسين مختصيين"  />
        </>
    );
}

export default AboutUs;