import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, children }) => (
  <section id={id} className="scroll-mt-24" aria-label={id}>
    {children}
  </section>
);
