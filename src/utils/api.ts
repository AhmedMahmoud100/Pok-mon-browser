type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface ApiRequestConfig {
  method?: RequestMethod;
  body?: Record<string, any> | FormData;
  headers?: Record<string, string>;
  params?: Record<string, string | number>;
}

interface ApiClient {
  get: <T>(endpoint: string, config?: Omit<ApiRequestConfig, 'method' | 'body'>) => Promise<T>;
  post: <T>(endpoint: string, body?: Record<string, any>, config?: Omit<ApiRequestConfig, 'method' | 'body'>) => Promise<T>;
  put: <T>(endpoint: string, body?: Record<string, any>, config?: Omit<ApiRequestConfig, 'method' | 'body'>) => Promise<T>;
  patch: <T>(endpoint: string, body?: Record<string, any>, config?: Omit<ApiRequestConfig, 'method' | 'body'>) => Promise<T>;
  delete: <T>(endpoint: string, config?: Omit<ApiRequestConfig, 'method' | 'body'>) => Promise<T>;
}

class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public statusText: string,
    public data?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

const createApiClient = (baseURL: string): ApiClient => {
  const buildUrl = (endpoint: string, params?: Record<string, string | number>): string => {
    // Ensure baseURL ends without trailing slash and endpoint starts without leading slash
    const normalizedBase = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL;
    const normalizedEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;

    const url = new URL(`${normalizedBase}/${normalizedEndpoint}`);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }

    return url.toString();
  };

  const request = async <T>(
    endpoint: string,
    config: ApiRequestConfig = {}
  ): Promise<T> => {
    const { method = 'GET', body, headers = {}, params } = config;

    const url = buildUrl(endpoint, params);

    const defaultHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    // Remove Content-Type for FormData (browser sets it automatically with boundary)
    if (body instanceof FormData) {
      delete defaultHeaders['Content-Type'];
    }

    const requestOptions: RequestInit = {
      method,
      headers: {
        ...defaultHeaders,
        ...headers,
      },
    };

    if (body && method !== 'GET') {
      requestOptions.body = body instanceof FormData ? body : JSON.stringify(body);
    }

    try {
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          errorData = await response.text();
        }

        throw new ApiError(
          errorData?.message || `Request failed: ${response.statusText}`,
          response.status,
          response.statusText,
          errorData
        );
      }

      // Handle empty responses (204 No Content, etc.)
      const contentType = response.headers.get('content-type');
      if (!contentType || response.status === 204) {
        return {} as T;
      }

      if (contentType.includes('application/json')) {
        return await response.json();
      }

      // For non-JSON responses, return as text
      return (await response.text()) as unknown as T;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new Error(`Network error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return {
    get: <T>(endpoint: string, config?: Omit<ApiRequestConfig, 'method' | 'body'>) =>
      request<T>(endpoint, { ...config, method: 'GET' }),

    post: <T>(endpoint: string, body?: Record<string, any>, config?: Omit<ApiRequestConfig, 'method' | 'body'>) =>
      request<T>(endpoint, { ...config, method: 'POST', body }),

    put: <T>(endpoint: string, body?: Record<string, any>, config?: Omit<ApiRequestConfig, 'method' | 'body'>) =>
      request<T>(endpoint, { ...config, method: 'PUT', body }),

    patch: <T>(endpoint: string, body?: Record<string, any>, config?: Omit<ApiRequestConfig, 'method' | 'body'>) =>
      request<T>(endpoint, { ...config, method: 'PATCH', body }),

    delete: <T>(endpoint: string, config?: Omit<ApiRequestConfig, 'method' | 'body'>) =>
      request<T>(endpoint, { ...config, method: 'DELETE' }),
  };
};

// Create singleton instance with base URL from environment
const baseURL = import.meta.env.VITE_API_BASE_URL || '';
export const api = createApiClient(baseURL);

// Export for creating custom instances if needed
export { createApiClient, ApiError };
export type { ApiClient, ApiRequestConfig };
