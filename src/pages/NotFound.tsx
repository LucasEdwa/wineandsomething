import { Link } from "react-router";
import { colors, styles } from "../constants/styles";
export const NotFound = () => {
  return (<div className={`${styles.container} ${styles.padding} `}>
    <h1>404 Not Found</h1>
  <p>The page you are looking for does not exist.</p>
  <Link className={`${colors.background.primary} ${colors.text.primary} `} to="/">Go back to the home page</Link>
  </div>);
}