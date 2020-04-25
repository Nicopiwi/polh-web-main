import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import LogoDetail from '../../svg/LogoDetail';
const Header = () => (
  <header className="sticky top-0 bg-primary-darker shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto  px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Beneficios
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Verticales
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Productos
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Contacto
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Ir a recetas</Button>
      </div>
    </div>
  </header>
);

export default Header;
