import React, { useState } from 'react';
import { diagnosticQuestions } from '../config/questions';

const DiagnosticForm = ({ version = 'short', onSubmit }) => {
  const [answers, setAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  const questions = diagnosticQuestions[version];
  const totalSteps = questions.length;

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onSubmit(answers);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderQuestion = (question) => {
    switch (question.type) {
      case 'scale':
        return (
          <div className="space-y-4">
            {question.options.map(option => (
              <label key={option.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={question.id}
                  value={option.value}
                  onChange={() => handleAnswer(question.id, option.value)}
                  checked={answers[question.id] === option.value}
                  className="form-radio"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        );

      case 'multiple':
        return (
          <div className="space-y-4">
            {question.options.map(option => (
              <label key={option} className="flex items-center space-x-2">
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
                  className="form-checkbox"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  const currentQuestion = questions[currentStep];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Question {currentStep + 1} sur {totalSteps}
          </h2>
          <span className="text-sm text-gray-500">
            {Math.round(((currentStep + 1) / totalSteps) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary rounded-full h-2 transition-all duration-300"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          {currentQuestion.question}
        </h3>
        {renderQuestion(currentQuestion)}
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="px-4 py-2 text-gray-600 bg-gray-100 rounded disabled:opacity-50"
        >
          Précédent
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 text-white bg-primary rounded hover:bg-primary-dark"
        >
          {currentStep === totalSteps - 1 ? 'Terminer' : 'Suivant'}
        </button>
      </div>
    </div>
  );
};

export default DiagnosticForm;