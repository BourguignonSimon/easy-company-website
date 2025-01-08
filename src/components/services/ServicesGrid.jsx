import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';
import { services } from '../../data/services';

const ServicesGrid = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <ServiceCard 
            key={service.id}
            service={service}
            onClick={() => setSelectedService(service)}
          />
        ))}
      </div>

      <ServiceModal 
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
};

export default ServicesGrid;