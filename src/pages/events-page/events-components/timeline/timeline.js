import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Dots from '../dots/dots';
import Dates from '../dates/dates';
import Info from '../info/info';
import "./timeline.css";
import { events } from '../data/eventsData';
import JoinUs from '../../../Home/components/JoinUs/JoinUs';

function Timeline() {
    // var myElement = document.getElementById("uwu");
    // var yPos = myElement.offsetTop;
    return (
        <div className="everything">
            <div>
                <motion.div className="line"
                    initial={{
                        height: '0px'

                    }}
                    animate={{
                        height: 2400,
                    }}
                    transition={{
                        duration: 1,
                        ease: 'backInOut',
                    }}
                    exit={{
                        opacity: '0',

                    }}
                >
                </motion.div>
            </div>
                
            <div style={{position: 'absolute', top: 0, width: '100%', height: '100%'}}>
                {events.map((event, index) => (
                    <div key={index}>
                        <Dots style={{ position: 'relative', top: '300px' }} />
                        <Dates multiplyer={300 - 58} date={event.date} />
                        <Info multiplyer={300 - 58} image={event.image} title={event.title} description={event.description} />
                        <div style={{ height: '300px', width: '100%' }}></div>
                    </div>
                ))}
            </div>
            <div style={{ height: '500px', width: '100%' }}></div>
        </div>
    );
    
}

export default Timeline;