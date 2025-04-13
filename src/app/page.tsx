'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const upcomingEvents = [
  {
    id: 1,
    title: "Easter Celebration Service",
    date: "March 31, 2024",
    time: "10:00 AM",
    image: "/images/events/easter.jpg"
  },
  {
    id: 2,
    title: "Youth Conference",
    date: "April 5-7, 2024",
    time: "6:00 PM",
    image: "/images/events/youth.jpg"
  },
  {
    id: 3,
    title: "Prayer & Fasting Week",
    date: "April 15-21, 2024",
    time: "Various Times",
    image: "/images/events/prayer.jpg"
  }
];

const features = [
  {
    title: "Dynamic Worship",
    description: "Experience powerful praise and worship that lifts your spirit.",
    image: "/images/features/worship.jpg"
  },
  {
    title: "Biblical Teaching",
    description: "Grow through sound biblical teaching and practical application.",
    image: "/images/features/teaching.jpg"
  },
  {
    title: "Community",
    description: "Find belonging in a loving and supportive church family.",
    image: "/images/features/community.jpg"
  },
  {
    title: "Youth Ministry",
    description: "Empowering the next generation through Christ-centered programs.",
    image: "/images/features/youth.jpg"
  }
];

export default function HomePage() {
  return (
    <LazyMotion features={domAnimation}>
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero.jpg"
              alt="Christ Apostolic Church Judah House"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 container-custom text-white text-center">
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6"
            >
              Welcome to CAJAH
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8"
            >
              A Place of Worship, Fellowship, and Spiritual Growth
            </m.p>
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/about"
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Visit Us
              </Link>
            </m.div>
          </div>
        </section>

        {/* Service Times */}
        <section className="py-16 bg-neutral-light">
          <div className="container-custom">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-8">Join Us in Worship</h2>
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

        {/* Features */}
        <section className="py-16">
          <div className="container-custom">
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif text-center mb-12"
            >
              Experience God's Presence
            </m.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <m.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-serif mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-neutral-light">
          <div className="container-custom">
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif text-center mb-12"
            >
              Upcoming Events
            </m.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <m.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif mb-2">{event.title}</h3>
                    <div className="text-gray-600">
                      <p>{event.date}</p>
                      <p>{event.time}</p>
                    </div>
                  </div>
                </m.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/events"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors"
              >
                View All Events
              </Link>
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
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Join Our Community</h2>
              <p className="text-lg mb-8">
                Experience the love of God and the warmth of genuine fellowship. We invite you
                to be part of our church family.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Visit Us This Sunday
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </m.div>
          </div>
        </section>
      </main>
    </LazyMotion>
  );
} 