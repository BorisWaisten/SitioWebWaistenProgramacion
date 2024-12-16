import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full h-screen bg-darkBg/60 flex items-center justify-center"> {/* Centra todo vertical y horizontalmente */}
            <div className="flex flex-col items-center text-center px-6 md:px-12"> {/* Contenedor interno centrado */}
                <h1 className="mb-5 text-3xl leading-tight md:text-4xl md:mb-10">
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

                <p className="mb-8 text-lg md:text-xl max-w-2xl">
                    Como desarrollador fullstack me dedico a combinar diseño y funcionalidad para crear experiencias digitales impactantes y accesibles.
                </p>

                <div className="flex flex-wrap justify-center gap-5">
                    <a href="/portfolio" className="px-5 py-3 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                        Ver proyectos
                    </a>
                    <a href="/contact"
                        className="px-5 py-3 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                        Contacta conmigo
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
