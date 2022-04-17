import { HeroContainer, HeroCta } from './header.styles';

const Header = () => {
  return (
    <HeroContainer
      imageUrl={require(`../../assets/hero_banner.jpeg`)}
    >
      <HeroContainer as='header'>
        <span>Web and App Developer</span>
      </HeroContainer>
    </HeroContainer>
  );
};

export default Header;
