'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const ministries = [
  {
    id: 1,
    title: "Youth Ministry",
    description: "Empowering young people to grow in faith and leadership through dynamic programs, mentorship, and fellowship.",
    image: "/images/youth-ministry.jpg",
    leader: "Pastor Sarah Johnson",
    schedule: "Sundays at 4:00 PM",
    location: "Youth Center"
  },
  {
    id: 2,
    title: "Children's Ministry",
    description: "Nurturing the spiritual growth of children through age-appropriate Bible lessons, activities, and worship.",
    image: "/images/children-ministry.jpg",
    leader: "Mrs. Rachel Thompson",
    schedule: "Sundays at 10:00 AM",
    location: "Children's Wing"
  },
  {
    id: 3,
    title: "Women's Ministry",
    description: "Encouraging and equipping women through Bible study, prayer, and fellowship events.",
    image: "/images/women-ministry.jpg",
    leader: "Mrs. Mary Wilson",
    schedule: "Wednesdays at 10:00 AM",
    location: "Fellowship Hall"
  },
  {
    id: 4,
    title: "Men's Ministry",
    description: "Building strong men of faith through fellowship, discipleship, and community service.",
    image: "/images/men-ministry.jpg",
    leader: "Deacon Michael Brown",
    schedule: "Saturdays at 8:00 AM",
    location: "Fellowship Hall"
  },
  {
    id: 5,
    title: "Prayer Ministry",
    description: "Interceding for the church, community, and world through organized prayer meetings and prayer chains.",
    image: "/images/prayer-ministry.jpg",
    leader: "Elder James Anderson",
    schedule: "Daily at 6:00 AM",
    location: "Prayer Room"
  },
  {
    id: 6,
    title: "Music Ministry",
    description: "Leading the congregation in worship through music, choir, and instrumental performances.",
    image: "/images/music-ministry.jpg",
    leader: "Mr. David Lee",
    schedule: "Rehearsals: Thursdays at 7:00 PM",
    location: "Sanctuary"
  }
];

export default function MinistriesPage() {
  return (
    <LazyMotion features={domAnimation}>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/ministries-hero.jpg"
              alt="Church Ministries"
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
              Our Ministries
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl"
            >
              Serving God and Community Through Various Callings
            </m.p>
          </div>
        </section>

        {/* Ministries Grid */}
        <section className="py-16">
          <div className="container-custom">
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif text-center mb-12"
            >
              Get Involved
            </m.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ministries.map((ministry, index) => (
                <m.div
                  key={ministry.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="relative h-48">
                    <Image
                      src={ministry.image}
                      alt={ministry.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif mb-3">{ministry.title}</h3>
                    <p className="text-gray-600 mb-4">{ministry.description}</p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Leader:</span>
                        <span>{ministry.leader}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Schedule:</span>
                        <span>{ministry.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Location:</span>
                        <span>{ministry.location}</span>
                      </div>
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
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Join a Ministry</h2>
              <p className="text-lg mb-8">
                Discover your gifts and serve alongside fellow believers in our church community.
                There's a place for everyone to contribute and grow.
              </p>
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
              >
                Contact Us to Get Started
              </Link>
            </m.div>
          </div>
        </section>
      </main>
    </LazyMotion>
  );
} 