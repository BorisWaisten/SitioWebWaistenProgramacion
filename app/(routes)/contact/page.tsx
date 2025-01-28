"use client";
import { useState } from "react";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";

const ContactPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleMailClick = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <ContainerPage>
            <TransitionPage />
            <CircleImage />
            <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
                <h1 className="text-2xl leading-tight md:text-4xl">
                    Ponte en <span className="font-bold text-secondary">contacto conmigo</span>
                </h1>
                <div className="grid grid-cols-3 gap-3">
                    <button
                        onClick={handleMailClick}
                        className="text-lg text-secondary hover:underline"
                    >
                        <Mail size={30} strokeWidth={1} />
                    </button>
                    <a
                        href="https://instagram.com/waistenprogramacion"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-secondary hover:underline"
                    >
                        <Instagram size={30} strokeWidth={1} />
                    </a>
                    <a
                        href="https://wa.me/15575620"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-secondary hover:underline"
                    >
                        <MessageCircle size={30} strokeWidth={1} />
                    </a>
                </div>
            </div>

            {/* Modal para mostrar el correo */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-4">
                        <p className="text-lg text-secondary">boriswaisten@gmail.com</p>
                        <button
                            onClick={closeModal}
                            className="px-4 py-2 mt-4 text-white bg-secondary rounded-md hover:bg-secondary/80"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </ContainerPage>
    );
};

export default ContactPage;
