import { Link } from "react-router-dom";
import '../CSS/TopBar.css'

const TopBar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <Link to="/">TEST</Link>
                </div>

                <ul>
                    <li><Link to="/skill" class="menu-option">Skills</Link></li>
                    <li><Link to="/port" class="menu-option">Portfolio</Link></li>
                    <li><Link to="/contact" class="menu-option">Contact</Link></li>
                </ul>

                <button class="hire-btn">Hire Me</button>
            </nav>
        </>
    )
}

export default TopBar