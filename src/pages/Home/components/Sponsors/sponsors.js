import React, { useState, useEffect } from 'react';
import { backInOut, motion, useTransform, useViewportScroll } from 'framer-motion';
import style from './style.css';
import ScrollAnimation from '../../../../styles/ScrollAnimation.css';
import msft from '../../../../images/Sponsors/msft.png';
import meta from '../../../../images/Sponsors/meta.png';
import mastercard from '../../../../images/Sponsors/mastercard.png';
import deloitte from '../../../../images/Sponsors/deloitte.png';
import ey from '../../../../images/Sponsors/ey.png';
function Sponsors() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('fadeInElement');
            if (element) {
                const topPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                setIsVisible(topPosition < windowHeight+50);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ height: '80%', paddingTop: '100px', position: 'relative', top: '-400px' }}>
            {isVisible && (
                <motion.div

                    initial={{
                        width: '40px',
                        height: '35px'
                    }}
                    animate={{
                        width: '250px',
                        padding: '10px'
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: 'backInOut',
                    }}
                    style={{
                        margin: '0 auto',
                        borderRadius: '500px',
                        backgroundColor: '#623CE8',
                        translateY: '-25%',
                        color: 'white',
                        textAlign: 'center',

                    }}
                >


                    {isVisible && (
                        <motion.p
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.4,
                                delay: 1.1,
                                ease: 'backInOut',
                            }}
                            className='becomeourpartner'>Become our partner</motion.p>
                    )}
                </motion.div>

            )}

            <motion.div id="fadeInElement" className={isVisible ? 'zoom-in visible' : ' zoom-in'} >
                <div className='SponsorList'>
                    <div id="fadeInElement" className={isVisible ? 'fade-in-bottom visible' : ' fade-in-bottom'}>
                        <img src={msft} style={{ height: '100px' }} />
                    </div>
                    <div id="fadeInElement" className={isVisible ? 'fade-in-bottom visible' : ' fade-in-bottom'}>
                        <img src={meta} style={{ height: '100px' }} />
                    </div>
                    <div id="fadeInElement" className={isVisible ? 'fade-in-bottom visible' : ' fade-in-bottom'}>
                        <img src={mastercard} style={{ height: '100px' }} />
                    </div>
                    <div id="fadeInElement" className={isVisible ? 'fade-in-bottom visible' : ' fade-in-bottom'}>
                        <img src={deloitte} style={{ height: '50px', position: 'relative', top: '40px' }} />
                    </div>
                    <div id="fadeInElement" className={isVisible ? 'fade-in-bottom visible' : ' fade-in-bottom'}>
                        <img src={ey} style={{ height: '100px', position: 'relative', top: '-10px' }} />
                    </div>
                </div>
            </motion.div>

        </div>
    );
}

export default Sponsors;
