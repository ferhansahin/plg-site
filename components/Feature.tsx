import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface FeatureProps {
  title: string;
  desc: string;
}

export const Feature: React.FC<FeatureProps> = ({ title, desc }) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
    <div className="mb-3 flex items-center gap-2 text-gray-900">
      <CheckCircle2 className="h-5 w-5" />
      <h4 className="text-base font-semibold">{title}</h4>
    </div>
    <p className="text-sm leading-relaxed text-gray-600">{desc}</p>
  </div>
);
