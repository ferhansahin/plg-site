import React from 'react';

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm font-medium text-gray-700 hover:text-gray-900"
  >
    {label}
  </a>
);
