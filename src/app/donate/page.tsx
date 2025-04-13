'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { FaMoneyBillWave, FaUniversity, FaCreditCard, FaWhatsapp, FaHandHoldingHeart, FaPray, FaChurch, FaUsers } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { usePaystackPayment } from 'react-paystack';

interface DonationReason {
  icon: IconType;
  title: string;
  description: string;
}

export default function DonatePage() {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [activeReason, setActiveReason] = useState(0);

  const predefinedAmounts = ['1000', '5000', '10000', '20000', '50000'];
  
  const donationReasons: DonationReason[] = [
    {
      icon: FaHandHoldingHeart,
      title: "Support Community Outreach",
      description: "Help us extend God's love to those in need through food banks, clothing drives, and community support programs."
    },
    {
      icon: FaPray,
      title: "Strengthen Youth Ministry",
      description: "Invest in the next generation through youth programs, Bible study materials, and mentorship initiatives."
    },
    {
      icon: FaChurch,
      title: "Improve Worship Experience",
      description: "Help enhance our facilities and equipment for a more meaningful worship experience for all."
    },
    {
      icon: FaUsers,
      title: "Enable Mission Work",
      description: "Support our missionaries in spreading the Gospel locally and internationally."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReason((prev) => (prev + 1) % donationReasons.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const initializePayment = usePaystackPayment({
    reference: `donate_${Math.floor(Math.random() * 1000000000)}`,
    email: email,
    amount: parseFloat(amount || '0') * 100,
    publicKey: 'YOUR_PAYSTACK_PUBLIC_KEY',
    firstname: name.split(' ')[0],
    lastname: name.split(' ')[1] || '',
    phone: phone,
  });

  const onSuccess = () => {
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 5000);
  };

  const onClose = () => {
    // Handle payment modal close
  };

  const handlePaystackPayment = () => {
    // @ts-ignore
    initializePayment(onSuccess, onClose);
  };

  const CurrentIcon = donationReasons[activeReason].icon;

  return (
    <LazyMotion features={domAnimation}>
      <main className="min-h-screen">
        {/* Floating Donation Button */}
        <m.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          className="fixed right-4 bottom-4 z-50"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary-dark transition-all transform hover:scale-105 flex items-center space-x-2"
          >
            <FaHandHoldingHeart className="text-xl" />
            <span>Donate Now</span>
          </button>
        </m.div>

        {/* Thank You Modal */}
        <AnimatePresence>
          {showThankYou && (
            <m.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
            >
              <div className="bg-white p-8 rounded-lg shadow-xl text-center">
                <FaHandHoldingHeart className="text-6xl text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-serif mb-4">Thank You for Your Generosity!</h3>
                <p className="text-gray-600">Your donation will help us make a difference.</p>
              </div>
            </m.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/donate-hero.jpg"
              alt="Donate"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-center text-white container-custom"
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Be a Blessing Today</h1>
            <p className="text-xl md:text-2xl mb-8">Your generosity can transform lives and communities</p>
            <m.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors"
              onClick={() => document.getElementById('donate-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Make a Difference Now
            </m.button>
          </m.div>
        </section>

        {/* Animated Reasons Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Why Your Support Matters</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <AnimatePresence mode="wait">
                  <m.div
                    key={activeReason}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-white p-6 rounded-lg shadow-lg"
                  >
                    <CurrentIcon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-serif mb-4">{donationReasons[activeReason].title}</h3>
                    <p className="text-gray-600">{donationReasons[activeReason].description}</p>
                  </m.div>
                </AnimatePresence>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {donationReasons.map((reason, index) => {
                  const Icon = reason.icon;
                  return (
                    <m.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 rounded-lg text-center transition-all ${
                        index === activeReason
                          ? 'bg-primary text-white'
                          : 'bg-white hover:bg-primary/5'
                      }`}
                      onClick={() => setActiveReason(index)}
                    >
                      <Icon className="w-8 h-8 mx-auto mb-2" />
                      <div className="text-sm font-medium">{reason.title}</div>
                    </m.button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Donation Options */}
        <section id="donate-section" className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center"
              >
                <h2 className="text-3xl md:text-4xl font-serif mb-4">Choose Your Way to Give</h2>
                <p className="text-gray-600">Every contribution, no matter the size, makes a difference</p>
              </m.div>

              <div className="grid md:grid-cols-2 gap-6">
                <m.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setPaymentMethod('online')}
                  className={`flex items-center p-6 rounded-lg border-2 transition-all ${
                    paymentMethod === 'online'
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <FaCreditCard className="w-8 h-8 text-primary mr-4" />
                  <div className="text-left">
                    <h3 className="text-xl font-serif mb-1">Online Payment</h3>
                    <p className="text-gray-600">Quick and secure card payment</p>
                  </div>
                </m.button>

                <m.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setPaymentMethod('bank')}
                  className={`flex items-center p-6 rounded-lg border-2 transition-all ${
                    paymentMethod === 'bank'
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <FaUniversity className="w-8 h-8 text-primary mr-4" />
                  <div className="text-left">
                    <h3 className="text-xl font-serif mb-1">Bank Transfer</h3>
                    <p className="text-gray-600">Direct bank transfer option</p>
                  </div>
                </m.button>
              </div>

              <AnimatePresence mode="wait">
                {paymentMethod === 'online' && (
                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-8 bg-white p-8 rounded-lg shadow-lg"
                  >
                    <h3 className="text-2xl font-serif mb-6">Make a Donation</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-700 mb-4">Select Amount (₦)</label>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                          {predefinedAmounts.map((preset) => (
                            <m.button
                              key={preset}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setAmount(preset)}
                              className={`py-2 px-4 rounded-lg border-2 transition-all ${
                                amount === preset
                                  ? 'border-primary bg-primary/5'
                                  : 'border-gray-200 hover:border-primary/50'
                              }`}
                            >
                              ₦{parseInt(preset).toLocaleString()}
                            </m.button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="amount" className="block text-gray-700 mb-2">
                          Custom Amount (₦)
                        </label>
                        <input
                          type="number"
                          id="amount"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                          placeholder="Enter amount"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
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
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
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
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                        />
                      </div>

                      <m.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handlePaystackPayment}
                        disabled={!amount || !email || !name}
                        className="w-full bg-primary text-white py-4 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                      >
                        <FaHandHoldingHeart className="text-xl" />
                        <span>Donate ₦{parseInt(amount || '0').toLocaleString()}</span>
                      </m.button>
                    </div>
                  </m.div>
                )}

                {paymentMethod === 'bank' && (
                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-8 bg-white p-8 rounded-lg shadow-lg"
                  >
                    <h3 className="text-2xl font-serif mb-6">Bank Transfer Details</h3>
                    <div className="space-y-6">
                      <m.div
                        whileHover={{ scale: 1.02 }}
                        className="p-6 bg-neutral-50 rounded-lg border-2 border-primary/20"
                      >
                        <p className="font-medium mb-4">Bank: [Bank Name]</p>
                        <p className="font-medium mb-4">Account Number: 8038547787</p>
                        <p className="font-medium">Account Name: Christ Apostolic Church Judah House</p>
                      </m.div>
                      <div className="text-gray-600">
                        <p className="mb-4">
                          Please include "Donation" and your name in the transfer description for proper
                          record-keeping.
                        </p>
                        <Link
                          href="https://wa.me/2348079325881"
                          target="_blank"
                          className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors"
                        >
                          <FaWhatsapp className="text-2xl" />
                          <span>Send transfer confirmation via WhatsApp</span>
                        </Link>
                      </div>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container-custom">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-serif mb-8">Your Impact</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <m.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <FaMoneyBillWave className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-serif mb-4">Community Outreach</h3>
                  <p className="text-gray-600">
                    Support our various community programs and help us reach more people with God's love.
                  </p>
                </m.div>
                <m.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <FaUniversity className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-serif mb-4">Church Development</h3>
                  <p className="text-gray-600">
                    Help us maintain and improve our facilities to better serve our growing congregation.
                  </p>
                </m.div>
                <m.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <FaCreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-serif mb-4">Mission Support</h3>
                  <p className="text-gray-600">
                    Enable us to support missionaries and spread the gospel to unreached areas.
                  </p>
                </m.div>
              </div>
            </m.div>
          </div>
        </section>
      </main>
    </LazyMotion>
  );
} 