import React from 'react';
import styles from './Navfoot.module.css';

function Footer() {
    return (
        <div className={styles.wfoot}>
            <div className={styles.wfoot1}>
                <img className={styles.footIcon} src='./../images/logofoot.png' alt='img' />

                <center>
                    <div className={styles.footcon}>
                        <span className={styles.footHead}>
                            Address:
                        </span>
                        <br />
                        Flat no 807, block - c, risinia trendilla, opp Darbar restaurant,bachupally x roads, bachupally, Hyderabad 500090.
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
                    <div className={styles.socialLink2}>
                        <div className={styles.footContactH}> <u> Contact no:</u></div>
                        <br />
                        <span className={styles.footContact}>
                            +916281444679, +919397688578
                        </span>
                    </div>
                    <br />
                    <br />
                    <div className={styles.socialLink3}>
                        <u> Email Id: </u><br />
                        <span className={styles.footContact2}>admin@inspacialdesigns.com</span>
                    </div>
                </center>



            </div>

            <br />



        </div >
    )
}

export default Footer