// src/pages/services/ServiceList.tsx
import React, { useState } from 'react';
import Loader from '../../components/common/Loader';
import ServiceCard from '../../components/services/ServiceCard';
import { useServices } from '../../hooks/useServices';
import { Service } from '../../types/service.types';

const ServiceList: React.FC = () => {
  const { data: services, isLoading } = useServices();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  if (isLoading) return <Loader />;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Laundry Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services?.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            selected={selectedService?.id === service.id}
            onSelect={setSelectedService}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
