import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {    
    return (
        <>

            <TransitionPage />
            <div className="flex flex-col mt-32 items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="px-4 ">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
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