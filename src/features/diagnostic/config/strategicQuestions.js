// Configuration du questionnaire stratégique

export const strategicQuestions = {
  short: [
    {
      id: 'vision_clarity',
      type: 'scale',
      question: 'Notre entreprise manque d\'une vision claire et partagée pour les 3-5 prochaines années.',
      options: [
        { value: 1, label: 'Pas du tout d\'accord' },
        { value: 2, label: 'Plutôt pas d\'accord' },
        { value: 3, label: 'Neutre' },
        { value: 4, label: 'Plutôt d\'accord' },
        { value: 5, label: 'Tout à fait d\'accord' }
      ]
    },
    {
      id: 'differentiation',
      type: 'scale',
      question: 'Nous avons des difficultés à nous différencier de nos concurrents sur le marché.',
      options: [
        { value: 1, label: 'Pas du tout d\'accord' },
        { value: 2, label: 'Plutôt pas d\'accord' },
        { value: 3, label: 'Neutre' },
        { value: 4, label: 'Plutôt d\'accord' },
        { value: 5, label: 'Tout à fait d\'accord' }
      ]
    },
    {
      id: 'objectives_clarity',
      type: 'scale',
      question: 'Nos objectifs stratégiques actuels manquent de précision ou de mesurabilité.',
      options: [
        { value: 1, label: 'Pas du tout d\'accord' },
        { value: 2, label: 'Plutôt pas d\'accord' },
        { value: 3, label: 'Neutre' },
        { value: 4, label: 'Plutôt d\'accord' },
        { value: 5, label: 'Tout à fait d\'accord' }
      ]
    },
    {
      id: 'market_adaptation',
      type: 'scale',
      question: 'Nous peinons à anticiper et à nous adapter aux évolutions de notre marché.',
      options: [
        { value: 1, label: 'Pas du tout d\'accord' },
        { value: 2, label: 'Plutôt pas d\'accord' },
        { value: 3, label: 'Neutre' },
        { value: 4, label: 'Plutôt d\'accord' },
        { value: 5, label: 'Tout à fait d\'accord' }
      ]
    },
    {
      id: 'resource_allocation',
      type: 'scale',
      question: 'L\'allocation de nos ressources n\'est pas optimalement alignée avec nos objectifs stratégiques.',
      options: [
        { value: 1, label: 'Pas du tout d\'accord' },
        { value: 2, label: 'Plutôt pas d\'accord' },
        { value: 3, label: 'Neutre' },
        { value: 4, label: 'Plutôt d\'accord' },
        { value: 5, label: 'Tout à fait d\'accord' }
      ]
    }
  ],
  medium: [
    // Questions version courte +
    {
      id: 'kpis_relevance',
      type: 'scale',
      question: 'Nous suivons régulièrement des KPIs pertinents.',
      options: [
        { value: 1, label: 'Pas du tout d\'accord' },
        { value: 2, label: 'Plutôt pas d\'accord' },
        { value: 3, label: 'Neutre' },
        { value: 4, label: 'Plutôt d\'accord' },
        { value: 5, label: 'Tout à fait d\'accord' }
      ]
    },
    {
      id: 'internal_communication',
      type: 'scale',
      question: 'Notre stratégie est bien communiquée en interne.',
      options: [
        { value: 1, label: 'Pas du tout d\'accord' },
        { value: 2, label: 'Plutôt pas d\'accord' },
        { value: 3, label: 'Neutre' },
        { value: 4, label: 'Plutôt d\'accord' },
        { value: 5, label: 'Tout à fait d\'accord' }
      ]
    },
    {
      id: 'opportunities',
      type: 'scale',
      question: 'Nous identifions régulièrement de nouvelles opportunités.',
      options: [
        { value: 1, label: 'Pas du tout d\'accord' },
        { value: 2, label: 'Plutôt pas d\'accord' },
        { value: 3, label: 'Neutre' },
        { value: 4, label: 'Plutôt d\'accord' },
        { value: 5, label: 'Tout à fait d\'accord' }
      ]
    },
    {
      id: 'action_plan',
      type: 'scale',
      question: 'Notre plan d\'action est clair et réalisable.',
      options: [
        { value: 1, label: 'Pas du tout d\'accord' },
        { value: 2, label: 'Plutôt pas d\'accord' },
        { value: 3, label: 'Neutre' },
        { value: 4, label: 'Plutôt d\'accord' },
        { value: 5, label: 'Tout à fait d\'accord' }
      ]
    },
    {
      id: 'strategic_challenge',
      type: 'text',
      question: 'Quel est votre plus grand défi stratégique actuel ?'
    },
    {
      id: 'growth_objectives',
      type: 'text',
      question: 'Quels sont vos principaux objectifs de croissance ?'
    }
  ],
  long: [
    // Questions versions courte et moyenne +
    {
      id: 'company_info',
      type: 'company_details',
      fields: [
        { id: 'sector', label: 'Secteur d\'activité', type: 'text' },
        { id: 'size', label: 'Taille de l\'entreprise (CA, effectifs)', type: 'text' },
        { id: 'market_position', label: 'Position actuelle sur le marché', type: 'text' },
        { id: 'competitors', label: 'Principaux concurrents', type: 'text' },
        { id: 'last_review', label: 'Dernière révision stratégique', type: 'date' },
        { id: 'horizon', label: 'Horizon stratégique visé', type: 'text' }
      ]
    },
    {
      id: 'swot',
      type: 'swot_analysis',
      sections: [
        { id: 'strengths', label: 'Forces', type: 'list' },
        { id: 'weaknesses', label: 'Faiblesses', type: 'list' },
        { id: 'opportunities', label: 'Opportunités', type: 'list' },
        { id: 'threats', label: 'Menaces', type: 'list' }
      ]
    },
    {
      id: 'strategic_challenges',
      type: 'text',
      question: 'Quels sont les trois principaux défis stratégiques de votre entreprise ?'
    },
    {
      id: 'competitive_position',
      type: 'text',
      question: 'Comment évaluez-vous votre position concurrentielle actuelle ?'
    },
    {
      id: 'development_obstacles',
      type: 'text',
      question: 'Quels sont les obstacles majeurs à votre développement ?'
    }
  ]
};
