export const handleWhatsAppOpen = () => {
  const phoneNumber = "07544910166";
  const message = "Hello! I would like to get in touch.";
  const formattedPhone = phoneNumber.startsWith("0")
    ? "+44" + phoneNumber.slice(1)
    : phoneNumber;

  const whatsappUrl = `https://wa.me/${formattedPhone}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

  window.open(whatsappUrl, "_blank");
};
