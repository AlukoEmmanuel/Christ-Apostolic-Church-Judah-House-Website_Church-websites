'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, MapPinIcon, UserGroupIcon, AcademicCapIcon, HeartIcon } from '@heroicons/react/24/outline';

const activities = [
  {
    title: "Youth Worship Service",
    description: "Dynamic worship and teaching tailored for young people.",
    time: "Fridays 5:00 PM",
    location: "Youth Center"
  },
  {
    title: "Bible Study Groups",
    description: "Small group discussions on relevant topics.",
    time: "Sundays 4:00 PM",
    location: "Various Rooms"
  },
  {
    title: "Leadership Training",
    description: "Developing future church leaders.",
    time: "Monthly",
    location: "Fellowship Hall"
  },
  {
    title: "Community Service",
    description: "Making a difference in our community.",
    time: "Bi-monthly",
    location: "Various Locations"
  }
];

const features = [
  {
    icon: UserGroupIcon,
    title: "Fellowship",
    description: "Build lasting friendships with like-minded young believers."
  },
  {
    icon: AcademicCapIcon,
    title: "Spiritual Growth",
    description: "Learn and grow in your faith journey through mentorship and teaching."
  },
  {
    icon: HeartIcon,
    title: "Service",
    description: "Discover your gifts and serve in various ministry opportunities."
  }
];

export default function YouthMinistryPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/youth-ministry-hero.jpg"
            alt="Youth Ministry"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            Youth Ministry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Growing Together in Faith and Fellowship
          </motion.p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Welcome to Youth Ministry</h2>
              <p className="text-lg mb-6">
                Our youth ministry is dedicated to helping young people grow in their faith, develop
                meaningful relationships, and discover their God-given purpose. We provide a safe and
                engaging environment where youth can explore their faith, ask questions, and be
                equipped for life's challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <UserGroupIcon className="w-6 h-6 mr-3" />
                  <span>Ages 13-25</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <CalendarIcon className="w-6 h-6 mr-3" />
                  <span>Weekly Meetings</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="w-6 h-6 mr-3" />
                  <span>Youth Center</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="/images/youth-group.jpg"
                alt="Youth Group"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-center mb-12"
          >
            Our Activities
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-serif mb-3">{activity.title}</h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    <span>{activity.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="w-4 h-4 mr-2" />
                    <span>{activity.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-center mb-12"
          >
            What We Offer
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-serif mb-4">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-neutral-light">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Join Our Youth Community</h2>
            <p className="text-lg mb-8">
              Be part of a vibrant community of young believers. We'd love to welcome you to our
              next youth service or activity!
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors"
            >
              Get Connected
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 