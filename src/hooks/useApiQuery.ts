import {
  useQuery,
  useMutation,
  useInfiniteQuery,
  useQueryClient,
  UseQueryOptions,
  UseMutationOptions,
  UseInfiniteQueryOptions
} from '@tanstack/react-query';
import { api, ApiRequestConfig } from '../utils/api';

export interface MutationOptionsWithInvalidation<TData = unknown, TVariables = Record<string, any>, TError = Error>
  extends Omit<UseMutationOptions<TData, TError, TVariables>, 'mutationFn' | 'onSuccess' | 'onError'> {
  invalidateQueries?: string[][]; // Array of query keys to invalidate on success
  onSuccess?: (data: TData, variables: TVariables) => void | Promise<void>;
  onError?: (error: TError, variables: TVariables) => void | Promise<void>;
}

export const useApiQuery = <TData = unknown, TError = Error>(
  queryKey: unknown[],
  endpoint: string,
  config?: Omit<ApiRequestConfig, 'method' | 'body'>,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>
) => {
  return useQuery<TData, TError>({
    queryKey,
    queryFn: () => api.get<TData>(endpoint, config),
    ...options,
  });
};

export const useApiMutation = <TData = unknown, TVariables = Record<string, any>, TError = Error>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: MutationOptionsWithInvalidation<TData, TVariables, TError>
) => {
  const queryClient = useQueryClient();
  const { invalidateQueries, onSuccess, onError, ...restOptions } = options || {};

  return useMutation<TData, TError, TVariables>({
    mutationFn,
    onSuccess: async (data, variables) => {
      // Invalidate specified queries
      if (invalidateQueries && invalidateQueries.length > 0) {
        await Promise.all(
          invalidateQueries.map((queryKey) =>
            queryClient.invalidateQueries({ queryKey })
          )
        );
      }

      // Call custom onSuccess handler
      if (onSuccess) {
        await onSuccess(data, variables);
      }
    },
    onError: async (error, variables) => {
      // Call custom onError handler
      if (onError) {
        await onError(error, variables);
      }
    },
    ...restOptions,
  });
};

export const useApiInfiniteQuery = <TData = unknown, TError = Error>(
  queryKey: unknown[],
  getEndpoint: (pageParam: number) => string,
  config?: Omit<ApiRequestConfig, 'method' | 'body'>,
  options?: Omit<UseInfiniteQueryOptions<TData, TError, TData>, 'queryKey' | 'queryFn'>
) => {
  return useInfiniteQuery<TData, TError, TData>({
    queryKey,
    queryFn: ({ pageParam = 0 }) => api.get<TData>(getEndpoint(pageParam as number), config),
    ...options,
  } as any);
};
