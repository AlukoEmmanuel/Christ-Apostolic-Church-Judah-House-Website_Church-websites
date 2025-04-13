'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { BsBank2 } from 'react-icons/bs';

export default function ContactPage() {
  const handleWhatsAppClick = () => {
    const defaultMessage = encodeURIComponent(
      "I need Guidiance."
    );
    window.open(`https://wa.me/2348079325881?text=${defaultMessage}`, '_blank');
  };

  return (
    <LazyMotion features={domAnimation}>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/contact-hero.jpg"
              alt="Contact Us"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="relative z-10 text-center text-white container-custom">
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-serif mb-6"
            >
              Contact Us
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl"
            >
              We'd Love to Hear from You
            </m.p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Methods */}
              <m.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-serif mb-8">Get in Touch</h2>
                
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2">Our Location</h3>
                    <p className="text-gray-600">
                      Bola Extension, Arulogun Road,<br />
                      Ojoo, Ibadan,<br />
                      Nigeria
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FaPhone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2">Phone</h3>
                    <p className="text-gray-600">
                      <Link href="tel:+2348079325881" className="hover:text-primary">+234 807 932 5881</Link><br />
                      <Link href="tel:+2348038547787" className="hover:text-primary">+234 803 854 7787</Link>
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FaWhatsapp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2">WhatsApp</h3>
                    <button
                      onClick={handleWhatsAppClick}
                      className="text-gray-600 hover:text-primary"
                    >
                      Click to send a message on WhatsApp
                    </button>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2">Email</h3>
                    <Link
                      href="mailto:aluko.olukayode@gmail.com"
                      className="text-gray-600 hover:text-primary"
                    >
                      aluko.olukayode@gmail.com
                    </Link>
                  </div>
                </div>

                {/* Donation Details */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BsBank2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2">Donation Account</h3>
                    <p className="text-gray-600">
                      Account Number: 8038547787<br />
                      Bank: [Bank Name]<br />
                      Account Name: Christ Apostolic Church Judah House
                    </p>
                  </div>
                </div>
              </m.div>

              {/* Contact Form */}
              <m.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h2 className="text-3xl font-serif mb-8">Send us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </m.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-neutral-light">
          <div className="container-custom">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-serif mb-4">Visit Us</h2>
              <p className="text-gray-600">Join us for our services and experience the presence of God</p>
            </m.div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.2751296772747!2d3.9161699!3d7.4447799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed0a0c083e0f%3A0x5f1d8e4d9f2c4c0a!2sArulogun%20Rd%2C%20Ojoo%2C%20Ibadan%2C%20Nigeria!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Service Times */}
        <section className="py-16">
          <div className="container-custom">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-serif mb-8">Service Times</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-serif mb-2">Sunday Service</h3>
                  <p className="text-gray-600">10:00 AM</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-serif mb-2">Bible Study</h3>
                  <p className="text-gray-600">Wednesday 6:30 PM</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-serif mb-2">Prayer Meeting</h3>
                  <p className="text-gray-600">Friday 7:00 PM</p>
                </div>
              </div>
            </m.div>
          </div>
        </section>
      </main>
    </LazyMotion>
  );
} 