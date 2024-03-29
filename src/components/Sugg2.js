import React from 'react'
import { ProjectData2 } from './ProjectData2';
import { Link } from 'react-router-dom';
import styles from './caro1.module.css';
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




function Sugg2() {
    return (
        <div className={styles.sugg}>

            {ProjectData2.map((item, index) => {
                return (

                    <Link
                        className={styles.suggItem}
                        to={item.path}
                        state={{
                            itemTitle: item.title,
                            img1: item.img[0],
                            img2: item.img[1],
                            img3: item.img[2],
                            img4: item.img[3],
                            img5: item.img[4],
                            img6: item.img[5],
                            img7: item.img[6],
                            img8: item.img[7],
                            img9: item.img[8],
                            img10: item.img[9],
                            img11: item.img[10],
                            img12: item.img[11],
                            img13: item.img[12],
                            img14: item.img[13],
                            img15: item.img[14],
                            img16: item.img[15],
                            // sugg: item.suggestion,
                            no: item.no,

                            head: item.head,
                            cdate: item.cdate,
                            loc: item.location,
                            area: item.area,
                            category: item.category,
                            scope: item.desc1,
                            descp: item.desc2,
                            desc3: item.desc3,
                            desc4: item.desc4


                        }}
                    >

                        <div className={styles.suggCard}>
                            <img className={styles.suggImg} src={item.img[0]} alt='img' />
                            <br />
                            <center>
                                <span className={styles.suggText}> {item.title}</span>
                            </center>
                        </div>

                    </Link>
                );
            })}

            ;
        </div>
    )
}

export default Sugg2;