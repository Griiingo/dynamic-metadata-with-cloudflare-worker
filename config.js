export const config = {
  domainSource: "https://griiingo.com", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "/empresa/[^/]+",
          metaDataEndpoint: "https://api.griiingo.com/rest/v1/companies_metadata/{id}"
      },
      {
          pattern: "/evento/[^/]+",
          metaDataEndpoint: "https://api.griiingo.com/rest/v1/events_metadata/{id}"
      },
      {
          pattern: "/artigo/[^/]+",
          metaDataEndpoint: "https://api.griiingo.com/rest/v1/articles_metadata/{id}"
      }
  ]
};
