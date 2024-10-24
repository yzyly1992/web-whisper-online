"use client"

import { Headphones } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import Image from "next/image";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image src="/icon128.png" alt="Web Whisper" width={36} height={36} />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/#features" className="text-gray-800 hover:text-cyan-600 px-2 py-2 rounded-md text-sm font-medium">Features</Link>
                <Link href="/#faq" className="text-gray-800 hover:text-cyan-600 px-2 py-2 rounded-md text-sm font-medium">FAQ</Link>
                <Link href="/#pricing" className="text-gray-800 hover:text-cyan-600 px-2 py-2 rounded-md text-sm font-medium">Pricing</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:flex md:flex-row md:items-center md:gap-4">
            <Button asChild><Link href="https://chromewebstore.google.com/detail/web-whisper-listen-to-any/mlgfgpjchflekdfagjmjbaijickededn" target="_blank">Get Extension</Link></Button>
            <a href="https://www.producthunt.com/posts/web-whisper?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-web&#0045;whisper" target="_blank">
              <Image 
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=531772&theme=light" 
                alt="Web&#0032;Whisper - Listen&#0032;to&#0032;Any&#0032;Web&#0032;Page&#0032;Like&#0032;a&#0032;Podcast | Product Hunt" 
                width={186} 
                height={40} 
              />
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-cyan-600 hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/#features" className="text-gray-800 hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-medium">Features</Link>
            <Link href="/#faq" className="text-gray-800 hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-medium">FAQ</Link>
            <Link href="/#pricing" className="text-gray-800 hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-medium">Pricing</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2 flex flex-col gap-2">
              <Button className="w-[186px]" asChild><Link href="https://chromewebstore.google.com/detail/web-whisper-listen-to-any/mlgfgpjchflekdfagjmjbaijickededn" target="_blank">Get Extension</Link></Button>
              <a href="https://www.producthunt.com/posts/web-whisper?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-web&#0045;whisper" target="_blank">
                <Image 
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=531772&theme=light" 
                  alt="Web&#0032;Whisper - Listen&#0032;to&#0032;Any&#0032;Web&#0032;Page&#0032;Like&#0032;a&#0032;Podcast | Product Hunt" 
                  width={186} 
                  height={40} 
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
    )
}