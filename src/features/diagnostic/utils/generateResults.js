export const calculateStrategicScore = (answers) => {
  const scores = {
    vision: 0,
    marketPosition: 0,
    execution: 0,
    resources: 0,
    innovation: 0
  };

  // Calcul des scores par catégorie
  if (answers.vision_clarity) {
    scores.vision += (6 - answers.vision_clarity) * 20; // Inversion car question négative
  }

  if (answers.differentiation) {
    scores.marketPosition += (6 - answers.differentiation) * 20;
  }

  // Autres calculs de scores...

  return scores;
};

export const generateRecommendations = (scores) => {
  const recommendations = [];

  // Vision
  if (scores.vision < 60) {
    recommendations.push({
      category: 'Vision',
      priority: 'Haute',
      title: 'Définition de la vision stratégique',
      description: 'Votre entreprise bénéficierait d\'une vision stratégique plus claire et mieux partagée.',
      actions: [
        'Organiser des ateliers de réflexion stratégique',
        'Définir des objectifs SMART à 3-5 ans',
        'Implémenter un processus de communication de la vision'
      ]
    });
  }

  // Position sur le marché
  if (scores.marketPosition < 60) {
    recommendations.push({
      category: 'Position Marché',
      priority: 'Haute',
      title: 'Amélioration du positionnement',
      description: 'Votre positionnement sur le marché pourrait être renforcé.',
      actions: [
        'Réaliser une analyse concurrentielle approfondie',
        'Identifier vos avantages compétitifs uniques',
        'Développer une proposition de valeur différenciante'
      ]
    });
  }

  // Autres recommandations...

  return recommendations;
};

export const generateActionPlan = (recommendations) => {
  return recommendations.map(rec => ({
    ...rec,
    timeline: rec.priority === 'Haute' ? '1-3 mois' : '3-6 mois',
    resources: [
      'Support consulting',
      'Ateliers de travail',
      'Outils d\'analyse'
    ],
    expectedOutcomes: [
      'Amélioration mesurable des KPIs',
      'Meilleure alignement stratégique',
      'Augmentation de la performance'
    ]
  }));
};

export const generatePDF = async (answers, scores, recommendations, actionPlan) => {
  // Logique de génération du PDF
};
