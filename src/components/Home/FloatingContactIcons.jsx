'use client';

import Image from 'next/image';
import { whatsappNumber, phoneNumber } from '../data/constant';

const FloatingContactIcons = () => {
  return (
    <div className="fixed right-5 bottom-5 flex flex-col gap-4 z-50">
      {/* Phone */}
      <a
        href={`tel:${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full flex items-center justify-center 
        bg-gradient-to-br from-[#B8860B] to-[#DAA520] shadow-lg transform hover:scale-110"
        title="Call Us"
      >
        <Image
          src="/phone_icon.png"
          alt="Phone Icon"
          width={40}
          height={40}
          className=""
        />
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full flex items-center 
        justify-center bg-gradient-to-br
        from-[#B8860B] to-[#DAA520] 
        shadow-lg transform hover:scale-110"
        title="Chat on WhatsApp"
      >
        <Image
          src="/whatsapp-png-icon.png"
          alt="WhatsApp Icon"
          width={40}
          height={40}
          className=""
        />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/hotel_sunshine_pauni/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full flex 
        items-center justify-center 
        bg-gradient-to-br from-[#B8860B] 
        to-[#DAA520] shadow-lg transform hover:scale-110"
        title="Instagram"
      >
        <Image
          src="/Instagram_icon.png"
          alt="Instagram Icon"
          width={40}
          height={40}
          className="rounded-[50%]"
        />
      </a>
    </div>
  );
};

export default FloatingContactIcons;
