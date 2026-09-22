const BASE_URL = "https://api.fda.gov/drug/label.json";

export async function searchMedicines(query, signal) {
  const params = new URLSearchParams({
    search: `openfda.brand_name:${query.trim()}`,
    limit: "20",
  });

  const response = await fetch(`${BASE_URL}?${params.toString()}`, {
    signal,
  });

  if (response.status === 404) {
    return [];
  }

  if (!response.ok) {
    throw new Error(`FDA API error: ${response.status}`);
  }

  const data = await response.json();

  return data.results || [];
}
