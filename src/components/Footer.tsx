import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-serif mb-4">CONTACT</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Phone: +234 8028547787/ 8079325881</li>
              <li>Email: aluko.olukayode@gmail.com</li>
              <li className="mt-4">
                <h4 className="font-serif mb-2">Address</h4>
                <p>Bola Extension, Arulogun Road,<br />Ojoo, Ibadan,<br />Nigeria</p>
              </li>
            </ul>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-xl font-serif mb-4">NAVIGATIONS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-300 hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-xl font-serif mb-4">SOCIAL</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Christ Apostolic Church Judah House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 