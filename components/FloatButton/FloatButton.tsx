import React from "react";
import { PhoneBtnIcon } from "../../assets/svg";
import whatsapp from "../../assets/svg/whatsapp.svg";
import Image from "next/image";

export const FloatButton = () => {
  const handlePhoneCall = () => {
    window.location.href = "tel:01582948644";
  };

  const handleWhatsAppOpen = () => {
    const phoneNumber = "01582948644";
    const message = "Hello! I would like to get in touch.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed z-20 bottom-14 right-12 flex flex-col gap-3 float-button">
      <button
        className="phone-button p-2 border-0 rounded-full w-12 h-12 bg-white hover:bg-gray-50 transition-colors shadow-lg"
        onClick={handlePhoneCall}
        title="Call us"
      >
        <PhoneBtnIcon />
      </button>
      <button
        className=" whatsapp-button p-2 border-0 rounded-full w-12 h-12 bg-white hover:bg-gray-50 transition-colors shadow-lg"
        onClick={handleWhatsAppOpen}
        title="Chat on WhatsApp"
      >
        <Image src={whatsapp} alt="whatsapp" />
      </button>
    </div>
  );
};
