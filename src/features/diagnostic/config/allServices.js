// Configuration des questionnaires pour tous les services

export const diagnosticQuestions = {
  // Diagnostic organisationnel
  diagnostic: {
    id: 'diagnostic',
    title: 'Diagnostic organisationnel',
    versions: {
      short: [
        {
          id: 'structure_clarity',
          type: 'scale',
          question: 'Les rôles et responsabilités sont clairement définis dans l\'organisation',
          options: [
            { value: 1, label: 'Pas du tout d\'accord' },
            { value: 2, label: 'Plutôt pas d\'accord' },
            { value: 3, label: 'Neutre' },
            { value: 4, label: 'Plutôt d\'accord' },
            { value: 5, label: 'Tout à fait d\'accord' }
          ]
        },
        {
          id: 'process_efficiency',
          type: 'scale',
          question: 'Nos processus internes sont efficaces',
          options: [
            { value: 1, label: 'Pas du tout d\'accord' },
            { value: 2, label: 'Plutôt pas d\'accord' },
            { value: 3, label: 'Neutre' },
            { value: 4, label: 'Plutôt d\'accord' },
            { value: 5, label: 'Tout à fait d\'accord' }
          ]
        },
        {
          id: 'operational_costs',
          type: 'scale',
          question: 'Nos coûts opérationnels sont maîtrisés',
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
        {
          id: 'management_tools',
          type: 'multiple',
          question: 'Quels outils de gestion utilisez-vous ?',
          options: [
            'ERP',
            'CRM',
            'Outils collaboratifs',
            'Systèmes de reporting',
            'Outils de gestion de projet'
          ]
        },
        {
          id: 'challenges',
          type: 'text',
          question: 'Quels sont vos principaux défis organisationnels ?'
        }
      ],
      long: [
        {
          id: 'company_info',
          type: 'company_details',
          fields: [
            { id: 'employees', label: 'Nombre d\'employés', type: 'number' },
            { id: 'departments', label: 'Nombre de départements', type: 'number' },
            { id: 'locations', label: 'Nombre de sites', type: 'number' }
          ]
        },
        {
          id: 'swot',
          type: 'swot_analysis',
          sections: [
            { id: 'strengths', label: 'Forces' },
            { id: 'weaknesses', label: 'Faiblesses' },
            { id: 'opportunities', label: 'Opportunités' },
            { id: 'threats', label: 'Menaces' }
          ]
        }
      ]
    }
  },

  // Coaching en leadership
  leadership: {
    id: 'leadership',
    title: 'Coaching en leadership',
    versions: {
      short: [
        {
          id: 'team_motivation',
          type: 'scale',
          question: 'Je parviens à motiver efficacement mon équipe',
          options: [
            { value: 1, label: 'Jamais' },
            { value: 2, label: 'Rarement' },
            { value: 3, label: 'Parfois' },
            { value: 4, label: 'Souvent' },
            { value: 5, label: 'Toujours' }
          ]
        },
        {
          id: 'conflict_management',
          type: 'scale',
          question: 'Je gère efficacement les conflits au sein de l\'\u00e9quipe',
          options: [
            { value: 1, label: 'Jamais' },
            { value: 2, label: 'Rarement' },
            { value: 3, label: 'Parfois' },
            { value: 4, label: 'Souvent' },
            { value: 5, label: 'Toujours' }
          ]
        }
      ],
      medium: [
        {
          id: 'leadership_style',
          type: 'multiple',
          question: 'Quel style de leadership adoptez-vous principalement ?',
          options: [
            'Directif',
            'Participatif',
            'Délégatif',
            'Coaching',
            'Transformationnel'
          ]
        }
      ],
      long: [
        {
          id: 'team_challenges',
          type: 'text',
          question: 'Quels sont les principaux défis de leadership que vous rencontrez ?'
        },
        {
          id: 'development_needs',
          type: 'multiple',
          question: 'Dans quels domaines souhaitez-vous vous améliorer ?',
          options: [
            'Communication',
            'Gestion des conflits',
            'Prise de décision',
            'Délégation',
            'Motivation d\'\u00e9quipe'
          ]
        }
      ]
    }
  },

  // Gestion du temps
  timeManagement: {
    id: 'timeManagement',
    title: 'Formation en gestion du temps',
    versions: {
      short: [
        {
          id: 'time_efficiency',
          type: 'scale',
          question: 'Je gère efficacement mon temps au quotidien',
          options: [
            { value: 1, label: 'Jamais' },
            { value: 2, label: 'Rarement' },
            { value: 3, label: 'Parfois' },
            { value: 4, label: 'Souvent' },
            { value: 5, label: 'Toujours' }
          ]
        },
        {
          id: 'priority_management',
          type: 'scale',
          question: 'Je sais prioriser mes tâches efficacement',
          options: [
            { value: 1, label: 'Jamais' },
            { value: 2, label: 'Rarement' },
            { value: 3, label: 'Parfois' },
            { value: 4, label: 'Souvent' },
            { value: 5, label: 'Toujours' }
          ]
        }
      ],
      medium: [
        {
          id: 'time_wasters',
          type: 'multiple',
          question: 'Quels sont vos principaux "voleurs de temps" ?',
          options: [
            'Réunions improductives',
            'Interruptions fréquentes',
            'Emails excessifs',
            'Procrastination',
            'Mauvaise planification'
          ]
        }
      ],
      long: [
        {
          id: 'productivity_analysis',
          type: 'text',
          question: 'Décrivez votre routine quotidienne et identifiez les moments de forte/faible productivité'
        },
        {
          id: 'improvement_areas',
          type: 'multiple',
          question: 'Dans quels domaines souhaitez-vous améliorer votre gestion du temps ?',
          options: [
            'Planification',
            'Priorisation',
            'Délégation',
            'Gestion des interruptions',
            'Organisation personnelle'
          ]
        }
      ]
    }
  }

  // ... Continuer avec les autres services
};
