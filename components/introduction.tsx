import { TypeAnimation } from 'react-type-animation';
import './introduction.css';

const Introduction = () => {
  return (
    <section className="z-20 w-full min-h-screen bg-darkBg/60 flex items-center justify-center px-4 py-12">
      <div className="max-w-screen-lg text-center flex flex-col items-center">
        <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl leading-tight font-semibold">
          Si puedes pensarlo, <br />
          <TypeAnimation
            sequence={[
              'puedes programarlo',
              1000,
              'puedes optimizarlo',
              1000,
              'puedes implementarlo',
              1000,
              'puedes desarrollarlo',
              1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-bold text-secondary"
          />
        </h1>

        <p className="mb-10 text-base sm:text-lg md:text-xl max-w-2xl text-white/90">
        Desarrollamos productos digitales centrados en el usuario, combinando diseño funcional y tecnología avanzada para generar soluciones de valor real.
        </p>


        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a
            href="/portfolio"
            className="btn-style4 px-6 py-3 text-base sm:text-md rounded-xl"
          >
            Ver proyectos
          </a>

          <a
            href="/contact"
            className="btn-style4 px-6 py-3 text-base sm:text-md rounded-xl"
          >
            Contacta conmigo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
