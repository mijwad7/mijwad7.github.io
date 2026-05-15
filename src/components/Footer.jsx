import { Code2, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { links } from '../data/links';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-white/40 text-sm">
            Muhammed Mijwad — Full Stack Developer based in Bahrain.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {[
            { icon: FaGithub, href: links.github, label: 'GitHub' },
            { icon: FaLinkedin, href: links.linkedin, label: 'LinkedIn' },
            { icon: Code2, href: links.leetcode, label: 'LeetCode' },
            { icon: Mail, href: links.emailHref, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-white/30 hover:text-white/70 hover:bg-white/5 transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
