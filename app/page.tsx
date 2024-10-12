import { Lobster } from "next/font/google"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Zap, Globe, Mic2, List, Check } from 'lucide-react'
import Link from "next/link"

const lobster = Lobster({ weight: '400', subsets: ["latin"] })

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-cyan-100">
      {/* Hero Section (full height) */}
      <section className="h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 animate-fade-in-up">
            Turn Any Webpage into a Podcast with <br/><span className={lobster.className + " text-cyan-600"}>Web Whisper</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in-up animation-delay-200">
            Listen to your favorite articles, blogs, and web content on-the-go. No more eye strain, just pure audio bliss.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-400">
            <Button asChild size="lg"><Link href="https://chromewebstore.google.com/detail/web-whisper-listen-to-any/mlgfgpjchflekdfagjmjbaijickededn" target="_blank">Add to Chrome</Link></Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section id="features" className="pt-32 pb-40 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Main Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-purple-50 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <Zap className="h-12 w-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Conversion</h3>
              <p className="text-gray-600">Convert any webpage to audio with just one click. It&apos;s that simple and fast!</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-purple-50 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <Globe className="h-12 w-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Works Everywhere</h3>
              <p className="text-gray-600">Compatible with all websites. Your favorite content is just a whisper away.</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-purple-50 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <Mic2 className="h-12 w-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Natural Voice</h3>
              <p className="text-gray-600">Enjoy high-quality, natural-sounding voices that make listening a pleasure.</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-purple-50 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <List className="h-12 w-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Playlist Feature</h3>
              <p className="text-gray-600">Add multiple webpages to your playlist and listen to them later, anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Simple Pricing, Powerful Features</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div className="flex justify-center">
                  <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-cyan-100 text-cyan-600">
                    Free Forever
                  </span>
                </div>
                <div className="mt-4 flex justify-center text-6xl font-extrabold text-gray-900">
                  $0
                </div>
                <p className="mt-5 text-lg text-center text-gray-500">
                  Enjoy all features of Web Whisper completely free!
                </p>
              </div>
              <div className="px-6 pt-6 pb-8 sm:px-10 sm:pt-10 sm:pb-10">
                <ul className="space-y-4">
                  {[
                    "Unlimited webpage conversions",
                    "High-quality natural voices",
                    "Playlist feature",
                    "Works on all websites",
                    "Regular updates and improvements"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-6 w-6 text-green-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                <Button asChild size="lg" className="w-full"><Link href="https://chromewebstore.google.com/detail/web-whisper-listen-to-any/mlgfgpjchflekdfagjmjbaijickededn" target="_blank">Get Started Now</Link></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does Web Whisper work?</AccordionTrigger>
              <AccordionContent>
                Web Whisper uses browser built-in tts to convert the main content of any webpage into audio. Simply click the extension icon, and it will open up the interface to add current page to the playlist. With play control panel, you can easily manage the audios.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is Web Whisper really free to use?</AccordionTrigger>
              <AccordionContent>
                Yes, Web Whisper is completely free to use! We believe in making web content accessible to everyone, so all features are available at no cost.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I use Web Whisper offline?</AccordionTrigger>
              <AccordionContent>
                Yes, Web Whisper doesn&apos;t requires an internet connection to convert webpages to audio. Once the webpage is added to the playlist, you can listen the content offline anytime.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How does the playlist feature work?</AccordionTrigger>
              <AccordionContent>
                The playlist feature allows you to add multiple webpages to a queue. You can then listen to these pages one after another, perfect for catching up on your reading list or preparing for a long commute.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Does Web Whisper support multiple languages?</AccordionTrigger>
              <AccordionContent>
                Yes, Web Whisper supports multiple languages. By default, it automatically detects the language of the webpage and uses the appropriate voice for that language. You can also manually select the voice and language you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}