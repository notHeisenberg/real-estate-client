import emailjs from '@emailjs/browser';

// Initialize EmailJS with your user ID
emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

export const subscribeToNewsletter = async (email) => {
  try {
    const templateParams = {
      to_email: email,
      reply_to: email,
      to_name: email.split('@')[0], // Using the part before @ as name
    };

    const response = await emailjs.send(
      "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
      "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
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
    const response = await emailjs.send(
      "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
      "YOUR_CONTACT_TEMPLATE_ID", // Replace with your EmailJS template ID for contact form
      formData
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