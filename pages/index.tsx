import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X, Mail, Phone, Linkedin, Send, MessageCircle } from 'lucide-react';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Badge } from '../components/Badge';
import { Pill } from '../components/Pill';
import { NavLink } from '../components/NavLink';
import { Feature } from '../components/Feature';

// === Contact Information ===
const CONTACT_EMAIL = 'ferhanthenomad@gmail.com';
const CONTACT_PHONE = '+351 93828 4428';
const CONTACT_LINKEDIN = 'https://www.linkedin.com/in/ferhansahin/';
const CONTACT_WHATSAPP = 'http://wa.me/351938284428';
const CALENDLY_URL = 'https://calendly.com/ferhanthenomad/30min';

// === Brand Data ===
const brands: string[][] = [
  ['Peugeot', 'Renault', 'HP', 'Sanofi', 'Pfizer', 'Coca‑Cola', 'Autodesk', 'NN Hayat', 'Odeabank'],
  ['Levi\'s', 'Dockers', 'Calvin Klein', 'Timberland', 'Yargıcı', 'Kahve Dünyası', 'Sütaş', 'Uludağ'],
  ['Ferrero', 'Heinz', 'Şölen', 'Petrol Ofisi', 'Genesys', 'Solita', 'Leica', 'EzFill'],
  ['Vexo', 'Malibu Financial', 'MNG Kargo', 'Nebim', 'Otokar', 'Paşabahçe', 'Vakifbank'],
];

