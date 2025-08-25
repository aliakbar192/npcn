'use client';

import React, { useEffect, useState } from 'react';
import { services } from '@/data/servicesData';

export default function DebugServices() {
  const [servicesData, setServicesData] = useState<any[]>([]);
  
  useEffect(() => {
    console.log('Services data:', services);
    setServicesData(services || []);
  }, []);
  
  return (
    <div className="p-8 bg-white">
      <h1 className="text-2xl font-bold mb-4">Debug Services</h1>
      
      <div className="mb-4">
        <p>Services Count: {servicesData.length}</p>
      </div>
      
      <div className="border p-4 bg-gray-100">
        <pre>{JSON.stringify(servicesData, null, 2)}</pre>
      </div>
    </div>
  );
}
