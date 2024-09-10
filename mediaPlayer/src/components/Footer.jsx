import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const footerStyle = {
    backgroundColor: '#343a40', 
    padding: '40px 0',
    borderTop: '1px solid #e9ecef',
    color: '#ffffff'  
};

const sectionStyle = {
    marginBottom: '20px',
};

const linkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
};

const linkHoverStyle = {
    textDecoration: 'underline',
};

const socialIconStyle = {
    color: '#ffffff',
    fontSize: '24px',
    marginRight: '15px',
};

const socialIconHoverStyle = {
    color: '#007bff',  
};

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4" style={sectionStyle}>
                        <h5>About Us</h5>
                        <p>
                            Media Player is your ultimate destination for seamless audio and video experiences. We provide high-quality playback with support for a wide range of formats.
                        </p>
                    </div>
                    <div className="col-md-4" style={sectionStyle}>
                        <h5>Quick Links</h5>
                        <ul style={{ padding: 0, listStyle: 'none' }}>
                            <li><Link to="/home" style={linkStyle} onMouseOver={(e) => e.target.style.textDecoration = linkHoverStyle.textDecoration} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>Home</Link></li>
                            <li><Link to="/features" style={linkStyle} onMouseOver={(e) => e.target.style.textDecoration = linkHoverStyle.textDecoration} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>Features</Link></li>
                            <li><Link to="/about" style={linkStyle} onMouseOver={(e) => e.target.style.textDecoration = linkHoverStyle.textDecoration} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>About</Link></li>
                            <li><Link to="/contact" style={linkStyle} onMouseOver={(e) => e.target.style.textDecoration = linkHoverStyle.textDecoration} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4" style={sectionStyle}>
                        <h5>Follow Us</h5>
                        <div>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseOver={(e) => e.target.style.color = socialIconHoverStyle.color} onMouseOut={(e) => e.target.style.color = socialIconStyle.color}><FaFacebook /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseOver={(e) => e.target.style.color = socialIconHoverStyle.color} onMouseOut={(e) => e.target.style.color = socialIconStyle.color}><FaTwitter /></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseOver={(e) => e.target.style.color = socialIconHoverStyle.color} onMouseOut={(e) => e.target.style.color = socialIconStyle.color}><FaInstagram /></a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseOver={(e) => e.target.style.color = socialIconHoverStyle.color} onMouseOut={(e) => e.target.style.color = socialIconStyle.color}><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <p>&copy; {new Date().getFullYear()} Media Player. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;