import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, Facebook, Heart, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-8">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
          
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">James Peter Opeyemi</h3>
            <p className="text-gray-400">Entrepreneur | IT Expert | Data Scientist | Economist</p>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <div className="flex justify-center space-x-4 mb-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;