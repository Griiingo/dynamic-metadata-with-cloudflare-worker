export const config = {
  domainSource: "https://e3c412aa-5c74-4d02-b483-1802d4c8adc9.weweb-preview.io/", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "/empresa/[^/]+",
          metaDataEndpoint: "https://api.griiingo.com/rest/v1/companies_metadata?slug=eq.{slug}"
					apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyeXVoYWxzYXFpY2N2YXpjYmtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5MTQyNTcsImV4cCI6MjAzNDQ5MDI1N30.QD_47Uq2OfmIXmNdz7mSTPO9z4qgRKpNbEPew2sb500"
      },
      {
          pattern: "/evento/[^/]+",
          metaDataEndpoint: "https://api.griiingo.com/rest/v1/events_metadata?slug=eq.{slug}"
					apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyeXVoYWxzYXFpY2N2YXpjYmtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5MTQyNTcsImV4cCI6MjAzNDQ5MDI1N30.QD_47Uq2OfmIXmNdz7mSTPO9z4qgRKpNbEPew2sb500"
      },
      {
          pattern: "/artigo/[^/]+",
          metaDataEndpoint: "https://api.griiingo.com/rest/v1/articles_metadata?slug=eq.{slug}"
					apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyeXVoYWxzYXFpY2N2YXpjYmtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5MTQyNTcsImV4cCI6MjAzNDQ5MDI1N30.QD_47Uq2OfmIXmNdz7mSTPO9z4qgRKpNbEPew2sb500"
      }
  ]
};
