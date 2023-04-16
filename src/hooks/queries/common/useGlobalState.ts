import { useQuery } from "@tanstack/react-query";

import { queryClient } from "@queryClient/index";

export function useGlobalState<D>(
  queryKey: string[],
  defaultValue: D | (() => Promise<D>),
  isPersist = true
) {
  const _queryKey = isPersist ? ["persist", ...queryKey] : queryKey;
  const { data } = useQuery<D | undefined>(
    _queryKey,
    async () => {
      if (typeof defaultValue === "function") {
        return await (defaultValue as () => Promise<D>)();
      } else {
        return defaultValue;
      }
    },
    { staleTime: Infinity, cacheTime: Infinity, retry: false }
  );

  const setData = (value: D) => {
    queryClient.setQueryData(_queryKey, value);
    return value;
  };

  return [data, setData] as const;
}
