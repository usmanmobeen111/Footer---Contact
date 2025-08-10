import React from 'react';
import footerLinks from './data/footerData.js';

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-1  mx-auto sm:grid-cols-3 gap-8 text-white w-[45vw]">
      {/* Company */}
      <ul>
        <h1 className="text-orange-600 font-semibold text-lg mb-3">Company</h1>
        {footerLinks.company.map((link, index) => (
          <li key={index} className="mb-2">
            <a
              href={link.href}
              className="relative group inline-block"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Resources */}
      <ul>
        <h1 className="text-orange-600 font-semibold text-lg mb-3">Resources</h1>
        {footerLinks.resources.map((link, index) => (
          <li key={index} className="mb-2">
            <a
              href={link.href}
              className="relative group inline-block"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Social */}
      <ul>
        <h1 className="text-orange-600 font-semibold text-lg mb-3">Social</h1>
        {footerLinks.social.map((link, index) => (
          <li key={index} className="mb-3">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 relative group inline-block"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
