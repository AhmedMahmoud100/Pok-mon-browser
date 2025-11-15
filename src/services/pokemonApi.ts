import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { api } from '../utils/api';
import { Pokemon, PokemonListResponse } from '../types/pokemon';

// API fetch functions
export const fetchPokemonList = async (
  limit: number = 20,
  offset: number = 0
): Promise<PokemonListResponse> => {
  return api.get<PokemonListResponse>('/pokemon', {
    params: { limit, offset },
  });
};

export const fetchPokemonDetail = async (id: number | string): Promise<Pokemon> => {
  return api.get<Pokemon>(`/pokemon/${id}`);
};

// React Query Hooks
export const usePokemonList = (limit: number = 20, offset: number = 0) => {
  return useQuery({
    queryKey: ['pokemon', 'list', limit, offset],
    queryFn: () => fetchPokemonList(limit, offset),
  });
};

export const usePokemonInfiniteList = (limit: number = 20) => {
  return useInfiniteQuery({
    queryKey: ['pokemon', 'infinite-list', limit],
    queryFn: ({ pageParam = 0 }) => fetchPokemonList(limit, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.next) return undefined;
      return allPages.length * limit;
    },
    initialPageParam: 0,
  });
};

export const usePokemonDetail = (id: number | string) => {
  return useQuery({
    queryKey: ['pokemon', 'detail', id],
    queryFn: () => fetchPokemonDetail(id),
    enabled: !!id,
  });
};
