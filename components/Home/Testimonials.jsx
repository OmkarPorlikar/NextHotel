import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMemo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Chhatrapati",
    initials: "CH",
    rating: 5,
    text: "Newly renewed building, on the highway at the entrance of Tumkur. Very well built and good basic amenities and cleanly maintained.",
  },
  {
    name: "Shashi Kumar M",
    initials: "SM",
    rating: 5,
    text: "Great hotel, nice ambience small but beautiful lobby area. Staff warmth and attentiveness was remarkable.",
  },
  {
    name: "Nazir",
    initials: "NM",
    rating: 5,
    text: "Best hotel in town. Clean and maintained. Good for marriage functions too.",
  },
  {
    name: "Nayan Kanthekar",
    initials: "NK",
    rating: 5,
    text: "It is a wonderful hotel. I had an amazing experience here. The ambience is soothing and nice.",
  },
  {
    name: "Gauri Bhatiya",
    initials: "GB",
    rating: 5,
    text: "The location is close to Tumkur city by around 2kms. Rooms and corridors are well-maintained.",
  },
];

const Testimonials = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // Memoize slides to avoid re-renders
  const slides = useMemo(() => (
    testimonials.map((t, i) => (
      <div key={i} className="px-4">
        <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col justify-between">
          <div className="text-yellow-500 mb-2">
            {Array.from({ length: t.rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <p className="text-gray-700 mb-4">"{t.text}"</p>
          <div className="flex items-center gap-3 mt-auto">
            <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-800 flex items-center justify-center font-bold">
              {t.initials}
            </div>
            <p className="font-semibold">{t.name}</p>
          </div>
        </div>
      </div>
    ))
  ), []);

  return (
    <>
      <style jsx>{`
        /* Custom styles for carousel navigation buttons */
        .slick-prev,
        .slick-next {
          z-index: 10;
          width: 40px !important;
          height: 40px !important;
          background: rgba(0, 0, 0, 0.6) !important;
          border-radius: 50% !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
        }
        
        .slick-prev {
          left: 15px !important;
        }
        
        .slick-next {
          right: 15px !important;
        }
        
        .slick-prev:before,
        .slick-next:before {
          font-size: 20px !important;
          color: #fbbf24 !important;
          opacity: 1 !important;
          line-height: 1 !important;
        }
        
        .slick-prev:hover,
        .slick-next:hover {
          background: rgba(0, 0, 0, 0.8) !important;
        }
        
        .slick-prev:hover:before,
        .slick-next:hover:before {
          color: #ffffff !important;
        }
        
        /* Mobile specific styles */
        @media (max-width: 640px) {
          .slick-prev,
          .slick-next {
            width: 35px !important;
            height: 35px !important;
            background: rgba(0, 0, 0, 0.7) !important;
          }
          
          .slick-prev {
            left: 10px !important;
          }
          
          .slick-next {
            right: 10px !important;
          }
          
          .slick-prev:before,
          .slick-next:before {
            font-size: 18px !important;
          }
        }
        
        /* Extra small mobile screens */
        @media (max-width: 480px) {
          .slick-prev,
          .slick-next {
            width: 32px !important;
            height: 32px !important;
          }
          
          .slick-prev {
            left: 8px !important;
          }
          
          .slick-next {
            right: 8px !important;
          }
          
          .slick-prev:before,
          .slick-next:before {
            font-size: 16px !important;
          }
        }
        
        /* Dots styling for better mobile visibility */
        .slick-dots {
          bottom: -50px !important;
        }
        
        .slick-dots li button:before {
          color: #fbbf24 !important;
          font-size: 12px !important;
          opacity: 0.5 !important;
        }
        
        .slick-dots li.slick-active button:before {
          opacity: 1 !important;
          color: #fbbf24 !important;
        }
        
        @media (max-width: 640px) {
          .slick-dots {
            bottom: -40px !important;
          }
          
          .slick-dots li button:before {
            font-size: 10px !important;
          }
        }
      `}</style>
      <section className="bg-[#0f1b2b] py-16 pb-20" id="testimonials" ref={ref}>
        <div className="text-center text-white mb-8">
          <p className="text-yellow-400 tracking-wide uppercase">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
        </div>

        {inView && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto px-4"
          >
            <div className="relative">
              <Slider {...settings}>
                {slides}
              </Slider>
            </div>
          </motion.div>
        )}
      </section>
    </>
  );
};

export default Testimonials;