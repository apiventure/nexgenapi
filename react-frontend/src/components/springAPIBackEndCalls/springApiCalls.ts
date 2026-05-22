// Utility to call the Spring Boot backend
export async function fetchSpringApi() {
  const endpoint = "http://localhost:8081/api/hello";
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error(`API call failed (${res.status})`);
  }

  return res.text();
}

export async function executeCurlRequest(requestJson) {
  const endpoint = "http://localhost:8081/api/executeCurl";
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestJson)
  });
  const executionTimeMs = 500; // Placeholder for execution time, replace with actual value from response if available

  const responseHeaders: Record<string, string> = {};
  res.headers.forEach((value, key) => {
    responseHeaders[key] = value;
  });

  const body = await res.json();

  return {
    status: res.status,
    statusText: res.statusText,
    headers: responseHeaders,
    executionTimeMs,
    body,
  };
}