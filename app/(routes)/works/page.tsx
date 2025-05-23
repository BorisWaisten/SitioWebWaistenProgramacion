

import { dataPortfolio } from "@/data";

import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";
import { MotionTransition } from "@/components/transition-component";


const PortfolioPage = () => {

    return (
        <ContainerPage>
            <MotionTransition  position="bottom" >
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Últimos <span className="font-bold text-secondary">trabajos realizados</span></h1>

                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
            </MotionTransition>
        </ContainerPage>
    );
}

export default PortfolioPage;