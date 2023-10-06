import queryString from "query-string";
import { useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

export const HOME_URL = "/";
export const SEARCH_BY_IMAGE_URL = "/search-by-image";
export const AI_RECONIZATION_URL = "/ai-recognization";

export const useRouter = () => {
  const params = useParams();
  const location = useLocation();
  const history = useNavigate();
  return useMemo(() => {
    return {
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,

      query: {
        ...queryString.parse(location.search), // Convert string to object
        ...params,
      },
      location,
      history,
    };
  }, [params, location, history]);
};
