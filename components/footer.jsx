import { Brain } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-gray-50 border-t border-gray-200">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-[#0e716d] flex items-center justify-center mr-2">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">
                InfoDigest Pro
              </span>
            </div>
            <p className="text-sm text-gray-600">
              AI-powered academic assistant helping students and researchers
              overcome information overload.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="#"
                className="text-gray-600 hover:text-[#0e716d] block"
              >
                Features
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#0e716d] block"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#0e716d] block"
              >
                API
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#0e716d] block"
              >
                Integrations
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="#"
                className="text-gray-600 hover:text-[#0e716d] block"
              >
                Help Center
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#0e716d] block"
              >
                Contact Us
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#0e716d] block"
              >
                Status
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#0e716d] block"
              >
                Community
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="#"
                className="text-gray-600 hover:text-[#0e716d] block"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#0e716d] block"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#0e716d] block"
              >
                Careers
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#0e716d] block"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} InfoDigest Pro. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-[#0e716d]"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-[#0e716d]"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-[#0e716d]"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
