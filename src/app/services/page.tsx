'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const services = [
  {
    id: 'sunday-service',
    title: 'Sunday Service',
    time: '10:00 AM',
    description: 'Our main worship service featuring powerful praise and worship, prayer, and dynamic preaching of God\'s Word.',
    image: '/images/services/sunday-service.jpg',
    features: [
      'Contemporary and Traditional Worship',
      'Biblical Teaching',
      'Children\'s Church Available',
      'Fellowship After Service'
    ]
  },
  {
    id: 'bible-study',
    title: 'Bible Study',
    time: 'Wednesday 6:30 PM',
    description: 'Mid-week Bible study focusing on in-depth teaching and discussion of God\'s Word.',
    image: '/images/services/bible-study.jpg',
    features: [
      'Verse-by-Verse Teaching',
      'Interactive Discussion',
      'Prayer Time',
      'Small Group Format'
    ]
  },
  {
    id: 'prayer-meeting',
    title: 'Prayer Meeting',
    time: 'Friday 7:00 PM',
    description: 'Corporate prayer gathering for spiritual warfare, intercession, and seeking God\'s presence.',
    image: '/images/services/prayer-meeting.jpg',
    features: [
      'Intercessory Prayer',
      'Worship and Praise',
      'Testimonies',
      'Spiritual Warfare'
    ]
  },
  {
    id: 'youth-service',
    title: 'Youth Service',
    time: 'Sunday 4:00 PM',
    description: 'Dynamic service designed specifically for young people to grow in their faith.',
    image: '/images/services/youth-service.jpg',
    features: [
      'Contemporary Worship',
      'Relevant Messages',
      'Group Activities',
      'Mentorship'
    ]
  }
];

export default function ServicesPage() {
  return (
    <LazyMotion features={domAnimation}>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/services-hero.jpg"
              alt="Church Services"
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
              Our Services
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl"
            >
              Join Us in Worship and Fellowship
            </m.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <m.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative h-64">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-2xl font-serif mb-2">{service.title}</h2>
                        <p className="text-primary font-semibold">{service.time}</p>
                      </div>
                      <Link
                        href={`/services/${service.id}`}
                        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 text-primary mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
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
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Join Us This Week</h2>
              <p className="text-lg mb-8">
                Experience the presence of God and the warmth of our church family.
                We look forward to welcoming you!
              </p>
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
              >
                Plan Your Visit
              </Link>
            </m.div>
          </div>
        </section>
      </main>
    </LazyMotion>
  );
} 