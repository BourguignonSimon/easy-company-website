// Authentication API handlers
export const loginUser = async (credentials) => {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  } catch (error) {
    throw new Error('Authentication failed');
  }
};

export const logoutUser = async () => {
  try {
    await fetch('/api/auth/logout', { method: 'POST' });
  } catch (error) {
    throw new Error('Logout failed');
  }
};