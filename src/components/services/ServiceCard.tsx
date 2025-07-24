// src/components/services/ServiceCard.tsx
import React from 'react';
import { Service } from '../../types/service.types';

interface ServiceCardProps {
  service: Service;
  onSelect?: (service: Service) => void;
  selected?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect, selected = false }) => {
  return (
    <div
      onClick={() => onSelect && onSelect(service)}
      className={`border rounded p-4 cursor-pointer transition-shadow ${
        selected ? 'shadow-lg border-blue-500 bg-blue-50' : 'hover:shadow-md'
      }`}
    >
      <h3 className="text-lg font-semibold">{service.name}</h3>
      <p className="text-gray-600">{service.description}</p>
      <p className="mt-2 font-bold">${service.price.toFixed(2)}</p>
    </div>
  );
};

export default ServiceCard;
