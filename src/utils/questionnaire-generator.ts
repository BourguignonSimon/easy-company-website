// Questionnaire Generation Framework

// Enum for Service Types
enum ServiceType {
  STRATEGIC_ASSESSMENT = 'strategic',
  TIME_MANAGEMENT = 'timeManagement',
  LEADERSHIP_DEVELOPMENT = 'leadershipDev',
  TEAM_PERFORMANCE = 'teamPerformance',
  // Add more service types
}

// Enum for Question Depths
enum QuestionnaireDepth {
  SHORT = 'short',
  MEDIUM = 'medium',
  LONG = 'long'
}

// Question Types
type ScaleQuestion = {
  id: string;
  text: string;
  category: string;
  type: 'scale';
  minLabel: string;
  maxLabel: string;
}

type OpenEndedQuestion = {
  id: string;
  text: string;
  category: string;
  type: 'openEnded';
}

type Question = ScaleQuestion | OpenEndedQuestion;

// Questionnaire Structure
interface Questionnaire {
  id: string;
  serviceType: ServiceType;
  depth: QuestionnaireDepth;
  questions: Question[];
  contextualQuestions: string[];
  swotAnalysis: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };
}

// Question Bank Interface
interface QuestionBank {
  [ServiceType.STRATEGIC_ASSESSMENT]: {
    scaleQuestions: ScaleQuestion[];
    openEndedQuestions: OpenEndedQuestion[];
  };
  // Other service type question banks
}

// Questionnaire Generation Logic
class QuestionnaireGenerator {
  private questionBank: QuestionBank;

  constructor(questionBank: QuestionBank) {
    this.questionBank = questionBank;
  }

  generateQuestionnaire(
    serviceType: ServiceType, 
    depth: QuestionnaireDepth
  ): Questionnaire {
    const bank = this.questionBank[serviceType];
    
    // Select questions based on depth
    const questionCount = this.getQuestionCount(depth);
    
    const scaleQuestions = this.selectQuestions(
      bank.scaleQuestions, 
      questionCount / 2
    );
    
    const openEndedQuestions = this.selectQuestions(
      bank.openEndedQuestions, 
      questionCount / 2
    );

    return {
      id: this.generateUniqueId(),
      serviceType,
      depth,
      questions: [...scaleQuestions, ...openEndedQuestions],
      contextualQuestions: this.getContextualQuestions(serviceType),
      swotAnalysis: this.createEmptySWOTAnalysis()
    };
  }

  private getQuestionCount(depth: QuestionnaireDepth): number {
    switch (depth) {
      case QuestionnaireDepth.SHORT: return 5;
      case QuestionnaireDepth.MEDIUM: return 10;
      case QuestionnaireDepth.LONG: return 20;
      default: return 10;
    }
  }

  private selectQuestions(
    questions: Question[], 
    count: number
  ): Question[] {
    // Randomize and select questions
    return questions
      .sort(() => 0.5 - Math.random())
      .slice(0, count);
  }

  private getContextualQuestions(
    serviceType: ServiceType
  ): string[] {
    // Define contextual questions per service type
    const contextualQuestionMap = {
      [ServiceType.STRATEGIC_ASSESSMENT]: [
        "What is your primary business challenge?",
        "What are your growth objectives?",
        "How do you define success?"
      ],
      // Add more service-specific contextual questions
    };

    return contextualQuestionMap[serviceType] || [];
  }

  private createEmptySWOTAnalysis() {
    return {
      strengths: [],
      weaknesses: [],
      opportunities: [],
      threats: []
    };
  }

  private generateUniqueId(): string {
    return `diag_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}