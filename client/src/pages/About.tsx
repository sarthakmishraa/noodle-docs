export const About = () => {
    return(
        <div className="about">
            <h1>About Me</h1>
            <div className="aboutProfilePic" />
            <h3>Sarthak Mishra</h3>
            <a
                href="https://www.linkedin.com/in/sarthakmishraa/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="homeBtn">LinkedIn</button>
            </a>

            <a
                href="https://github.com/sarthakmishraa"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="homeBtn">Github</button>
            </a>
            
            <a
                href="http://sarthakmishra.lovestoblog.com/?i=2"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="homeBtn">Portfolio</button>
            </a>
        </div>
    )
}