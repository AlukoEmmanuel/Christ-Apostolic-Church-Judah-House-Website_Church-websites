'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const schedule = [
  {
    time: "6:45 PM",
    activity: "Pre-Service Prayer",
    description: "Personal preparation and quiet time"
  },
  {
    time: "7:00 PM",
    activity: "Worship & Praise",
    description: "Enter God's presence through worship"
  },
  {
    time: "7:20 PM",
    activity: "Prayer Focus",
    description: "Corporate prayer for specific needs and topics"
  },
  {
    time: "8:00 PM",
    activity: "Testimonies",
    description: "Sharing of answered prayers and testimonies"
  },
  {
    time: "8:30 PM",
    activity: "Closing Prayer",
    description: "Final declarations and benediction"
  }
];

const prayerFocus = [
  {
    title: "Church & Ministry",
    description: "Prayer for church growth, leadership, and ministries"
  },
  {
    title: "Community Outreach",
    description: "Prayer for local community and evangelism efforts"
  },
  {
    title: "Healing & Deliverance",
    description: "Prayer for physical healing and spiritual breakthrough"
  },
  {
    title: "Nations & Missions",
    description: "Prayer for global missions and world evangelization"
  }
];

export default function PrayerMeetingPage() {
  return (
    <LazyMotion features={domAnimation}>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/services/prayer-meeting-hero.jpg"
              alt="Prayer Meeting"
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
              Prayer Meeting
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl"
            >
              Every Friday at 7:00 PM
            </m.p>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <m.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif mb-6">Power of Corporate Prayer</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Join us for a powerful time of corporate prayer where we come together
                  to seek God's presence, intercede for one another, and witness His
                  miraculous power through prayer and supplication.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our prayer meetings are focused on creating an atmosphere of faith
                  and expectation, where we believe God for breakthroughs, healing,
                  and spiritual growth.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Join Us in Prayer
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
                  src="/images/services/prayer.jpg"
                  alt="Prayer Group"
                  fill
                  className="object-cover"
                />
              </m.div>
            </div>
          </div>
        </section>

        {/* Prayer Schedule */}
        <section className="py-16 bg-neutral-light">
          <div className="container-custom">
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-center mb-12"
            >
              Meeting Schedule
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

        {/* Prayer Focus */}
        <section className="py-16">
          <div className="container-custom">
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-center mb-12"
            >
              Prayer Focus Areas
            </m.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {prayerFocus.map((focus, index) => (
                <m.div
                  key={focus.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-serif mb-4">{focus.title}</h3>
                    <p className="text-gray-600">{focus.description}</p>
                  </div>
                </m.div>
              ))}
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
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Join Our Prayer Movement</h2>
              <p className="text-lg mb-8">
                Experience the power of corporate prayer and be part of a community
                that believes in the transformative power of prayer.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Submit Prayer Request
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