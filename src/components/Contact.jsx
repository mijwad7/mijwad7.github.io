import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Code2, Download, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import { links } from '../data/links';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Contact"
          title="Open to meaningful engineering opportunities"
          subtitle="I'm interested in full-stack and backend-focused roles where I can keep growing as a developer, contribute to real products, and work on backend systems, APIs, automation workflows, real-time systems, and full-stack applications."
          align="center"
        />

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            {
              icon: Mail,
              label: 'Email',
              value: links.email,
              href: links.emailHref,
              color: 'cyan',
            },
            {
              icon: Phone,
              label: 'Phone',
              value: links.phone,
              href: links.phoneHref,
              color: 'blue',
            },
            {
              icon: MapPin,
              label: 'Location',
              value: links.location,
              href: null,
              color: 'violet',
            },
          ].map((item, i) => {
            const colorBorder = {
              cyan: 'border-accent-cyan/20',
              blue: 'border-accent-blue/20',
              violet: 'border-accent-violet/20',
            }[item.color];
            const colorIcon = {
              cyan: 'text-accent-cyan',
              blue: 'text-accent-blue',
              violet: 'text-accent-violet',
            }[item.color];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`glass-card p-5 text-center flex flex-col items-center gap-3 border ${colorBorder}`}
              >
                <item.icon size={18} className={colorIcon} />
                <div>
                  <p className="text-white/30 text-xs">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white text-sm font-medium hover:opacity-80 transition-opacity"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <a href={links.emailHref} className="btn-primary">
            <Mail size={14} /> Email me <ArrowRight size={13} />
          </a>
          <a href={links.phoneHref} className="btn-secondary">
            <Phone size={14} /> Call
          </a>
          <a href={links.github} target="_blank" rel="noreferrer" className="btn-secondary">
            <FaGithub size={14} /> GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
            <FaLinkedin size={14} /> LinkedIn
          </a>
          <a href={links.leetcode} target="_blank" rel="noreferrer" className="btn-secondary">
            <Code2 size={14} /> LeetCode
          </a>
          <a href={links.resume} target="_blank" rel="noreferrer" className="btn-secondary">
            <Download size={14} /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
