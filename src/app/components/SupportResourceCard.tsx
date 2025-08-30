'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SupportResourceCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

const SupportResourceCard: React.FC<SupportResourceCardProps> = ({
  id,
  title,
  description,
  icon,
  link,
}) => {
  return (
    <Link
      href={link}
      className="block h-full bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-6 transition-all duration-300 hover:shadow-lg hover:border-[#009245]/30 dark:hover:border-[#00b050]/30 hover:transform hover:-translate-y-1"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-[#009245]/10 dark:bg-[#00b050]/10 flex items-center justify-center mr-4">
          <Image
            src={icon}
            alt={title}
            width={24}
            height={24}
            className="text-[#009245] dark:text-[#00b050]"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
      
      <div className="mt-4 flex justify-end">
        <span className="text-[#009245] dark:text-[#00b050] font-medium">
          Learn more →
        </span>
      </div>
    </Link>
  );
};

export default SupportResourceCard;
