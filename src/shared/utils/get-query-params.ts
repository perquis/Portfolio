export const getQueryParams = (params: Record<string, string | null>) =>
  Object.keys(params)
    .filter((key) => params[key] !== null)
    .map((key) => `${key}=${params[key]}`)
    .join("&");
