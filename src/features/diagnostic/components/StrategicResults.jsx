import React from 'react';
import { calculateStrategicScore, generateRecommendations, generateActionPlan } from '../utils/generateResults';

const StrategicResults = ({ answers, guid }) => {
  const scores = calculateStrategicScore(answers);
  const recommendations = generateRecommendations(scores);
  const actionPlan = generateActionPlan(recommendations);

  const handleDownloadPDF = async () => {
    const pdfBlob = await generatePDF(answers, scores, recommendations, actionPlan);
    const url = window.URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `diagnostic-strategique-${guid}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const ScoreCard = ({ category, score }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{category}</h3>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
          <div
            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${score >= 70 ? 'bg-green-500' : score >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
            style={{ width: `${score}%` }}
          />
        </div>
        <span className="text-xl font-bold">{score}%</span>
      </div>
    </div>
  );

  const RecommendationCard = ({ recommendation }) => (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">{recommendation.title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          recommendation.priority === 'Haute' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {recommendation.priority}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{recommendation.description}</p>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Actions recommandées :</h4>
          <ul className="list-disc pl-5 space-y-1">
            {recommendation.actions.map((action, index) => (
              <li key={index} className="text-gray-600">{action}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Résultats du diagnostic stratégique</h2>
        <button
          onClick={handleDownloadPDF}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
        >
          Télécharger le PDF
        </button>
      </div>

      {/* Scores */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {Object.entries(scores).map(([category, score]) => (
          <ScoreCard key={category} category={category} score={score} />
        ))}
      </div>

      {/* Recommendations */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold mb-4">Recommandations</h3>
        {recommendations.map((rec, index) => (
          <RecommendationCard key={index} recommendation={rec} />
        ))}
      </div>

      {/* Plan d'action */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Plan d'action proposé</h3>
        <div className="space-y-4">
          {actionPlan.map((action, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium">{action.title}</h4>
                <span className="text-sm text-gray-500">{action.timeline}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium mb-2">Ressources nécessaires</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    {action.resources.map((resource, idx) => (
                      <li key={idx} className="text-gray-600">{resource}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Résultats attendus</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    {action.expectedOutcomes.map((outcome, idx) => (
                      <li key={idx} className="text-gray-600">{outcome}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrategicResults;