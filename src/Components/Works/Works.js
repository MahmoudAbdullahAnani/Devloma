import React from "react";
// Get All Images
import zero from '../../Images/0.jpg'
import arbil from '../../Images/Arbil.jpg'
import ga from '../../Images/ga.jpg'
import green from '../../Images/green.jpg'
import homelascom from '../../Images/Homepage - Copy.jpg'
import tobha from '../../Images/tobha.jpg'
// Get Shraink
import about from '../../Images/about.jpg'
import one from '../../Images/1.jpg'
import H from '../../Images/H.jpg'
import i from '../../Images/i.jpg'
import toh from '../../Images/toh.jpg'
import g from '../../Images/g.jpg'
// Get style Css
import './Work.css'
// Get sweetalert2
import Swal from 'sweetalert2'
const Works = () => {
    // const Swal = require('sweetalert2')
    const image1 = () => {
        Swal.fire({
            footer: '<a href="https://api.whatsapp.com/send?phone=201094635188"  >تواصل معنا الان</a>',
            imageUrl: one,
            imageWidth: 400,
            imageHeight: 1000,
        })
    }
        const image2 = () => {
            Swal.fire({
                footer: '<a href="https://api.whatsapp.com/send?phone=201094635188"  >تواصل معنا الان</a>',
                imageUrl: about,
                imageWidth: 400,
                imageHeight: 1000,
            })
        }
            const image3 = () => {
                Swal.fire({
                    footer: '<a href="https://api.whatsapp.com/send?phone=201094635188"  >تواصل معنا الان</a>',
                    imageUrl: H,
                    imageWidth: 400,
                    imageHeight: 1000,
                })
            }
                const image4 = () => {
                    Swal.fire({
                        footer: '<a href="https://api.whatsapp.com/send?phone=201094635188"  >تواصل معنا الان</a>',
                        imageUrl: i,
                        imageWidth: 400,
                        imageHeight: 1000,
                    })
                }
                    const image5 = () => {
                        Swal.fire({
                            footer: '<a href="https://api.whatsapp.com/send?phone=201094635188"  >تواصل معنا الان</a>',
                            imageUrl: toh,
                            imageWidth: 400,
                            imageHeight: 1000,
                        })
                    }
                    const image6 = () => {
                        Swal.fire({
                            footer: '<a href="https://api.whatsapp.com/send?phone=201094635188"  >تواصل معنا الان</a>',
                            imageUrl: g,
                            imageWidth: 400,
                            imageHeight: 1000,
                        })
                    }
                    return (
                        <>
                            <h1 className="text-white font-bold text-center py-4">اعمالنا</h1>
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                </div>
                                <div className="carousel-inner container">
                                    <div className="carousel-item  carouselItem  h-96 active rounded">
                                        <img src={zero} className="d-block w-100  carouselItemImage  rounded h-96 " alt="..." />
                                        <div className="carousel-caption carouselCaption ">
                                            <button type="button" onClick={image1} className="btn btn-danger">عرض كلي</button>
                                        </div>
                                    </div>
                                    <div className="carousel-item  carouselItem h-96 rounded">
                                        <img src={arbil} className="d-block rounded  w-100 h-96   " alt="..." />
                                        <div className="carousel-caption ">
                                            <button type="button" onClick={image2} className="btn btn-danger">عرض كلي</button>
                                        </div>
                                    </div>
                                    <div className="carousel-item  carouselItem h-96 rounded">
                                        <img src={homelascom} className="d-block rounded   h-96 w-100  " alt="..." />
                                        <div className="carousel-caption ">
                                            <button type="button" onClick={image3} className="btn btn-danger">عرض كلي</button>
                                        </div>
                                    </div>
                                    <div className="carousel-item carouselItem h-96 rounded">
                                        <img src={green} className="d-block rounded  w-100 h-96   " alt="..." />
                                        <div className="carousel-caption ">
                                            <button type="button" onClick={image4} className="btn btn-danger">عرض كلي</button>
                                        </div>
                                    </div>
                                    <div className="carousel-item  carouselItem h-96 rounded">
                                        <img src={ga} className="d-block w-100 rounded h-96 " alt="..." />
                                        <div className="carousel-caption ">
                                            <button type="button" onClick={image6} className="btn btn-danger">عرض كلي</button>
                                        </div>
                                    </div>
                                    <div className="carousel-item  carouselItem h-96 rounded">
                                        <img src={tobha} className="d-block w-100 rounded h-96 " alt="..." />
                                        <div className="carousel-caption ">
                                            <button type="button" onClick={image5} className="btn btn-danger">عرض كلي</button>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </>
                    );
                    }
                export default Works;