// Configuration des questions pour chaque version du diagnostic

export const diagnosticQuestions = {
  short: [
    {
      id: 'time_management',
      category: 'challenges',
      type: 'scale',
      question: 'À quelle fréquence vous sentez-vous dépassé par vos tâches quotidiennes ?',
      options: [
        { value: 1, label: 'Rarement' },
        { value: 2, label: 'Parfois' },
        { value: 3, label: 'Souvent' },
        { value: 4, label: 'Très souvent' },
        { value: 5, label: 'Toujours' }
      ]
    },
    {
      id: 'priority',
      category: 'challenges',
      type: 'multiple',
      question: 'Quels sont vos principaux défis en matière de gestion du temps ?',
      options: [
        'Définir les priorités',
        'Gérer les interruptions',
        'Respecter les délais',
        'Planifier efficacement',
        'Déléguer les tâches'
      ]
    },
    {
      id: 'stress_level',
      category: 'wellbeing',
      type: 'scale',
      question: 'Quel est votre niveau de stress lié à la gestion du temps ?',
      options: [
        { value: 1, label: 'Très bas' },
        { value: 2, label: 'Bas' },
        { value: 3, label: 'Moyen' },
        { value: 4, label: 'Élevé' },
        { value: 5, label: 'Très élevé' }
      ]
    }
  ],
  medium: [
    // Questions version courte +
    {
      id: 'tools_usage',
      category: 'tools',
      type: 'multiple',
      question: 'Quels outils utilisez-vous actuellement pour gérer votre temps ?',
      options: [
        'Agenda papier',
        'Calendrier numérique',
        'Applications de gestion de tâches',
        'Notes et rappels',
        'Aucun outil spécifique'
      ]
    },
    {
      id: 'productivity_peak',
      category: 'habits',
      type: 'single',
      question: 'À quel moment de la journée êtes-vous le plus productif ?',
      options: [
        'Tôt le matin',
        'Milieu de matinée',
        'Après-midi',
        'Fin de journée',
        'Soirée'
      ]
    },
    {
      id: 'interruptions',
      category: 'challenges',
      type: 'frequency',
      question: 'Combien de fois par jour êtes-vous interrompu dans votre travail ?',
      options: [
        '0-5 fois',
        '6-10 fois',
        '11-15 fois',
        '16-20 fois',
        'Plus de 20 fois'
      ]
    }
  ],
  long: [
    // Questions versions courte et moyenne +
    {
      id: 'meeting_efficiency',
      category: 'meetings',
      type: 'scale',
      question: 'Comment évaluez-vous l\'efficacité de vos réunions ?',
      options: [
        { value: 1, label: 'Très inefficaces' },
        { value: 2, label: 'Peu efficaces' },
        { value: 3, label: 'Moyennement efficaces' },
        { value: 4, label: 'Efficaces' },
        { value: 5, label: 'Très efficaces' }
      ]
    },
    {
      id: 'delegation_skills',
      category: 'skills',
      type: 'scale',
      question: 'Comment évaluez-vous votre capacité à déléguer ?',
      options: [
        { value: 1, label: 'Très faible' },
        { value: 2, label: 'Faible' },
        { value: 3, label: 'Moyenne' },
        { value: 4, label: 'Bonne' },
        { value: 5, label: 'Excellente' }
      ]
    },
    {
      id: 'training_needs',
      category: 'development',
      type: 'multiple',
      question: 'Dans quels domaines souhaitez-vous vous améliorer ?',
      options: [
        'Planification stratégique',
        'Gestion des priorités',
        'Communication efficace',
        'Délégation',
        'Gestion du stress',
        'Utilisation d\'outils numériques'
      ]
    }
  ]
};
