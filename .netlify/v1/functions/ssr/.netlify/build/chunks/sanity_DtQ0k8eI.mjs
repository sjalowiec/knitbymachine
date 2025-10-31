import { createClient } from '@sanity/client';

const sanity = createClient({
  projectId: "x01v56io",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true
});

export { sanity as s };
