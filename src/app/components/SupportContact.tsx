'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SupportContactProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  value: string;
  availabilityText: string;
  action: string;
  actionText: string;
}

const SupportContact: React.FC<SupportContactProps> = ({
  id,
  title,
  description,
  icon,
  value,
  availabilityText,
  action,
  actionText,
}) => {
  return (
    <div className="flex flex-col h-full bg-gray-800 rounded-xl shadow-md border border-gray-700 p-6 transition-all duration-300 hover:shadow-lg hover:border-[#00b050]/30">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-[#00b050]/10 flex items-center justify-center mr-4">
          <Image
            src={icon}
            alt={title}
            width={24}
            height={24}
            className="text-[#00b050]"
          />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      
      <p className="text-gray-400 mb-4">{description}</p>
      
      <div className="mb-4">
        <p className="text-lg font-medium text-[#00b050]">{value}</p>
        <p className="text-sm text-gray-500">{availabilityText}</p>
      </div>
      
      <div className="mt-auto">
        <Link 
          href={action}
          className="inline-flex items-center justify-center px-4 py-2 bg-[#009245] hover:bg-[#008a40] text-white font-medium rounded-lg transition-colors duration-200 w-full"
        >
          {actionText}
        </Link>
      </div>
    </div>
  );
};

export default SupportContact;
