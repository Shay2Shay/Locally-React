import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/UI/Navbar';
import plumberpng from './sellerImages/plumber.png';
import electricianpng from './sellerImages/electrician.png';
import carpenterpng from './sellerImages/carpenter.png';
import { Footer } from './Footer';

export const Services = () => {

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const containerStyle = {
        margin: '1rem 0',
        textAlign: 'center',
    };

    const flexContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        rowGap: '3rem',
        columnGap: '4rem',
        maxWidth: '1200px',
        margin: '0 auto',
    };

    const itemStyle = {
        height: 'auto',
        borderRadius: '0.25rem',
        padding: '1rem',
        boxShadow: '0px 0px 10px grey',
        textAlign: 'center',
    };

    const linkStyle = {
        padding: '0.75rem 1rem',
        borderRadius: '0.25rem',
        display: 'block',
        width: '8rem',
        border: 'none',
        textDecoration: 'none',
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'rgb(0, 115, 255)',
        margin: '2rem auto',
    };

    return (
        <div>
            <Navbar/>
            <div style={containerStyle} className='services'>
            <h1>Your Services</h1>
            <motion.div
                style={flexContainerStyle}
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
                <motion.div
                    variants={itemVariants}
                    style={itemStyle}
                >
                    <img src={plumberpng} alt="" style={{ width: '200px', height: '50%' }} />
                    <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Plumber</p>
                    <p style={{ fontSize: '0.95rem' }}>As a dedicated plumbing service provider, I bring expertise in diagnosing, repairing, and maintaining plumbing systems. With a commitment to prompt and efficient service, I tackle issues ranging from leaks and clogs to pipe installations, ensuring optimal functionality for residential and commercial clients. Trust in my skillset to deliver reliable solutions.</p>
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    style={itemStyle}
                >
                    <img src={electricianpng} alt="" style={{ width: '200px', height: '50%' }} />
                    <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Electrician</p>
                    <p style={{ fontSize: '0.95rem' }}>As a seasoned electrician service provider, I specialize in delivering top-notch electrical solutions for residential and commercial needs. With a focus on safety and precision, I handle installations, repairs, and maintenance of electrical systems. Count on my expertise to ensure your property is equipped with efficient and secure electrical infrastructure.</p>
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    style={itemStyle}
                >
                    <img src={carpenterpng} alt="" style={{ width: '200px', height: '50%' }} />
                    <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Carpenter</p>
                    <p style={{ fontSize: '0.95rem' }}>As a skilled carpenter service provider, I offer tailored woodworking solutions for diverse projects. From crafting custom furniture to executing precise installations, my expertise enhances residential and commercial spaces. Trust in my craftsmanship to bring creativity and functionality to your woodworking needs.</p>
                </motion.div>
            </motion.div>
            <Link to="/addservices" style={linkStyle}>Add Service</Link>
        </div>
        <Footer/>
        </div>
    );
};
