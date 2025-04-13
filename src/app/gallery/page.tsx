'use client';

import { useState } from 'react';
import Image from 'next/image';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const categories = ['All', 'Worship', 'Events', 'Community', 'Youth', 'Missions'];

const images = [
  {
    id: 1,
    src: "/images/gallery/worship1.jpg",
    alt: "Sunday Worship Service",
    category: "Worship",
    description: "Praising God through music and worship"
  },
  {
    id: 2,
    src: "/images/gallery/event1.jpg",
    alt: "Easter Celebration",
    category: "Events",
    description: "Easter Sunday celebration with the church family"
  },
  {
    id: 3,
    src: "/images/gallery/community1.jpg",
    alt: "Community Outreach",
    category: "Community",
    description: "Serving our local community through various programs"
  },
  {
    id: 4,
    src: "/images/gallery/youth1.jpg",
    alt: "Youth Conference",
    category: "Youth",
    description: "Annual youth conference bringing young people together"
  },
  {
    id: 5,
    src: "/images/gallery/missions1.jpg",
    alt: "Mission Trip",
    category: "Missions",
    description: "Mission trip to support communities in need"
  },
  {
    id: 6,
    src: "/images/gallery/worship2.jpg",
    alt: "Choir Performance",
    category: "Worship",
    description: "Church choir leading worship"
  },
  {
    id: 7,
    src: "/images/gallery/event2.jpg",
    alt: "Christmas Service",
    category: "Events",
    description: "Christmas celebration service"
  },
  {
    id: 8,
    src: "/images/gallery/community2.jpg",
    alt: "Food Drive",
    category: "Community",
    description: "Community food drive initiative"
  },
  {
    id: 9,
    src: "/images/gallery/youth2.jpg",
    alt: "Youth Camp",
    category: "Youth",
    description: "Summer youth camp activities"
  },
  {
    id: 10,
    src: "/images/gallery/missions2.jpg",
    alt: "Medical Mission",
    category: "Missions",
    description: "Medical mission outreach program"
  },
  {
    id: 11,
    src: "/images/gallery/worship3.jpg",
    alt: "Baptism Service",
    category: "Worship",
    description: "Baptism celebration service"
  },
  {
    id: 12,
    src: "/images/gallery/event3.jpg",
    alt: "Church Anniversary",
    category: "Events",
    description: "Church anniversary celebration"
  }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = images.filter(
    image => selectedCategory === 'All' || image.category === selectedCategory
  );

  return (
    <LazyMotion features={domAnimation}>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/gallery-hero.jpg"
              alt="Church Gallery"
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
              Photo Gallery
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl"
            >
              Capturing Moments of Faith, Fellowship, and Service
            </m.p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="container-custom">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <m.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </m.button>
              ))}
            </div>

            {/* Image Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((image, index) => (
                <m.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <h3 className="text-lg font-serif mb-2">{image.alt}</h3>
                        <p className="text-sm">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full aspect-video"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={images.find(img => img.id === selectedImage)?.src || ''}
                alt={images.find(img => img.id === selectedImage)?.alt || ''}
                fill
                className="object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-xl hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </m.div>
          </div>
        )}
      </main>
    </LazyMotion>
  );
} 