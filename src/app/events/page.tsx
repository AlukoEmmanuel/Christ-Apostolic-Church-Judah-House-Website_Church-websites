'use client';

import { useState } from 'react';
import Image from 'next/image';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const events = [
  {
    id: 1,
    title: "Easter Celebration Service",
    description: "Join us for a special Easter service celebrating the resurrection of Jesus Christ.",
    date: "March 31, 2024",
    time: "10:00 AM",
    location: "Main Sanctuary",
    category: "Special Service",
    image: "/images/featured-event.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Youth Conference",
    description: "A dynamic conference for young people to grow in their faith and leadership.",
    date: "April 5-7, 2024",
    time: "6:00 PM",
    location: "Youth Center",
    category: "Conference",
    image: "/images/event1.jpg"
  },
  {
    id: 3,
    title: "Prayer & Fasting Week",
    description: "A week dedicated to seeking God's presence through prayer and fasting.",
    date: "April 15-21, 2024",
    time: "Various Times",
    location: "Prayer Room",
    category: "Prayer",
    image: "/images/event2.jpg"
  },
  {
    id: 4,
    title: "Family Fun Day",
    description: "A day of fellowship, games, and activities for the whole family.",
    date: "April 27, 2024",
    time: "11:00 AM",
    location: "Church Grounds",
    category: "Fellowship",
    image: "/images/event3.jpg"
  },
  {
    id: 5,
    title: "Women's Ministry Breakfast",
    description: "Join us for a morning of fellowship, worship, and inspiration.",
    date: "May 4, 2024",
    time: "9:00 AM",
    location: "Fellowship Hall",
    category: "Ministry",
    image: "/images/event4.jpg"
  },
  {
    id: 6,
    title: "Men's Retreat",
    description: "A weekend of spiritual growth and brotherhood.",
    date: "May 10-12, 2024",
    time: "3:00 PM",
    location: "Retreat Center",
    category: "Retreat",
    image: "/images/event5.jpg"
  }
];

export default function EventsPage() {
  const [selectedMonth, setSelectedMonth] = useState('March');
  const featuredEvent = events.find(event => event.featured);
  const filteredEvents = events.filter(event => 
    event.date.includes(selectedMonth)
  );

  return (
    <LazyMotion features={domAnimation}>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/events-hero.jpg"
              alt="Events"
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
              Upcoming Events
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl"
            >
              Join Us in Fellowship and Celebration
            </m.p>
          </div>
        </section>

        {/* Featured Event */}
        {featuredEvent && (
          <section className="py-16 bg-neutral-light">
            <div className="container-custom">
              <m.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif text-center mb-12"
              >
                Featured Event
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
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif mb-4">{featuredEvent.title}</h3>
                  <p className="text-lg mb-6">{featuredEvent.description}</p>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Date:</span>
                      <span>{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Time:</span>
                      <span>{featuredEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Location:</span>
                      <span>{featuredEvent.location}</span>
                    </div>
                  </div>
                  <button className="mt-8 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                    Register Now
                  </button>
                </div>
              </m.div>
            </div>
          </section>
        )}

        {/* Events Calendar */}
        <section className="py-16">
          <div className="container-custom">
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif text-center mb-12"
            >
              Events Calendar
            </m.h2>

            {/* Month Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {months.map((month, index) => (
                <m.button
                  key={month}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedMonth(month)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    selectedMonth === month
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {month}
                </m.button>
              ))}
            </div>

            {/* Events Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <m.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
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
                    <h3 className="text-xl font-serif mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Date:</span>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Time:</span>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Location:</span>
                        <span>{event.location}</span>
                      </div>
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