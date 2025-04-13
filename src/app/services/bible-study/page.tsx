'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const topics = [
  {
    title: "Foundations of Faith",
    description: "Understanding the core principles of Christian faith",
    duration: "4 weeks"
  },
  {
    title: "Life of Jesus",
    description: "In-depth study of the Gospels and Jesus' ministry",
    duration: "6 weeks"
  },
  {
    title: "Prayer & Spiritual Growth",
    description: "Developing a deeper prayer life and spiritual disciplines",
    duration: "4 weeks"
  },
  {
    title: "Book Studies",
    description: "Verse-by-verse study of specific books of the Bible",
    duration: "Varies"
  }
];

const features = [
  {
    title: "Interactive Discussion",
    description: "Engage in meaningful conversations about Scripture"
  },
  {
    title: "Prayer Time",
    description: "Share prayer requests and pray together"
  },
  {
    title: "Study Materials",
    description: "Receive comprehensive study guides and resources"
  },
  {
    title: "Fellowship",
    description: "Build relationships with other believers"
  }
];

export default function BibleStudyPage() {
  return (
    <LazyMotion features={domAnimation}>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/services/bible-study-hero.jpg"
              alt="Bible Study"
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
              Bible Study
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl"
            >
              Every Wednesday at 6:30 PM
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
                <h2 className="text-3xl font-serif mb-6">Grow in God's Word</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our Bible Study is designed to help you develop a deeper understanding
                  of God's Word through systematic teaching, interactive discussion,
                  and practical application.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Whether you're new to the Bible or have been studying it for years,
                  you'll find a welcoming environment where you can grow in your faith
                  and knowledge of Scripture.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Join Us
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
                  src="/images/services/bible-study.jpg"
                  alt="Bible Study Group"
                  fill
                  className="object-cover"
                />
              </m.div>
            </div>
          </div>
        </section>

        {/* Study Topics */}
        <section className="py-16 bg-neutral-light">
          <div className="container-custom">
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-center mb-12"
            >
              Current & Upcoming Topics
            </m.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {topics.map((topic, index) => (
                <m.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-serif mb-3">{topic.title}</h3>
                  <p className="text-gray-600 mb-3">{topic.description}</p>
                  <p className="text-sm text-primary font-semibold">
                    Duration: {topic.duration}
                  </p>
                </m.div>
              ))}
            </div>
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
              className="text-3xl font-serif text-center mb-12"
            >
              What to Expect
            </m.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <m.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-serif mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Join Our Bible Study</h2>
              <p className="text-lg mb-8">
                Take the next step in your spiritual journey. Join us every Wednesday
                evening for an enriching time of Bible study and fellowship.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started
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