import React, { useState } from 'react';
import Project from "../Project";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    const [projects] = useState([
        {
            name: 'JavaScript-test',
            description: 'Js/Boostrap/jQuery',
            link: "https://micha2791.github.io/QuizTest/",
            repo: "https://github.com/micha2791/QuizTest"
        },
        {
            name: 'covid-traveling',
            description: 'JQuery/API/Materialize',
            link: "",
            repo: ""
        },
        {
            name: 'br-for-java',
            description: 'MERN Stack',
            link: "",
            repo: ""
        },
        {
            name: 'run-buddy',
            description: 'HTML/CSS',
            link: "",
            repo: ""
        },
        {
            name: 'tech-blog',
            description: 'Node/MySQL/Sequalize',
            link: "",
            repo: ""
        },
        {
            name: 'weather-dashboard',
            description: 'JavaScript/API/Bootstrap',
            link: "https://micha2791.github.io/WheaterApp/",
            repo: "https://github.com/micha2791/WheaterApp"
        },
        {
            name: 'food-festival',
            description: 'JS/Node/PWA',
            link: "",
            repo: ""
        },
        {
            name: 'code-quiz',
            description: 'JavaScript/JQuery/CSS',
            link: "https://micha2791.github.io/QuizTest/",
            repo: "https://github.com/micha2791/QuizTest"
        },
        {
            name: 'password-generator',
            description: 'HTML/CSS/JavaScript',
            link: "https://micha2791.github.io/Michael-s-PswGenerator/",
            repo: "https://github.com/micha2791/Michael-s-PswGenerator/settings/pages"
        },
        {
            name: 'note-taker',
            description: 'Node/Express/Bootstrap',
            link: "https://note-taker-maste.herokuapp.com/",
            repo: "https://github.com/micha2791/Note-Taker/tree/main/Develop"
        },
        {
            name: 'work-day-scheduler',
            description: 'HTML/CSS/JavaScript',
            link: "https://micha2791.github.io/Work-Day-Scheduler/",
            repo: "https://github.com/micha2791/Work-Day-Scheduler"
        },
        {
            name: 'taskmaster-pro',
            description: 'HTML/CSS/JavaScript',
            link: "https://micha2791.github.io/Taskmaster-Pro/",
            repo: "https://github.com/micha2791/Taskmaster-Pro.git"
        },
        {
            name: 'git-finder',
            description: 'HTML/Bootstrap/JavaScript',
            link: "https://micha2791.github.io/Git-Finder/",
            repo: "https://github.com/micha2791/Git-Finder.git"
        }
    ]);

    return (
        <section className="p-0">
            <div className="container-fluid p-0">
                <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">
                   
                        {projects.map((project, idx) => (
                            <Project
                                project={project}
                                key={"project" + idx}
                            />
                        ))}
                    </div>
                
            </div>
        </section>
    );
};

export default Portfolio;
