'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const team = [
  {
    name: "Pastor Femi Aluko",
    role: "Senior Pastor",
    image: "/images/pastor.jpg",
    description: "Leading our congregation with wisdom and grace for over 15 years."
  },
  {
    name: "Pastor Emmanuel",
    role: "Associate Pastor",
    image: "/images/associate-pastor.jpg",
    description: "Dedicated to youth ministry and community outreach."
  },
  {
    name: "Deacon Grace",
    role: "Head Deacon",
    image: "/images/deacon.jpg",
    description: "Serving the church community with dedication and compassion."
  }
];

export default function AboutPage() {
  return (
    <LazyMotion features={domAnimation}>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/about-hero.jpg"
              alt="About Us"
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
              About Our Church
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl"
            >
              A Community of Faith, Love, and Service
            </m.p>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-16 bg-neutral-light">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <m.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-serif mb-6">Welcome to CAJAH</h2>
                <p className="text-lg mb-6">
                  Christ Apostolic Church Judah House (CAJAH) is a vibrant, Spirit-filled
                  community of believers dedicated to spreading the Gospel of Jesus Christ.
                  Founded on biblical principles and apostolic doctrine, we strive to create
                  an environment where people can encounter God's presence and experience
                  spiritual transformation.
                </p>
                <p className="text-lg mb-6">
                  Our church is committed to worship, discipleship, fellowship, and outreach.
                  We believe in the power of prayer, the authority of God's Word, and the
                  manifestation of the Holy Spirit in the lives of believers.
                </p>
              </m.div>
              <m.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/welcome.jpg"
                  alt="Church Welcome"
                  fill
                  className="object-cover"
                />
              </m.div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <m.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif mb-6">Our History</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Christ Apostolic Church Judah House was established with a vision
                  to create a welcoming spiritual home where people can experience
                  God's presence and grow in their faith journey.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Since our founding, we have been committed to serving our
                  community through various outreach programs, youth initiatives,
                  and spiritual development activities.
                </p>
              </m.div>
              <m.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/history.jpg"
                  alt="Church History"
                  fill
                  className="object-cover"
                />
              </m.div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 bg-neutral-light">
          <div className="container-custom">
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-center mb-12"
            >
              Our Leadership Team
            </m.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <m.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-serif mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <m.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-serif mb-8"
              >
                Our Mission & Vision
              </m.h2>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-600 mb-6">
                  Our mission is to spread the love of Christ, nurture spiritual
                  growth, and serve our community with compassion and grace.
                </p>
                <p className="text-lg text-gray-600">
                  We envision a vibrant church community where people from all
                  walks of life can find hope, healing, and purpose through a
                  personal relationship with Jesus Christ.
                </p>
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
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Join Our Community</h2>
              <p className="text-lg mb-8">
                We invite you to be part of our church family. Experience the love of God
                and the warmth of genuine fellowship.
              </p>
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
              >
                Visit Us This Sunday
              </Link>
            </m.div>
          </div>
        </section>
      </main>
    </LazyMotion>
  );
} 