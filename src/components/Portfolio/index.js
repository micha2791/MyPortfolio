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
            name: 'covid-traveling',
            description: 'JQuery/API/Materialize',
            link: "https://micha2791.github.io/Covid-Traveling/",
            repo: "https://github.com/micha2791/Covid-Traveling"
        },
        {
            name: 'employee-tracker',
            description: 'Javascript/Node.js/MySQL/Inquirer',
            link: "",
            repo: "https://github.com/micha2791/EmployeeTracker"
        },
        {
            name: 'presentation-card',
            description: 'Javascript/HTML/CSS',
            link: " https://micha2791.github.io/PresentationCard/",
            repo: "https://github.com/micha2791/PresentationCard"
        },
        {
            name: 'portfolio',
            description: 'Javascript/Node.js/Express/React',
            link: "",
            repo: "https://github.com/micha2791/MyPortfolio"
        },
        {
            name: 'tip-calculator',
            description: 'iOS/Swift',
            link: "",
            repo: "https://github.com/micha2791/iOS-TipCalculator"
        },
        {
            name: 'run-buddy',
            description: 'HTML/CSS',
            link: "https://micha2791.github.io/run-buddy/",
            repo: "https://github.com/micha2791/run-buddy"
        },
        {
            name: 'tech-blog',
            description: 'Node/MySQL/Sequalize',
            link: "",
            repo: "https://github.com/micha2791/Tech-Blog"
        },
        {
            name: 'weather-dashboard',
            description: 'JavaScript/API/Bootstrap',
            link: "https://micha2791.github.io/WheaterApp/",
            repo: "https://github.com/micha2791/WheaterApp"
        },
        {
            name: 'e-commerce-backend',
            description: 'JS/Node/MySQL/Sequalize',
            link: "https://drive.google.com/file/d/1kXgp2SWmG9zc-Yl0JyWmkqfBaNh_u-Ov/view",
            repo: " https://github.com/micha2791/eComerce-Backend"
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
