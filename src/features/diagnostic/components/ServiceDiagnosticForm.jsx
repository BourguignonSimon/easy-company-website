import React, { useState } from 'react';
import { diagnosticConfig } from '../config/allServices';

const ServiceDiagnosticForm = ({ serviceId, version = 'short', onSubmit }) => {
  const [answers, setAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  // Récupérer la configuration du service
  const serviceConfig = diagnosticConfig[serviceId];
  if (!serviceConfig) return null;

  const questions = serviceConfig.versions[version];
  const totalSteps = questions.length;

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const renderQuestion = (question) => {
    switch (question.type) {
      case 'scale':
        return (
          <div className="space-y-4">
            <p className="text-lg font-medium text-gray-800 mb-4">
              {question.question}
            </p>
            <div className="grid grid-cols-5 gap-4">
              {question.options.map(option => (
                <label
                  key={option.value}
                  className="flex flex-col items-center p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors"
                >
                  <input
                    type="radio"
                    name={question.id}
                    value={option.value}
                    onChange={() => handleAnswer(question.id, option.value)}
                    checked={answers[question.id] === option.value}
                    className="sr-only"
                  />
                  <span className="text-2xl font-bold mb-2">{option.value}</span>
                  <span className="text-sm text-center">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 'text':
        return (
          <div className="space-y-4">
            <p className="text-lg font-medium text-gray-800 mb-4">
              {question.question}
            </p>
            <textarea
              value={answers[question.id] || ''}
              onChange={(e) => handleAnswer(question.id, e.target.value)}
              className="w-full p-4 border rounded-lg resize-y"
              rows={4}
              placeholder="Votre réponse..."
            />
          </div>
        );

      case 'multiple':
        return (
          <div className="space-y-4">
            <p className="text-lg font-medium text-gray-800 mb-4">
              {question.question}
            </p>
            <div className="space-y-2">
              {question.options.map(option => (
                <label
                  key={option}
                  className="flex items-center space-x-3 p-3 border rounded-lg hover:border-primary cursor-pointer transition-colors"
                >
                  <input
                    type="checkbox"
                    value={option}
                    onChange={(e) => {
                      const currentAnswers = answers[question.id] || [];
                      const newAnswers = e.target.checked
                        ? [...currentAnswers, option]
                        : currentAnswers.filter(a => a !== option);
                      handleAnswer(question.id, newAnswers);
                    }}
                    checked={(answers[question.id] || []).includes(option)}
                    className="form-checkbox h-5 w-5 text-primary"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {serviceConfig.title}
        </h2>
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-600">
            Question {currentStep + 1} sur {totalSteps}
          </p>
          <div className="text-sm text-gray-500">
            Version {version}
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary rounded-full h-2 transition-all duration-300"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {renderQuestion(questions[currentStep])}

      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
          className="px-6 py-2 bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition-colors"
        >
          Précédent
        </button>

        <button
          onClick={() => {
            if (currentStep === totalSteps - 1) {
              onSubmit({
                serviceId,
                version,
                answers
              });
            } else {
              setCurrentStep(prev => prev + 1);
            }
          }}
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          {currentStep === totalSteps - 1 ? 'Terminer' : 'Suivant'}
        </button>
      </div>
    </div>
  );
};

export default ServiceDiagnosticForm;