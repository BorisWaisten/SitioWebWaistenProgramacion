"use client"

import { useEffect, useState } from "react";

import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

interface CoverParticlesProps {
    enabled?: boolean;
}

export const CoverParticles = ({ enabled = false }: CoverParticlesProps) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (enabled) {
            initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            }).then(() => {
                setInit(true);
            });
        }
    }, [enabled]);

    // Solo renderizar si está habilitado y inicializado
    if (!enabled || !init) {
        return null;
    }

    return (
        <div className="absolute inset-0 pointer-events-none">
            <Particles
                id="tsparticles"
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false, // Deshabilitado para evitar interferencias
                            },
                            onHover: {
                                enable: false, // Deshabilitado para evitar interferencias
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.3, // Reducida la opacidad
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 0.5, // Velocidad reducida
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 50, // Menos partículas
                        },
                        opacity: {
                            value: 0.3, // Opacidad reducida
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 3 }, // Tamaño reducido
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};