import React from 'react';
import * as Icons from 'lucide-react';

const ServiceCard = ({ service, onClick }) => {
  const Icon = Icons[service.iconType] || Icons.FileText;

  return (
    <div 
      onClick={onClick}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex items-center space-x-4 mb-4">
        <Icon className="w-8 h-8 text-primary" />
        <h3 className="text-xl font-semibold text-primary">
          {service.title}
        </h3>
      </div>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <div className="text-sm text-secondary">
        {service.duration}
      </div>
    </div>
  );
};

export default ServiceCard;