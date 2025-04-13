'use client';

import { useState } from 'react';
import Image from 'next/image';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const categories = ['All Sermons', 'Faith', 'Prayer', 'Worship', 'Family'];

const sermons = [
  {
    id: 1,
    title: "The Power of Faith",
    description: "Discover how faith can move mountains and transform lives.",
    date: "March 24, 2024",
    duration: "45 minutes",
    category: "Faith",
    image: "/images/sermon1.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Prayer That Moves Heaven",
    description: "Learn the principles of effective prayer and spiritual warfare.",
    date: "March 17, 2024",
    duration: "40 minutes",
    category: "Prayer",
    image: "/images/sermon2.jpg"
  },
  {
    id: 3,
    title: "Worship in Spirit and Truth",
    description: "Understanding true worship and its impact on our spiritual life.",
    date: "March 10, 2024",
    duration: "38 minutes",
    category: "Worship",
    image: "/images/sermon3.jpg"
  },
  {
    id: 4,
    title: "Building Strong Families",
    description: "Biblical principles for creating a godly home and family.",
    date: "March 3, 2024",
    duration: "42 minutes",
    category: "Family",
    image: "/images/sermon4.jpg"
  },
  {
    id: 5,
    title: "Walking by Faith",
    description: "Practical steps to strengthen your faith walk with God.",
    date: "February 25, 2024",
    duration: "37 minutes",
    category: "Faith",
    image: "/images/sermon5.jpg"
  },
  {
    id: 6,
    title: "The Power of Unity in Prayer",
    description: "Exploring the impact of corporate prayer in the church.",
    date: "February 18, 2024",
    duration: "41 minutes",
    category: "Prayer",
    image: "/images/sermon6.jpg"
  }
];

export default function SermonsPage() {
  const [activeCategory, setActiveCategory] = useState('All Sermons');
  const featuredSermon = sermons.find(sermon => sermon.featured);
  const filteredSermons = sermons.filter(sermon => 
    activeCategory === 'All Sermons' || sermon.category === activeCategory
  );

  return (
    <LazyMotion features={domAnimation}>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/sermons-hero.jpg"
              alt="Sermons"
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
              Our Sermons
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl"
            >
              Inspiring Messages to Strengthen Your Faith
            </m.p>
          </div>
        </section>

        {/* Featured Sermon */}
        {featuredSermon && (
          <section className="py-16 bg-neutral-light">
            <div className="container-custom">
              <m.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif text-center mb-12"
              >
                Featured Sermon
              </m.h2>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={featuredSermon.image}
                    alt={featuredSermon.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif mb-4">{featuredSermon.title}</h3>
                  <p className="text-lg mb-6">{featuredSermon.description}</p>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <span>{featuredSermon.date}</span>
                    <span>•</span>
                    <span>{featuredSermon.duration}</span>
                    <span>•</span>
                    <span>{featuredSermon.category}</span>
                  </div>
                  <button className="mt-8 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                    Watch Now
                  </button>
                </div>
              </m.div>
            </div>
          </section>
        )}

        {/* Sermon Archive */}
        <section className="py-16">
          <div className="container-custom">
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif text-center mb-12"
            >
              Sermon Archive
            </m.h2>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <m.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    activeCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </m.button>
              ))}
            </div>

            {/* Sermons Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSermons.map((sermon, index) => (
                <m.div
                  key={sermon.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="relative h-48">
                    <Image
                      src={sermon.image}
                      alt={sermon.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif mb-3">{sermon.title}</h3>
                    <p className="text-gray-600 mb-4">{sermon.description}</p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                      <span>{sermon.date}</span>
                      <span>•</span>
                      <span>{sermon.duration}</span>
                      <span>•</span>
                      <span>{sermon.category}</span>
                    </div>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </LazyMotion>
  );
} 