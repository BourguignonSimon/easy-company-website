// Configuration des questionnaires pour tous les services

export const diagnosticConfig = {
  // Diagnostic organisationnel
  organizational: {
    id: 'organizational',
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
        }
        // Autres questions...
      ],
      medium: [
        // Questions supplémentaires...
      ],
      long: [
        // Version complète...
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
          question: 'Je parviens facilement à motiver mon équipe',
          options: [
            { value: 1, label: 'Jamais' },
            { value: 2, label: 'Rarement' },
            { value: 3, label: 'Parfois' },
            { value: 4, label: 'Souvent' },
            { value: 5, label: 'Toujours' }
          ]
        }
        // Autres questions...
      ],
      medium: [],
      long: []
    }
  },

  // Formation en gestion du temps
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
        }
      ],
      medium: [],
      long: []
    }
  },

  // Coaching en développement personnel
  personalDevelopment: {
    id: 'personalDevelopment',
    title: 'Coaching en développement personnel',
    versions: {
      short: [
        {
          id: 'self_awareness',
          type: 'scale',
          question: 'Je connais bien mes forces et mes points d\'amélioration',
          options: [
            { value: 1, label: 'Pas du tout' },
            { value: 2, label: 'Un peu' },
            { value: 3, label: 'Moyennement' },
            { value: 4, label: 'Bien' },
            { value: 5, label: 'Très bien' }
          ]
        }
      ],
      medium: [],
      long: []
    }
  },

  // Plans financiers
  financialPlanning: {
    id: 'financialPlanning',
    title: 'Mise en place de plans financiers',
    versions: {
      short: [
        {
          id: 'financial_clarity',
          type: 'scale',
          question: 'Nous avons une vision claire de notre situation financière',
          options: [
            { value: 1, label: 'Pas du tout' },
            { value: 2, label: 'Un peu' },
            { value: 3, label: 'Moyennement' },
            { value: 4, label: 'Bien' },
            { value: 5, label: 'Très bien' }
          ]
        }
      ],
      medium: [],
      long: []
    }
  }

  // Continuer avec les autres services...
};
