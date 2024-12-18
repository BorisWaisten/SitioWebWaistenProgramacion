import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {    
    return (
        <>

            <TransitionPage />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px] px-4 mt-32 sm:px-0 sm:mt-0 ">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
                    <p className="mb-3 pt-3  sm:pt-0 sm:text-xl text-gray-300">
                        Ofrezco servicios de diseño y desarrollo web, creando sitios informativos para empresas, aplicaciones web y móviles, y soluciones personalizadas como sistemas de gestión de ventas. 
                        Mi enfoque combina diseño atractivo e interfaces intuitivas con tecnologías modernas para garantizar experiencias funcionales, responsivas y adaptadas a las necesidades de mis clientes.
                    </p>
                    <div className="flex justify-center">
                        <a className=" px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65" href="/contact">Contacta conmigo</a>
                    </div>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;