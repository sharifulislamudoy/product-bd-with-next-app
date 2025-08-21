'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Heart, 
  Share, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Truck, 
  RotateCw, 
  Shield 
} from 'lucide-react';

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedSize, setSelectedSize] = useState('m');
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  // Sample product data
  const product = {
    id: 1,
    name: 'Premium Comfort Fit T-Shirt',
    price: 49.99,
    discountPrice: 39.99,
    description: 'Our premium t-shirt is crafted from 100% organic cotton for exceptional comfort and durability. Features a modern fit with ribbed collar and double-stitched seams.',
    colors: [
      { name: 'blue', value: '#3b82f6' },
      { name: 'gray', value: '#6b7280' },
      { name: 'black', value: '#000000' },
      { name: 'white', value: '#e5e5e5' }
    ],
    sizes: ['xs', 's', 'm', 'l', 'xl'],
    details: [
      '100% Organic Cotton',
      'Machine Washable',
      'Slim Fit Design',
      'Made with Eco-Friendly Processes'
    ],
    images: [
      '/placeholder-tshirt-1.jpg',
      '/placeholder-tshirt-2.jpg',
      '/placeholder-tshirt-3.jpg',
      '/placeholder-tshirt-4.jpg'
    ],
    rating: 4.8,
    reviews: 142
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const addToCart = () => {
    // Add to cart functionality
    console.log('Added to cart:', { 
      product: product.name, 
      color: selectedColor, 
      size: selectedSize, 
      quantity 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image Gallery */}
          <div className="md:w-1/2">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-full w-full relative"
                >
                  <Image
                    src={product.images[currentImage]}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Favorite Button */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-2 right-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Heart 
                  size={24} 
                  className={isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600 dark:text-gray-300'} 
                />
              </button>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="mt-4 grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-md transition-all ${
                    currentImage === index ? 'ring-2 ring-indigo-500' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="md:w-1/2">
            <div className="sticky top-24">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{product.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                
                {/* Price */}
                <div className="mt-4">
                  <div className="flex items-center">
                    <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                      ${product.discountPrice}
                    </p>
                    <p className="ml-2 text-lg text-gray-500 line-through">${product.price}</p>
                    <span className="ml-3 bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded">
                      Save ${(product.price - product.discountPrice).toFixed(2)}
                    </span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="mt-4 text-gray-700 dark:text-gray-300">{product.description}</p>
                
                {/* Color Selection */}
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">Color</h3>
                  <div className="flex space-x-3 mt-2">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                          selectedColor === color.name
                            ? 'ring-2 ring-offset-2 ring-indigo-500'
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                        style={{ backgroundColor: color.value }}
                        aria-label={color.name}
                      >
                        {selectedColor === color.name && (
                          <Check size={16} className="text-white" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Size Selection */}
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Size</h3>
                    <button className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">
                      Size Guide
                    </button>
                  </div>
                  <div className="grid grid-cols-5 gap-2 mt-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 px-4 rounded-md text-sm font-medium ${
                          selectedSize === size
                            ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400'
                            : 'bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-300 border border-gray-300 dark:border-gray-700'
                        } hover:bg-gray-50 dark:hover:bg-gray-700`}
                      >
                        {size.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Quantity and Add to Cart */}
                <div className="mt-6 flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-md">
                    <button
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      className="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                    >
                      -
                    </button>
                    <span className="px-3 py-2 text-gray-900 dark:text-white">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                    >
                      +
                    </button>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={addToCart}
                    className="flex-1 bg-indigo-600 dark:bg-indigo-700 text-white py-3 px-6 rounded-md font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
                  >
                    Add to Cart
                  </motion.button>
                </div>
                
                {/* Features */}
                <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <Truck size={20} className="text-indigo-600 dark:text-indigo-400" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Free Shipping</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">On orders over $50</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <RotateCw size={20} className="text-indigo-600 dark:text-indigo-400" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Easy Returns</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">30 day return policy</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Shield size={20} className="text-indigo-600 dark:text-indigo-400" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Secure Payment</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Payment encryption</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Details and Reviews Section */}
        <div className="mt-16">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8">
              {['Details', 'Reviews', 'Shipping'].map((tab) => (
                <button
                  key={tab}
                  className="py-4 px-1 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-400 whitespace-nowrap"
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Product Details</h3>
            <ul className="mt-4 space-y-2">
              {product.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <Check size={18} className="text-indigo-600 dark:text-indigo-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Recently Viewed Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">You May Also Like</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg">
                <div className="aspect-square relative bg-gray-200 dark:bg-gray-700">
                  <Image
                    src={`/placeholder-product-${item}.jpg`}
                    alt={`Related product ${item}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">Casual Comfort T-Shirt</h3>
                  <div className="mt-1 flex items-center">
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">$34.99</p>
                    <p className="ml-2 text-gray-500 line-through text-sm">$44.99</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;