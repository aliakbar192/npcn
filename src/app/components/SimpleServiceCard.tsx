'use client';

import React from 'react';
import { FiPackage, FiServer, FiShield, FiCloud, FiDatabase, FiAward, FiSettings, FiSmartphone } from 'react-icons/fi';

interface SimpleServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const iconMap = {
  package: <FiPackage className="w-6 h-6" />,
  server: <FiServer className="w-6 h-6" />,
  shield: <FiShield className="w-6 h-6" />,
  cloud: <FiCloud className="w-6 h-6" />,
  database: <FiDatabase className="w-6 h-6" />,
  award: <FiAward className="w-6 h-6" />,
  settings: <FiSettings className="w-6 h-6" />,
  smartphone: <FiSmartphone className="w-6 h-6" />,
};

export default function SimpleServiceCard({ title, description, icon }: SimpleServiceCardProps) {
  // Get icon from map or use a default
  const iconElement = iconMap[icon.toLowerCase() as keyof typeof iconMap] || 
                      <div className="text-2xl">{icon.charAt(0).toUpperCase()}</div>;
  
  return (
    <div className="h-full bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-700 hover:border-green-600">
      <div className="p-6 flex flex-col h-full">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-green-900/30 to-green-800/30 text-green-400 mb-4">
            {iconElement}
          </div>
          <h3 className="text-xl font-bold mb-2 text-white hover:text-green-400 transition-colors duration-300">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
}