// === Animation Variants ===
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  const [open, setOpen] = useState(false);

  // JSON-LD Structured Data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Ferhan Sahin - Fractional Growth Marketing',
    description: 'Fractional growth marketing leadership for brands. Building predictable, scalable growth engines rooted in product value.',
    url: 'https://ferhansahin.com',
    image: 'https://ferhansahin.com/og-image.jpg',
    telephone: CONTACT_PHONE,
    email: CONTACT_EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PT',
    },
    founder: {
      '@type': 'Person',
      name: 'Ferhan Sahin',
      jobTitle: 'Fractional Growth Marketing Leader',
      sameAs: [CONTACT_LINKEDIN],
    },
    areaServed: 'Worldwide',
    serviceType: ['Growth Marketing Strategy', 'Product-Led Growth', 'Fractional CMO', 'Marketing Leadership'],
  };

  return (
    <>
      <Head>
        <title>Ferhan Sahin - Fractional Growth Marketing Partner for Brands</title>
        <meta
          name="description"
          content="Fractional growth marketing leadership. Build predictable, scalable growth engines rooted in product value — not excessive ad spend. Expert in PLG, activation, and retention."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="fractional growth marketing, fractional CMO, product-led growth, PLG, growth strategy, SaaS marketing, activation, retention, growth loops"
        />
        <meta name="author" content="Ferhan Sahin" />
        <link rel="canonical" href="https://ferhansahin.com" />

        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ferhansahin.com" />
        <meta property="og:title" content="Ferhan Sahin - Fractional Growth Marketing Partner" />
        <meta
          property="og:description"
          content="Build predictable, scalable growth engines rooted in product value. Fractional growth marketing leadership for SaaS and e-commerce brands."
        />
        <meta property="og:image" content="https://ferhansahin.com/og-image.jpg" />
        <meta property="og:image:width" content="1142" />
        <meta property="og:image:height" content="1600" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:site_name" content="Ferhan Sahin" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://ferhansahin.com" />
        <meta name="twitter:title" content="Ferhan Sahin - Fractional Growth Marketing Partner" />
        <meta
          name="twitter:description"
          content="Build predictable, scalable growth engines rooted in product value. Fractional growth marketing leadership."
        />
        <meta name="twitter:image" content="https://ferhansahin.com/og-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-white text-gray-900">
        {/* Navigation */}
        <header className="sticky top-0 z-40 w-full border-b border-gray-200/70 bg-white/80 backdrop-blur">
          <Container className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-2 font-semibold">
              <Image
                src="/og-image.jpg"
                alt="Ferhan Sahin"
                width={24}
                height={24}
                className="h-6 w-6 rounded-lg object-cover"
              />
              <span>Ferhan Sahin</span>
            </a>
            <nav className="hidden items-center gap-8 md:flex">
              <NavLink href="#work" label="Work" />
              <NavLink href="#services" label="Services" />
              <NavLink href="#method" label="Method" />
              <NavLink href="#about" label="About" />
              <NavLink href="#contact" label="Contact" />
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-black"
              >
                Book a Call <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
            <button
              className="md:hidden"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </Container>
          {/* Mobile menu */}
          {open && (
            <div className="border-t border-gray-200 bg-white md:hidden">
              <Container className="flex flex-col gap-4 py-4">
                {[
                  ['#work', 'Work'],
                  ['#services', 'Services'],
                  ['#method', 'Method'],
                  ['#about', 'About'],
                  ['#contact', 'Contact'],
                ].map(([href, label]) => (
                  <NavLink key={href} href={href} label={label} onClick={() => setOpen(false)} />
                ))}
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-black"
                  onClick={() => setOpen(false)}
                >
                  Book a Call <ArrowRight className="h-4 w-4" />
                </a>
              </Container>
            </div>
          )}
        </header>

        {/* Hero */}
        <main id="home">
          <Container className="pt-14 pb-12 sm:pt-20 sm:pb-20">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <div className="mb-6 flex items-center gap-3">
                <Badge>Fractional Growth Marketing</Badge>
              </div>
              <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
                Fractional Growth Partner for Brands.
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
                I build predictable, scalable growth engines rooted in product value — not excessive ad spend. Growth starts inside the product and compounds through user experience, messaging clarity, and smart distribution.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-black"
                >
                  Let&apos;s build your growth engine <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#work" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                  See example work
                </a>
              </div>
            </motion.div>
          </Container>

          {/* Logos / Brands */}
          <Section id="work">
            <Container className="py-12 sm:py-16">
              <div className="mb-6 flex items-center gap-3">
                <Badge>Selected Brands</Badge>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {brands.flat().map((b) => (
                  <div key={b} className="flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm">
                    {b}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-gray-500">…and 80+ startups, agencies, and founder‑led brands.</p>
            </Container>
          </Section>

          {/* Services */}
          <Section id="services">
            <Container className="py-12 sm:py-16">
              <div className="mb-6 flex items-center gap-3">
                <Badge>What I Do</Badge>
              </div>
              <h2 className="text-2xl font-bold">Fractional Growth Marketing Leadership</h2>
              <p className="mt-3 max-w-3xl text-gray-700">
                I help you rely less on paid ads by making your product and messaging do the work. I work alongside your team to clarify your positioning, improve onboarding, increase retention, and build product + marketing loops that drive ongoing, compounding growth.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Feature title="Positioning & Narrative" desc="Define a clear value story that users instantly understand and feel — across website, product, and campaigns." />
                <Feature title="Activation & Onboarding" desc="Remove friction, accelerate time‑to‑value, and guide users to their first success moments." />
                <Feature title="Retention & Expansion" desc="Build habit loops, lifecycle messaging, and in‑product nudges that increase LTV." />
                <Feature title="Growth Loops" desc="Design growth marketing share, referral, collaboration, and UGC mechanics that compound." />
                <Feature title="Performance Alignment" desc="Make paid channels amplifiers — not life support — by aligning creative with in‑product value." />
                <Feature title="Team Enablement" desc="Practical leadership, clear playbooks, and repeatable operating rhythms that empower your team to sustain growth independently." />
              </div>
            </Container>
          </Section>

          {/* Method */}
          <Section id="method">
            <Container className="py-12 sm:py-16">
              <div className="mb-6 flex items-center gap-3">
                <Badge>How I Work</Badge>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h4 className="text-lg font-semibold">1 · Diagnose</h4>
                  <p className="mt-2 text-sm text-gray-600">Map the value loop. Identify where growth is stuck across product, UX, messaging, funnel, and ops.</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h4 className="text-lg font-semibold">2 · Architect</h4>
                  <p className="mt-2 text-sm text-gray-600">Design a focused growth system aligned to revenue goals and team capacity.</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h4 className="text-lg font-semibold">3 · Lead</h4>
                  <p className="mt-2 text-sm text-gray-600">Partner with your team to execute, iterate, and align cross‑functionally.</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h4 className="text-lg font-semibold">4 · Scale</h4>
                  <p className="mt-2 text-sm text-gray-600">Make growth repeatable. Paid becomes an accelerator, not a crutch.</p>
                </div>
              </div>
            </Container>
          </Section>

          {/* Case Example */}
          <Section id="case">
            <Container className="py-12 sm:py-16">
              <div className="mb-6 flex items-center gap-3">
                <Badge>Growth Case Example</Badge>
              </div>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold">SaaS Productivity Platform (Growth Marketing)</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                    <li>Low activation & inconsistent retention; growth overly dependent on paid.</li>
                    <li>Mapped aha‑moment, rebuilt onboarding, added in‑product collaboration invites.</li>
                    <li>Shifted messaging to value narrative; aligned creative with product experience.</li>
                  </ul>
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <Pill>Time‑to‑value ↓</Pill>
                    <Pill>Retention ↑</Pill>
                    <Pill>CAC efficiency ↑</Pill>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">Result: growth moved from push → pull; product began to carry acquisition and expansion.</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold">E‑commerce Replatform + Narrative</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                    <li>Confused value story; high bounce; repeat low.</li>
                    <li>Rewrote narrative, simplified UX, launched lifecycle journeys.</li>
                    <li>Introduced UGC & referral triggers; ad creative synced to first‑value moments.</li>
                  </ul>
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <Pill>Conversion ↑</Pill>
                    <Pill>Repeat rate ↑</Pill>
                    <Pill>Blended ROAS ↑</Pill>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">Result: healthier revenue mix with compounding organic & owned growth.</p>
                </div>
              </div>
            </Container>
          </Section>

          {/* About */}
          <Section id="about">
            <Container className="py-12 sm:py-16">
              <div className="mb-6 flex items-center gap-3">
                <Badge>About</Badge>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
                <div className="md:col-span-3">
                  <h2 className="text-2xl font-bold">Warm authority. Calm execution. High‑leverage clarity.</h2>
                  <p className="mt-3 text-gray-700">
                    I&apos;ve led growth across global corporations, challenger brands, and founder‑led teams. Different scales, same truth: growth happens when a brand knows who it is, who it serves, and how to deliver value consistently inside the product.
                  </p>
                  <p className="mt-3 text-gray-700">
                    I don&apos;t replace your team — I level it up. Strategic and hands‑on, I build systems and rituals so growth outlives me.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Pill>Growth Marketing Strategy</Pill>
                    <Pill>Activation & Onboarding</Pill>
                    <Pill>Lifecycle & Retention</Pill>
                    <Pill>Growth Loops</Pill>
                    <Pill>Creative x Product</Pill>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h4 className="text-lg font-semibold">Expertise Snapshot</h4>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>SaaS / E-com / CPG | Consumer + B2B</li>
                      <li>Narrative → Product activation</li>
                      <li>Data x Creative</li>
                      <li>Exec-ready clarity</li>
                      <li>Playbooks & enablement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          {/* Contact */}
          <Section id="contact">
            <Container className="py-12 sm:py-16">
              <div className="mb-6 flex items-center gap-3">
                <Badge>Work With Me</Badge>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold">Start with a 30‑minute call</h3>
                  <p className="mt-2 text-sm text-gray-700">No pressure, no pitch — just clarity on where growth is stuck and what to do next.</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-black">
                      Book a discovery call <Send className="h-4 w-4" />
                    </a>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                      Email me <Mail className="h-4 w-4" />
                    </a>
                    <a href={CONTACT_WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                      WhatsApp <MessageCircle className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="mt-6 space-y-3 border-t border-gray-100 pt-6">
                    <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-sm text-gray-700 hover:text-gray-900 transition-colors">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span>{CONTACT_EMAIL}</span>
                    </a>
                    <a href={CONTACT_LINKEDIN} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-gray-700 hover:text-gray-900 transition-colors">
                      <Linkedin className="h-4 w-4 text-gray-400" />
                      <span>LinkedIn</span>
                    </a>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span>{CONTACT_PHONE}</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h4 className="text-lg font-semibold">Ideal fits</h4>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                    <li>Growth Marketing or growth marketing‑curious teams ready to reduce paid‑dependence</li>
                    <li>Clear product value with messy narrative or onboarding</li>
                    <li>Leaders who want repeatable, not accidental, growth</li>
                  </ul>
                  <h4 className="mt-6 text-lg font-semibold">Engagement modes</h4>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                    <li>Fractional Growth Lead (part‑time leadership)</li>
                    <li>90‑Day Growth Architecture Sprint</li>
                    <li>On‑call Advisory (for founders/CMOs)</li>
                  </ul>
                </div>
              </div>
            </Container>
          </Section>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white">
          <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Ferhan Sahin. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#privacy" className="text-gray-600 hover:text-gray-900">Privacy</a>
              <a href="#terms" className="text-gray-600 hover:text-gray-900">Terms</a>
            </div>
          </Container>
        </footer>
      </div>
    </>
  );
}
