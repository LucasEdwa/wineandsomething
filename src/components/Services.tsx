import { services } from "../constants";
import {Link} from "react-router";
import { styles } from "../constants/styles";
import { useTheme } from "../context/ThemeContext";
export default function Services() {
    const { theme } = useTheme();
    return (<>
    <div className={`${styles.padding} ${theme.background} ${styles.services.body}`}>
    <div className={`${styles.services.container} ${theme.background}`}>
            {
                services.map((service) => (
                    <div className={`${styles.services.holder} ${theme.text}`} key={service.id}>
                         <h1>{service.title}</h1>
                       <Link to={service.link}>here</Link>
                    </div>
                ))
            }
        </div>
        </div>
    </>
    )
}