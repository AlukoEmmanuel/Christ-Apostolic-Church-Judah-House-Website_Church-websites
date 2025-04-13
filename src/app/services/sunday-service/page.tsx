'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const schedule = [
  {
    time: "9:30 AM",
    activity: "Pre-Service Prayer",
    description: "Join us for a time of prayer before the main service"
  },
  {
    time: "10:00 AM",
    activity: "Praise & Worship",
    description: "Experience powerful worship led by our music ministry"
  },
  {
    time: "10:30 AM",
    activity: "Word Ministry",
    description: "Dynamic preaching and teaching from God's Word"
  },
  {
    time: "11:45 AM",
    activity: "Ministry Time",
    description: "Prayer, altar call, and personal ministry"
  },
  {
    time: "12:00 PM",
    activity: "Fellowship",
    description: "Connect with others over refreshments"
  }
];

export default function SundayServicePage() {
  return (
    <LazyMotion features={domAnimation}>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/services/sunday-service-hero.jpg"
              alt="Sunday Service"
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
              Sunday Service
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl"
            >
              Join Us Every Sunday at 10:00 AM
            </m.p>
          </div>
        </section>

        {/* Service Description */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <m.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif mb-6">Experience God's Presence</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our Sunday service is a time of powerful worship, anointed preaching,
                  and life-changing encounters with God. We believe in creating an
                  atmosphere where everyone can experience God's presence and love.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Whether you're a long-time believer or exploring faith for the first
                  time, you'll find a welcoming community that's passionate about
                  helping you grow in your relationship with God.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Plan Your Visit
                </Link>
              </m.div>
              <m.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/services/worship.jpg"
                  alt="Worship Service"
                  fill
                  className="object-cover"
                />
              </m.div>
            </div>
          </div>
        </section>

        {/* Service Schedule */}
        <section className="py-16 bg-neutral-light">
          <div className="container-custom">
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-center mb-12"
            >
              Service Schedule
            </m.h2>
            <div className="max-w-3xl mx-auto">
              {schedule.map((item, index) => (
                <m.div
                  key={item.time}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6 mb-4"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-24 font-semibold text-primary">
                      {item.time}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif mb-2">{item.activity}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16">
          <div className="container-custom">
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-center mb-12"
            >
              What to Expect
            </m.h2>
            <div className="grid md:grid-cols-3 gap-8">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-serif mb-4">Worship</h3>
                  <p className="text-gray-600">
                    Experience vibrant praise and worship that combines contemporary
                    and traditional styles, creating an atmosphere of God's presence.
                  </p>
                </div>
              </m.div>

              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-serif mb-4">Word</h3>
                  <p className="text-gray-600">
                    Receive practical, biblical teaching that will encourage your faith
                    and equip you for daily Christian living.
                  </p>
                </div>
              </m.div>

              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-serif mb-4">Fellowship</h3>
                  <p className="text-gray-600">
                    Connect with a warm and welcoming community of believers who are
                    passionate about growing together in faith.
                  </p>
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-white">
          <div className="container-custom text-center">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Join Us This Sunday</h2>
              <p className="text-lg mb-8">
                We look forward to welcoming you and your family to our Sunday service.
                Come experience the love of God and the warmth of our church family.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Directions
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </m.div>
          </div>
        </section>
      </main>
    </LazyMotion>
  );
} 