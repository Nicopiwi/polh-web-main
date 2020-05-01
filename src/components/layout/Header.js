import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import LogoDetail from '../../svg/LogoDetail';
import '../../css/ownStyles.css'
const Header = () => (
  <header className="sticky top-0 bg-primary-darker shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto  px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-20">
          <LogoIcon />
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0 mb-4">
        <AnchorLink className="px-4 headerButton hover:text-white" href="#features">
          Beneficios
        </AnchorLink>
        <AnchorLink className="px-4 headerButton hover:text-white" href="#services">
          Verticales
        </AnchorLink>
        <AnchorLink className="px-4 headerButton hover:text-white" href="#stats">
          Productos
        </AnchorLink>
        <AnchorLink className="px-4 headerButton hover:text-white" href="#testimonials">
          Contacto
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">
          <a style={{ color: 'black' }} href="https://recetas.polh.io/" target="_blank">
            Ir a recetas
          </a>
        </Button>
      </div>
    </div>
  </header>
);

export default Header;
