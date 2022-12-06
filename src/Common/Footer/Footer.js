import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../resources/fav.png'

const Footer = () => {
    return (
            <footer className="footer p-10 bg-emerald-500 text-base-content">
                <div>
                    <img className='w-12 h-12' src={logo} alt="Company Logo"/>
                    <p>BD Motors Entertainer<br/>Providing reliable tech since 2022</p>
                </div> 
                <div>
                    <span className="footer-title">Services</span> 
                    <Link className="link link-hover">Top Sell</Link> 
                    <Link className="link link-hover">Top View</Link> 
                    <Link className="link link-hover">Marketing</Link> 
                    <Link className="link link-hover">Advertisement</Link>
                </div> 
                <div>
                    <span className="footer-title">Company</span> 
                    <Link className="link link-hover">About us</Link> 
                    <Link className="link link-hover">Contact</Link> 
                    <Link className="link link-hover">Jobs</Link> 
                    <Link className="link link-hover">Press kit</Link>
                </div> 
                <div>
                    <span className="footer-title">Legal</span> 
                    <Link className="link link-hover">Terms of use</Link> 
                    <Link className="link link-hover">Privacy policy</Link> 
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
    );
};

export default Footer;