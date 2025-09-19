import { FaFacebookF, FaInstagram, FaTwitter, FaFacebookMessenger } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2f4f4f] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <p className="text-sm mb-1">We’d love to hear from you!</p>
          <p className="text-sm mb-1">Landline: XXXXXXXXXX</p>
          <p className="text-sm mb-1">WhatsApp: +91XXXXXXXXXX</p>
          <p className="text-sm mb-1">Email: stepup@gmail.com</p>
          <p className="text-sm">Address: 2/38, yyyyyyyyyy, Tenkasi, Tamilnadu, India</p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Shop</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>New in</li>
            <li>Women</li>
            <li>Men</li>
            <li>Accessories</li>
            <li>Heels</li>
            <li>About us</li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Info</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Search</li>
            <li>Return & Exchange Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Shipping Policy</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Social Media</h3>
          <div className="flex space-x-4 text-xl">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaFacebookMessenger />
          </div>
        </div>

        {/* Newsletter (always stacked) */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Let's stay in touch!</h3>
          <p className="mb-2 text-sm">
            Sign up for exclusive offers, original stories, events and more.
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded text-black w-full"
            />
            <button className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200 transition w-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-8 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} StepUp. All rights reserved.
      </div>
    </footer>
  );
}
