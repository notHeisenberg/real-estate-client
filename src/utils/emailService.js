import emailjs from '@emailjs/browser';

// Initialize EmailJS with your user ID
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export const subscribeToNewsletter = async (email) => {
  try {
    const templateParams = {
      to_email: email,
      reply_to: email,
      to_name: email.split('@')[0],
    };

    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_NEWSLETTER,
      templateParams
    );

    if (response.status === 200) {
      return {
        success: true,
        message: "Successfully subscribed to newsletter!",
      };
    } else {
      throw new Error("Failed to subscribe");
    }
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return {
      success: false,
      message: "Failed to subscribe to newsletter. Please try again later.",
    };
  }
};

export const sendContactForm = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      subject: formData.subject || 'Contact Form Submission',
      message: formData.message,
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT,
      templateParams
    );

    if (response.status === 200) {
      return {
        success: true,
        message: "Message sent successfully!",
      };
    } else {
      throw new Error("Failed to send message");
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}; 