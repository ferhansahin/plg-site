import React from 'react';
import { Sparkles } from 'lucide-react';

interface BadgeProps {
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
    <Sparkles className="h-3.5 w-3.5" /> {children}
  </span>
);
