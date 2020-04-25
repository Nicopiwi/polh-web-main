import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import CreditCard from '../svg/CreditCard';
import Realstate from '../svg/Realstate';
import polhapi from '../svg/polhapi';
export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Blockchain al alcance de todos
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Aumenta la productividad de tus procesos , agregale mayor credibilidad , reduci la
            burocracia o simplemente disfruta de los beneficios de la tecnologa sin volverte loco
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg" className="bg-white">
              Visualiza un documento
            </Button>
            <Button size="lg" className="bg-white">
              Integra Pölh
            </Button>
          </p>
          <p className="mt-4 text-gray-600"></p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service One</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Two</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Three</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks
            against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Design And Plan Your Business Growth Steps
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      secondarySlot={<Realstate />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<CreditCard />}
    />
    <section id="stats" className="py-0 ">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center">
          Nuestra suite de productos
        </h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8 h-full ">
              <img src="../Assets/polh.png" />
              <p className="font-semibold text-center text-xl">Pölh api</p>
              <p className="mt-4">
                Integra Pölh a tu negocio con nuestra API Ya sea una plataforma , sitio web o App.
                Pölh es facilmente integrable gracias a nuestra API tan facil como:
              </p>
              <p className="mt-4 bg-gray-200 text-gray-600 text-center"> npm install</p>
              <h3 className="mt-2 text-center">o hace una request a nuesta api</h3>
              <p className="mt-4 bg-gray-200 text-gray-600 text-center"> https://api.polh.io/</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8 h-full ">
              <p className="font-semibold text-xl text-center">Visualizer</p>
              <p className="mt-4">
                Visualiza documentos atravez de nuestra web. Accedé a ellos mediante su HASH y tener
                acceso al mismo y a sus archivos adjuntos. Para hacer una prueba copia el HASH que
                esta abajo y pegalo en el visualizador.
              </p>
              <Button className="colors.primary.darker">Ir a al Vizualizer</Button>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8 h-full ">
              <p className="font-semibold text-xl text-center">Manager</p>
              <p className="mt-4">
                Administra y tene control de los documentos de tu organizacion con nosotros.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8 h-full ">
              <p className="font-semibold text-xl text-center">Recetas Digitales</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section
      id="testimonials"
      className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center"
    >
      <h3 className="text-5xl font-semibold">¿Que estas esperando?</h3>

      <p className="mt-8">
        <Button size="xl">Contactanos</Button>
      </p>
    </section>
  </Layout>
);
