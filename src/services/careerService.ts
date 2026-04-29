const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export interface Career {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  salary: string;
  description: string;
  image: string;
  badge?: string;
  createdAt?: string;
}

export const getCareers = async (): Promise<Career[]> => {
  const response = await fetch(`${API_URL}/api/careers`);
  if (!response.ok) {
    throw new Error('Failed to fetch careers');
  }
  return response.json();
};

export const createCareer = async (careerData: Partial<Career>): Promise<{ success: boolean; id: string }> => {
  const formData = new FormData();
  Object.keys(careerData).forEach(key => {
    const value = (careerData as any)[key];
    if (value !== undefined && value !== null) {
      formData.append(key, value);
    }
  });

  const response = await fetch(`${API_URL}/api/careers`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to create career');
  }
  return response.json();
};

export const deleteCareer = async (id: string): Promise<{ success: boolean }> => {
  const response = await fetch(`${API_URL}/api/careers/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete career');
  }
  return response.json();
};
