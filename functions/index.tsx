export const handleWhatsAppOpen = () => {
  const phoneNumber = "01582948644";
  const message = "Hello! I would like to get in touch.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank");
};
