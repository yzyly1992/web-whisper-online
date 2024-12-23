"use client"

import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { handleSubscribeMailingList } from "@/lib/mailingList";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";

export function Footer() {
    const [errorMessage, formAction] = useFormState(handleSubscribeMailingList, undefined);
    return (
      <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Web Whisper</h3>
            <p className="text-gray-400 mb-4">Turning the web into your personal podcast since 2024.</p>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: info@webwhisper.online</p>

          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/#features" className="text-gray-400 hover:text-white">Features</Link></li>
              <li><Link href="/#faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link href="/#pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <form className="flex" action={formAction}>
              <Input type="email" placeholder="Enter your email" className="rounded-r-none text-gray-600" name="email" />
              <SubscribeButton />
            </form>
            {errorMessage && errorMessage.error && <p className="text-red-500 text-sm mt-2">{errorMessage.error}</p>}
            {errorMessage && errorMessage.success && <p className="text-gray-400 text-sm mt-2">{errorMessage.success}</p>}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Web Whisper. All rights reserved.</p>
        </div>
      </div>
    </footer>
    )
}

function SubscribeButton() {
  const { pending } = useFormStatus();
  return (
      <Button type="submit" className="rounded-l-none" disabled={pending}>Subscribe</Button>
  )
}