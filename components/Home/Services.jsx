// components/home/Services.jsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const servicesList = [
    {
      icon: "/images/icons/hotel-room.svg",
      title: "Luxury Rooms",
      description: "Spacious AC rooms with scenic views and modern amenities.",
    },
    {
      icon: "/images/icons/dining.svg",
      title: "Riverside Dining",
      description: "Enjoy local & continental meals near Indira Sagar.",
    },
    {
      icon: "/images/icons/boat.svg",
      title: "Boating & Kayaking",
      description: "Guided boating experiences at Gose Dam.",
    },
    {
      icon: "/images/icons/temple.svg",
      title: "Temple Tours",
      description: "Visit ancient temples around Pauni with our guides.",
    },
    {
      icon: "/images/icons/spa.svg",
      title: "Ayurvedic Spa",
      description: "Relax with natural therapies and dam views.",
    },
    {
      icon: "/images/icons/event.svg",
      title: "Event Hosting",
      description: "Ideal for weddings & corporate events with stunning backdrops.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section ref={ref} className="py-16 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-gray-800"
          >
            What We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-gray-500 mt-2 text-sm md:text-base"
          >
            Amenities & experiences for a memorable stay in Pauni
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start space-x-4"
            >
              <div className="w-12 h-12 flex-shrink-0 bg-amber-100 rounded-full flex items-center justify-center">
                <Image src={service.icon} alt={service.title} width={24} height={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
