export function redirectToWhatsApp(product, mobileNumber) {
    console.log("Clicked");
    
  const message = `Product Details:
Name: ${product.name}
Price: ${product.price}
Quantity: ${product.quantity}
Description: ${product.description || 'N/A'}`;

  const encodedMessage = encodeURIComponent(message);
  const cleanedNumber = mobileNumber.replace(/\D/g, '');

  const whatsappUrl = `https://wa.me/${cleanedNumber}?text=${encodedMessage}`;

  // Redirect to WhatsApp (only in the browser)
  if (typeof window !== 'undefined') {
    window.location.href = whatsappUrl;
  }
}
