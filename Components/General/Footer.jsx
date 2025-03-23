import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Resume Builder', href: '#' },
      { name: 'Cover Letter Builder', href: '#' },
      { name: 'Templates', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Features', href: '#' }
    ],
    resources: [
      { name: 'Resume Examples', href: '#' },
      { name: 'Cover Letter Examples', href: '#' },
      { name: 'Career Blog', href: '#' },
      { name: 'How to Write a Resume', href: '#' },
      { name: 'Resume Tips', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Partners', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Security', href: '#' }
    ]
  };

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M19.812 2H4.188C2.98 2 2 2.98 2 4.188v15.624C2 21.02 2.98 22 4.188 22h15.624c1.208 0 2.188-.98 2.188-2.188V4.188C22 2.98 21.02 2 19.812 2zM8.5 18.5h-3v-9h3v9zM7 8.25c-.967 0-1.75-.784-1.75-1.75S6.033 4.75 7 4.75s1.75.784 1.75 1.75S7.967 8.25 7 8.25zm11.5 10.25h-3v-4.775c0-1.425-.525-1.725-1.2-1.725-.675 0-1.3.3-1.3 1.725v4.775h-3v-9h3v1.2c.45-.9 1.35-1.2 2.4-1.2 1.95 0 3.1 1.2 3.1 4.05v4.95z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gray-900 text-white" id='contact'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.png"
                alt="Resume.io Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-gray-300">
                © {new Date().getFullYear()} Resume.io. All rights reserved.
              </span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300 transition"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
