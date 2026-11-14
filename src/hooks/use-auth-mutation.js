import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  fetchCurrentUser,
  loginUser,
  registerUser,
} from '../services/auth-service';
import { useAuthStore } from '../store/use-auth-store';

export const AUTH_QUERY_KEYS = {
  me: ['auth', 'me'],
};

export function useCurrentUserQuery() {
  const token = useAuthStore((state) => state.token);

  return useQuery({
    queryKey: AUTH_QUERY_KEYS.me,
    queryFn: fetchCurrentUser,
    enabled: Boolean(token),
  });
}

export function useLoginMutation() {
  const queryClient = useQueryClient();
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      login(data);
      queryClient.invalidateQueries({ queryKey: AUTH_QUERY_KEYS.me });
    },
  });
}

export function useRegisterMutation() {
  const queryClient = useQueryClient();
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      login(data);
      queryClient.invalidateQueries({ queryKey: AUTH_QUERY_KEYS.me });
    },
  });
}
