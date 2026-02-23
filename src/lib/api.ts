// API service for Stride EV backend

export interface WaitlistEntry {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface WaitlistResponse {
  status: boolean;
  message: string;
  data: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    createdAt: string;
  };
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public data?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export async function addToWaitlist(entry: WaitlistEntry): Promise<WaitlistResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/waitlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    });

    if (!response.ok) {
      let errorMessage = 'Failed to join waitlist';
      let errorData = null;
      
      try {
        const errorResponse = await response.json();
        errorMessage = errorResponse.message || errorMessage;
        errorData = errorResponse;
      } catch {
        // If JSON parsing fails, use status text
        errorMessage = response.statusText || errorMessage;
      }
      
      throw new ApiError(errorMessage, response.status, errorData);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    // Handle network errors or other exceptions
    if (error instanceof Error) {
      throw new ApiError(`Network error: ${error.message}`);
    }
    
    throw new ApiError('An unexpected error occurred');
  }
}
