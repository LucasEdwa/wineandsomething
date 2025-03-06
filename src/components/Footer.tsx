import { Link } from "react-router";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
    const { theme } = useTheme();
    return (
        <footer className={`${theme.footer.container}`}>
            <p className={theme.footer.text}>Footer</p>
            <div className={theme.footer.links}> 
                <Link to="/" className={theme.footer.link}>Home</Link>
                <Link to="/about" className={theme.footer.link}>About</Link>
                <Link to="/services" className={theme.footer.link}>Services</Link>
                <Link to="/contact" className={theme.footer.link}>Contact</Link>
                <Link to="/booking" className={theme.footer.link}>Booking</Link>
            </div>
        </footer>
    )
}   