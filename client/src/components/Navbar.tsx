import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div className="Navbar">
            <Link to="/"><button>Home</button></Link>
            <Link to="/about"><button>About Sarthak</button></Link>
        </div>
    )
}