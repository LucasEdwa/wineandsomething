import { styles } from '../constants/styles';
import { heroSection } from '../constants/index';
import { Link } from 'react-router';
import Background3D from './Background3D';
import { useTheme } from '../context/ThemeContext';

const HeroSection = () => {
  const { title, description, buttonText, buttonLink } = heroSection[0];
  const { theme } = useTheme();

  return (
    <div className={`${styles.padding} ${styles.flexCol} ${theme.background} ${styles.heroSection}`}>

      <h1 className={`${styles.heroHeadText} ${theme.text}`}>
        {title}
      </h1>
      <p className={`${styles.heroSubText} ${theme.subText}`}>
        {description}
      </p>
      <Link to={buttonLink} className={theme.button.primary}>
        {buttonText}
      </Link>
      <Background3D />
    </div>
  );
};

export default HeroSection;
