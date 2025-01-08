import React, { useState } from 'react';
import { strategicQuestions } from '../config/strategicQuestions';

const StrategicDiagnosticForm = ({ version = 'short', onSubmit }) => {
  const [answers, setAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  const questions = strategicQuestions[version];
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
            <p className="text-lg font-medium text-gray-800 mb-4">{question.question}</p>
            <div className="grid grid-cols-5 gap-4">
              {question.options.map(option => (
                <label
                  key={option.value}
                  className="flex flex-col items-center p-4 border rounded-lg hover:border-primary cursor-pointer"
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
            <p className="text-lg font-medium text-gray-800 mb-4">{question.question}</p>
            <textarea
              value={answers[question.id] || ''}
              onChange={(e) => handleAnswer(question.id, e.target.value)}
              className="w-full p-4 border rounded-lg"
              rows={4}
            />
          </div>
        );

      case 'company_details':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Informations de l'entreprise</h3>
            {question.fields.map(field => (
              <div key={field.id} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  value={answers[field.id] || ''}
                  onChange={(e) => handleAnswer(field.id, e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
            ))}
          </div>
        );

      case 'swot_analysis':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Analyse SWOT</h3>
            <div className="grid grid-cols-2 gap-6">
              {question.sections.map(section => (
                <div key={section.id} className="space-y-4">
                  <h4 className="font-medium">{section.label}</h4>
                  <textarea
                    value={answers[section.id] || ''}
                    onChange={(e) => handleAnswer(section.id, e.target.value)}
                    className="w-full p-2 border rounded"
                    rows={4}
                    placeholder={`Listez vos ${section.label.toLowerCase()}...`}
                  />
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Render form navigation and progress
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      {renderQuestion(questions[currentStep])}
      
      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
          className="px-6 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
        >
          Précédent
        </button>
        
        <div className="text-sm text-gray-600">
          Question {currentStep + 1} sur {totalSteps}
        </div>
        
        <button
          onClick={() => {
            if (currentStep === totalSteps - 1) {
              onSubmit(answers);
            } else {
              setCurrentStep(prev => prev + 1);
            }
          }}
          className="px-6 py-2 bg-primary text-white rounded-lg"
        >
          {currentStep === totalSteps - 1 ? 'Terminer' : 'Suivant'}
        </button>
      </div>
    </div>
  );
};

export default StrategicDiagnosticForm;