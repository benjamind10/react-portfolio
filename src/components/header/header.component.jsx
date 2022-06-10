import { useSpring, animated } from 'react-spring';

import './header.styles.css';

const Header = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });

  return (
    <div className='hero'>
      <div className='hero-cta'>
        <animated.div style={props}>
          Web and App Developer
        </animated.div>
      </div>
    </div>
  );
};

export default Header;
