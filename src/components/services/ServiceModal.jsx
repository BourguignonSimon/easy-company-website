import React from 'react';
import * as Icons from 'lucide-react';

const ServiceModal = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              {Icons[service.iconType] && 
                <Icons[service.iconType] className="w-8 h-8 text-primary" />
              }
              <h2 className="text-2xl font-bold text-primary">
                {service.title}
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-secondary mb-4 flex items-center">
                <Icons.Target className="w-5 h-5 mr-2" />
                Objectifs
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {service.objectives.map((objective, index) => (
                  <li key={index} className="text-gray-600">{objective}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-secondary mb-4 flex items-center">
                <Icons.Clock className="w-5 h-5 mr-2" />
                Planning
              </h3>
              <p className="text-gray-600 ml-4">{service.timing}</p>
            </div>

            <div>
              <h3 className="font-semibold text-secondary mb-4 flex items-center">
                <Icons.FileCheck className="w-5 h-5 mr-2" />
                Prérequis
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {service.prerequisites.map((prerequisite, index) => (
                  <li key={index} className="text-gray-600">{prerequisite}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;