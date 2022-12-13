import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './project.module.css';
import Sugg1 from '../components/Sugg1';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';




//THIS FILE IS NOT IN USE
//THIS FILE IS NOT IN USE
//THIS FILE IS NOT IN USE
//THIS FILE IS NOT IN USE
//THIS FILE IS NOT IN USE
//THIS FILE IS NOT IN USE
//THIS FILE IS NOT IN USE
//THIS FILE IS NOT IN USE
//THIS FILE IS NOT IN USE
//THIS FILE IS NOT IN USE





const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


function Project5(props) {
    return (
        <div className={styles.proj}>
            <Navbar />

            <div className={styles.proj2}>

                <div className={styles.projHead}>
                    Sridhar's
                </div>

                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={false}
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={2500}
                    keyBoardControl={true}
                    // customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    height='10rem'
                >

                    <div className={styles.pimg} >
                        <img className={styles.img1} src='./../images/P5/1.jpg' alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src='./../images/P5/2.jpg' alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src='./../images/P5/3.jpg' alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src='./../images/P5/4.jpg' alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src='./../images/P5/5.jpg' alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src='./../images/P5/6.jpg' alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src='./../images/P5/7.jpg' alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src='./../images/P5/8.jpg' alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src='./../images/P5/9.jpg' alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src='./../images/P5/10.jpg' alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src='./../images/P5/11.jpg' alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src='./../images/P5/12.jpg' alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src='./../images/P5/13.jpg' alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src='./../images/P5/14.jpg' alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src='./../images/P5/15.jpg' alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src='./../images/P5/16.jpg' alt='img' />
                    </div>


                </Carousel >

                <br />

                <div className={styles.pdetail}>
                    <span className={styles.cdate} >
                        Description: <b>Scandinavian</b>
                    </span>
                    <br />
                    <span className={styles.cdate}>
                        Date of Completion: <b>August, 2022</b>
                    </span>
                    <br />
                    <span className={styles.cdate}>
                        Locality: <b>Risinia Trendilla, Bachupally, Hyderabad, Telangana</b>
                    </span>
                    <br />
                    <span className={styles.cdate}>
                        Area: <b>1800 sqft.</b>
                    </span>
                    <br />
                    <span className={styles.cdate}>
                        Category: <b>Residential Interiors</b>
                    </span>
                    <br />
                    <span className={styles.cdate}>
                        Scope of work: <b>Design & Execution</b>
                    </span>


                </div>

            </div>


            <div className={styles.sugges}>

                <div className={styles.suggHead}>
                    Our Projects
                </div>

                <Sugg1 />

            </div>

            <Footer />

        </div>
    )
}

export default Project5;