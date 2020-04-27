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
import Background from '../Assets/backgroundFirst.svg';
export default () => (
  <Layout>
    <div style={{scrollSnapType:'y mandatory'}}>
    <section className="pt-20 md:pt-40" style={{backgroundImage: `url(${Background})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', scrollSnapAlign:'start'}}>
      <div className="container mx-auto px-8 flex flex-col sm:flex-row md:flex-row">
        <div className="text-center lg:text-left lg:w-1/2 order-last sm:order-first md:order-first">
          <h1 className="text-4xl sm:mt-3 text-white lg:text-5xl xl:text-6xl font-bold leading-none">
            Blockchain como servicio
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light text-white">
            Ayudamos a las empresas a adoptar las ultimas tecnologias para que saquen el maximo
            maximo provecho de estas
          </p>
          <p className="mt-4  text-gray-600 ">
            Somos un grupo de personas que cree en la implementacion de las ultimas innovaciones
            como motor del progreso
          </p>
          <p className="mt-8 md:mt-12">
          <a style={{ color: 'black' }} href="https://visualizer.polh.io/" target="_blank">
            <Button size="lg" className="bg-white">
              Visualiza un documento
            </Button>
            </a>
          
            <Button size="lg" className="bg-white mt-4 ml-4">
              Integra Pölh
            </Button>
          
          </p>
          <p className="mt-4 text-gray-600"></p>
        </div>
        <div className="order-first sm:order-last lg:w-1/2">
          <img src={require('../Assets/pohl.svg')}/>
        </div>
      </div>
    </section>
    <section style={{scrollSnapAlign:'start'}} id="features" className="py-20 lg:pb-40 lg:pt-48">
    
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">¿Porque utilizar blockchain?</h2>
        <p className="mt-4 text-gray-600 text-center">
            {' '}
            Si estás un poco perdido, hacé click{' '}
            <a
              style={{ color: 'black' }}
              href="https://www.youtube.com/watch?v=70asKwy15Ds"
              target="_blank"
            >
              aca{' '}
            </a>{' '}</p>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8 h-full">
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', paddingBottom:'50px'}}>
            <img src={require("../Assets/transparencia.svg")} style={{height: '200px'}}/>
            </div>
              <p className="font-semibold text-xl mt-4">Es transparente</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8 h-full">
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', paddingBottom:'50px'}}>
            <img src={require("../Assets/security.svg")} style={{height: '200px'}}/>
            </div>
              <p className="font-semibold text-xl mt-4">Mayor seguridad</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8 h-full">
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', paddingBottom:'50px'}}>
            <img src={require("../Assets/eficiencia.svg")} style={{height: '200px'}}/>
            </div>
              <p className="font-semibold text-xl mt-4">Aumenta la eficiencia</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8 h-full">
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', paddingBottom:'50px'}}>
            <img src={require("../Assets/accesibilidad.svg")} style={{height: '200px'}}/>
            </div>
              <p className="font-semibold text-xl mt-4">Reduci tus costos</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <br></br>
    <br></br>
    <br></br>

    <h2 id="services" className="text-3xl lg:text-5xl font-semibold text-center">
      Nuestras verticales
    </h2>
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Administracion y firma de documentos
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
              Como por ejemplo contratos, certificados, documentos de su propiedad intelectual, etc. Tenga y
              firme sus documentos mas importantes de una manera digital y segura.
          </p>
        </div>
      }
      secondarySlot={<img src={require('../Assets/primeraVertical.svg')} />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Tokenización de bienes</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
              Tokenice propiedades y facilite la inversión o simplemente reduzca los costos
              burocráticos en la escrituración o administración.
          </p>
        </div>
      }
      secondarySlot={<img src={require('../Assets/segundaVertical.svg')} />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Soluciones financieras</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          Automatización en la cadena de pagos, cambios de divisas y alternative banking
          </p>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8 h-full">
              <div style={{display:'flex', alignItems:'center', justifyContent:'center', paddingBottom:'50px'}}>
                <img src={require('../Assets/transparencia.svg')} style={{ height: '95px' }} />
                </div>
                <p className="font-semibold text-xl mt-4">Es transparente</p>
                <p className="mt-4">
                  Los historiales de transacciones se están volviendo más transparentes gracias a
                  blockchain. Ya que la misma funciona como un registro descentralizado , todos los
                  participantes de la red comparten la misma información en lugar de copias
                  individuales. Ademas solo se puede actualizar a través del consenso de
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8 h-full">
              <div style={{display:'flex', alignItems:'center', justifyContent:'center', paddingBottom:'50px'}}>
                <img src={require('../Assets/security.svg')} style={{ height: '95px' }} />
                </div>
                <p className="font-semibold text-xl mt-4">Mayor seguridad</p>
                <p className="mt-4">
                  Las transacciones deben ser aprovadas antes de que sean registradas. una vez esto,
                  esta se encripta y se une a la transaccion pasada. Esto , sumado al que la
                  información esta descentralizada, hace mas difícil para que un hacker comprometa
                  la informacion. Areas como finanzas , salud o gobierno pueden beneficiarse de la
                  tecnologia
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8 h-full">
              <div style={{display:'flex', alignItems:'center', justifyContent:'center', paddingBottom:'50px'}}>
                <img src={require('../Assets/eficiencia.svg')} style={{ height: '95px' }} />
                </div>
                <p className="font-semibold text-xl mt-4">Mas eficiencia</p>
                <p className="mt-4">
                  Cuando usas procesos tradicionales , sobretodo los que dependen del papel.
                  Cualquier acción consume mucho tiempo y es propensa al error humano. Ademas de
                  requerir de un tercero. Al automatizar con blockchain removes intermediarios y
                  ganas tiempo
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8 h-full">
              <div style={{display:'flex', alignItems:'center', justifyContent:'center', paddingBottom:'50px'}}>
                <img src={require('../Assets/accesibilidad.svg')} style={{ height: '95px' }} />
                </div>
                <p className="font-semibold text-xl mt-4">Reduci tus costos</p>
                <p className="mt-4">
                  Para todos las organizaciones , reducir costos es una prioridad. Con blockchain no
                  necesitas intermediarios que garantizen algo porque ya que no necesitar depositar
                  confianza en ellos , solo necesitas confiar en la blockchain. Ademas ahorras
                  tiempo en revisar documentación para completar una operación
                </p>
              </Card>
            </div>
          </div>
        </div>
      }
      secondarySlot={<img src={require('../Assets/terceraVertical.svg')} />}
    />
     <section style={{ scrollSnapAlign: 'start' }} id="stats" className="py-0 ">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-5xl font-semibold text-center">
            Nuestra suite de productos
          </h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8 h-full ">
              <div style={{display:'flex', alignItems:'center', justifyContent:'center', paddingBottom:'50px'}}>
                <img src={require('../Assets/api_polh.svg')} style={{ height: '95px' }} />
                </div>
                <p className="font-semibold text-center text-xl mt-4">Pölh api</p>
                <p className="mt-4">
                  Integra Pölh a tu negocio con nuestra API Ya sea una plataforma , sitio web o App.
                  Pölh es facilmente integrable gracias a nuestra API tan facil como:
                </p>
                <p className="mt-4 bg-gray-200 text-gray-600 text-center"> npm install polh </p>
                <h3 className="mt-2 text-center">o hace una request a nuesta api</h3>
                <p className="mt-4 bg-gray-200 text-gray-600 text-center"> https://api.polh.io/</p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8 h-full ">
              <div style={{display:'flex', alignItems:'center', justifyContent:'center', paddingBottom:'50px'}}>
                <img src={require('../Assets/visualizer.svg')} style={{ height: '95px' }} />
                </div>
                <p className="font-semibold text-xl text-center mt-4">Visualizer</p>
                <p className="mt-4">
                  Visualiza documentos atravez de nuestra web. Accedé a ellos mediante su HASH y
                  tener acceso al mismo y a sus archivos adjuntos.
                </p>
                <p className="mt-4 bg-gray-200 text-gray-600 text-center"></p>
                <a style={{ color: 'black' }} href="https://visualizer.polh.io/" target="_blank">
                  <Button className="colors.primary.darker mt-6">Ir a al Vizualizer</Button>
                </a>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8 h-full ">
                <img src={require('../Assets/manager.png')} style={{ height: '95px' }} />
                <p className="font-semibold text-xl text-center mt-4">Manager</p>
                <p className="mt-4">
                  Administrá y tené control de los documentos de tu organización con nosotros.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8 h-full ">
              <div style={{display:'flex', alignItems:'center', justifyContent:'center', paddingBottom:'50px'}}>
                <img src={require('../Assets/contract.svg')} style={{ height: '95px' }} />
                </div>
                <p className="font-semibold text-xl text-center mt-4">Recetas Digitales</p>
                <p className="mt-4">
                  Tené todas tus recetas y tu credencial de obra social de manera digital
                </p>
                <a style={{ color: 'black' }} href="https://recetas.polh.io/" target="_blank">
                  <Button className="colors.primary.darker mt-6  items-center">Ir a Recetas</Button>
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section
        id="testimonials"
        className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center"
        style={{ scrollSnapAlign: 'start' }}
      >
        <h3 className="text-5xl font-semibold">¿Que estas esperando?</h3>

        <p className="mt-8">
          <Button size="xl">
            {' '}
            <a style={{ color: 'black' }} href="mailto: info@polh.io">
              Contactanos
            </a>
          </Button>
        </p>
      </section>
    </div>
  </Layout>
);
