import { v4 as uuidv4 } from 'uuid';

export const saveDiagnostic = async (data) => {
  const guid = uuidv4();
  const diagnosticData = {
    guid,
    ...data,
    createdAt: new Date().toISOString(),
  };

  try {
    // Sauvegarde en base de données
    const response = await fetch('/api/diagnostic', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(diagnosticData),
    });

    if (!response.ok) throw new Error('Erreur lors de la sauvegarde');

    return guid;
  } catch (error) {
    console.error('Erreur:', error);
    throw error;
  }
};

export const getDiagnostic = async (guid) => {
  try {
    const response = await fetch(`/api/diagnostic/${guid}`);
    if (!response.ok) throw new Error('Diagnostic non trouvé');
    return await response.json();
  } catch (error) {
    console.error('Erreur:', error);
    throw error;
  }
};
