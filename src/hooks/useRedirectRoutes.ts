import { useNavigate } from 'react-router-dom';

interface HookReturnType {
  redirectToPage: (to: string) => void;
}

export const useRedirectRoutes = (): HookReturnType => {
  const navigate = useNavigate();

  const redirectToPage = (to: string): void => navigate(to);

  return {
    redirectToPage,
  };
};
