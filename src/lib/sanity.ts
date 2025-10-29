import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "x01v56io",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});
