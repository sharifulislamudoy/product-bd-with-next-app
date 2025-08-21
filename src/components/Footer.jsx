'use client';

import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  CreditCard,
  Shield,
  Truck,
  Phone,
  Mail,
  MapPin,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    shop: [
      { name: 'New Arrivals', href: '/new' },
      { name: 'Best Sellers', href: '/bestsellers' },
      { name: 'Trending Now', href: '/trending' },
      { name: 'Sale', href: '/sale' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Blog', href: '/blog' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Shipping & Returns', href: '/shipping' },
      { name: 'Size Guide', href: '/size-guide' },
    ],
    legal: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Accessibility', href: '/accessibility' },
    ]
  };

  const paymentMethods = [
    { name: 'Visa', icon: 'Visa' },
    { name: 'Mastercard', icon: 'Mastercard' },
    { name: 'PayPal', icon: 'PayPal' },
    { name: 'Apple Pay', icon: 'ApplePay' },
    { name: 'Google Pay', icon: 'GooglePay' },
  ];

  return (
    <footer className="bg-black text-white">

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-indigo-400">StyleShop</h2>
            <p className="mt-4 text-gray-400">
              Your one-stop destination for the latest fashion trends and accessories.
            </p>
            <div className="flex mt-6 space-x-4">
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                href="#" 
                className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                href="#" 
                className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                href="#" 
                className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                href="#" 
                className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </motion.a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-indigo-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-indigo-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-indigo-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mt-1 mr-3 text-indigo-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mt-1 mr-3 text-indigo-400" />
                <span className="text-gray-400">support@styleshop.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-3 text-indigo-400" />
                <span className="text-gray-400">123 Fashion Ave, New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
              <span>© {currentYear} StyleShop. Made with</span>
              <Heart size={16} className="mx-1 text-red-500 fill-current" />
              <span>by your brand</span>
            </div>
            
            <div className="flex flex-wrap justify-center">
              {footerLinks.legal.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-400 hover:text-indigo-400 text-sm mx-3 mb-2 md:mb-0 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">We accept:</span>
              <div className="flex space-x-1">
                {paymentMethods.map((method) => (
                  <div key={method.name} className="bg-gray-800 px-2 py-1 rounded text-xs">
                    {method.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;