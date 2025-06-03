import React, { useState, useCallback, memo } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Memoized card component for better performance
const ContactCard = memo(({ icon, title, subtitle, bgColor = "bg-white", textColor = "text-gray-700" }) => (
  <div className={`${bgColor} ${textColor} p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-200`}>
    <div className="mb-4 flex justify-center">
      {icon}
    </div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-sm opacity-80">{subtitle}</p>
  </div>
));

ContactCard.displayName = 'ContactCard';

// Google Map component (placeholder - replace with actual Google Maps implementation)
const GoogleMapComponent = memo(() => (
  <div className="w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] rounded-2xl overflow-hidden">
    <iframe
      title="Hotel Sunshine Pauni Location"
      width="100%"
      height="100%"
      loading="lazy"
      allowFullScreen
      className="border-0 w-full h-full"
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.539942509845!2d79.629993!3d20.79402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b58bdaf69a94d%3A0xa3433fd1623ff144!2sHotel%20Sunshine%20Pauni!5e0!3m2!1sen!2sin!4v1717056000000!5m2!1sen!2sin"
    ></iframe>
  </div>
));


GoogleMapComponent.displayName = 'GoogleMapComponent';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Optimized form handler
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add your form submission logic here
      console.log('Form submitted:', formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  return (
    <>
      <Head>
        <title>Contact Travella - Get in Touch with Our Travel Experts</title>
        <meta name="description" content="Contact Travella for all your travel needs. Located in Bali, Indonesia. Call (123) 456-789 or email support@travella.com. Open Mon-Sat 9:00-6:00." />
        <meta name="keywords" content="contact travella, travel agency bali, travel support, booking assistance" />
        <meta property="og:title" content="Contact Travella - Travel Agency" />
        <meta property="og:description" content="Get in touch with Travella for personalized travel planning and support." />
        <link rel="preconnect" href="https://maps.googleapis.com" />
      </Head>

      <section className="py-16 px-4 bg-gray-50" role="main" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="relative z-10 text-center mb-12">
            <h1 id="contact-heading" className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch With Travella
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>


          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <ContactCard
              icon={
                <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              }
              title="Our Location"
              subtitle="Jl. Raya Ubud No.70 Bali"
              bgColor="bg-slate-800"
              textColor="text-white"
            />

            <ContactCard
              icon={
                <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              }
              title="Phone Number"
              subtitle="(123) 456-789"
            />

            <ContactCard
              icon={
                <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              }
              title="Email Us"
              subtitle="support@travella.com"
              bgColor="bg-slate-800"
              textColor="text-white"
            />

            <ContactCard
              icon={
                <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zM12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
              }
              title="Working Hours"
              subtitle="Mon - Sat: 9:00 - 6:00"
            />
          </div>

          {/* Map and Contact Form Container */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Google Map */}
              <div className="relative">
                <GoogleMapComponent />
              </div>

              {/* Contact Form */}
              <div className="p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <label htmlFor="name" className="sr-only">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
                      aria-describedby="name-error"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
                      aria-describedby="email-error"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="sr-only">Your Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Your Subject"
                      required
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      required
                      rows={6}
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200 resize-vertical"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:ring-4 focus:ring-orange-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    aria-describedby="submit-status"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      'SEND MESSAGE'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;