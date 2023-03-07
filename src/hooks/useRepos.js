import { useQuery } from "react-query";
import { getUser } from './../services/User.service.jsx';

async function fetchRepos() {
  const { data } = await getUser();
  return data;
}

export function useFetchRepositories() {
  return useQuery(["repos"], fetchRepos);
}
