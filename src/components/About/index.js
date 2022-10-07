import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function About() {
    const [pages] = useState([
        {
            name: "about me"
        }
    ]);
    const [currentPage] = useState(pages[0]);

    return (
        <div className="masthead text-center text-white d-flex">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr />
                        <p className="text-faded mb-5">I am an experienced front end developer with detailed full stack knowledge. I have more than 2 years of experience in developing mid- to large-scale websites using the latest core web technologies, in which I maintain expert-level knowledge. I recently earned a Certificate in Full Stack Web Development from the University of Miami, where I developed skills in Full Stack Software Development.</p>
                       
                        <p className="text-faded mb-5">From the moment I produce "Hello World" in the console of my first application, I Knew I was hooked into the world of software development. But software development never been "just a job" for me, it's offered an engaging challenge to continually learn and improve my skills in creating high quality software. What started with a simple “Hello World" has become a full flagged passion that only gets more exciting as the year go by.</p>
                        {/* <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Check Out My Work</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About