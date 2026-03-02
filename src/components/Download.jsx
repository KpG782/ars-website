import React from 'react'
import { Smartphone, Download as DownloadIcon } from 'lucide-react'

const Download = () => {
  return (
    <section id="download" className="py-20 md:py-32 bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-8">
            <Smartphone className="w-10 h-10" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Get Started?
          </h2>

          <p className="text-xl md:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto">
            Download ARS now and experience the future of auto repair services. Available for Android and iOS.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* Google Play */}
            <a
              href="#"
              className="group bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-600">GET IT ON</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </a>

            {/* App Store */}
            <a
              href="#"
              className="group bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-600">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </a>
          </div>

          {/* QR Code Option */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <DownloadIcon className="w-5 h-5 mr-2" />
            <span className="text-sm">Scan QR code to download instantly</span>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-12 border-t border-white/20">
            <p className="text-primary-100 mb-6">Trusted by thousands of users</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm text-primary-200">Downloads</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.8★</div>
                <div className="text-sm text-primary-200">Average Rating</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-primary-200">Mechanics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download
