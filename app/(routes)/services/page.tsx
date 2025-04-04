"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { serviceData } from "@/data";
import { useState } from "react";
import Image from "next/image";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="max-w-5xl mx-auto mt-32 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold text-center mb-10"
      >
        Mis <span className="text-secondary">Servicios</span>
      </motion.h1>

      <Accordion.Root type="single" collapsible className="space-y-6">
        {serviceData.map((service, index) => (
          <Accordion.Item key={index} value={service.title} className="border-b">
            <Accordion.Header>
              <Accordion.Trigger
                onClick={() => setSelectedService(service.title)}
                className="w-full flex justify-between items-center p-4 text-xl font-semibold bg-gray-100 hover:bg-gray-200 transition rounded-md"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{service.icon}</span>
                  {service.title}
                </div>
                <span>{selectedService === service.title ? "−" : "+"}</span>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="p-4 bg-white shadow-md rounded-md">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-600">{service.description}</p>
                {service.image && (
                  <div className="mt-4">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={500}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                )}
              </motion.div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};

export default ServicesPage;
