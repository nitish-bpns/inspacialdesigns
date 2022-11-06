import React from 'react';
import styles from './Navfoot.module.css';

function Footer() {
    return (
        <div className={styles.wfoot}>
            <div className={styles.wfoot1}>
                <img className={styles.footIcon} src='./../images/logo.png' alt='img' />

                <center>
                    <div className={styles.footcon}>
                        <span className={styles.footHead}>
                            Address:
                        </span>
                        <br />
                        Flat no 807, block - c, risinia trendilla, opp Darbar restaurant,<br /> bachupally x roads, bachupally, Hyderabad 500090.
                    </div>
                </center>
            </div>
            <div className={styles.wfoot2}>
                <center>
                    <span className={styles.socialLink}>
                        Follow us on:
                    </span>
                    <br />
                    <a href='https://www.linkedin.com/company/inspacial-designs' target='_blank' rel="noreferrer">
                        <img className={styles.footIcon2} src='./../images/li.png' alt='img' />
                    </a>
                    <a href='https://www.facebook.com/inspacialdesigns/' target='_blank' rel="noreferrer">
                        <img className={styles.footIcon2} src='./../images/fb.png' alt='img' />
                    </a>
                    <a href='https://www.instagram.com/inspacial.design.studio/' target='_blank' rel="noreferrer">
                        <img className={styles.footIcon2} src='./../images/ig.png' alt='img' />
                    </a>
                    <a href='https://www.youtube.com/channel/UC6D58QPkBLd83EWyogFoSpw/featured' target='_blank' rel="noreferrer">
                        <img className={styles.footIcon2} src='./../images/yt.png' alt='img' />
                    </a>


                    <br /><br />
                    <span className={styles.socialLink2}>
                        Contact no: <span className={styles.footContact}>+91 6281 444 679<br />
                            +919397688578</span>
                    </span>
                    <br />
                    <span className={styles.socialLink2}>
                        Email Id: <span className={styles.footContact}>admin@inspacialdesigns.com</span>
                    </span>
                </center>



            </div>

            <br />



        </div>
    )
}

export default Footer