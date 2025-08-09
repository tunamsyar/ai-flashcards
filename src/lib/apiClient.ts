export async function apiRequest<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      },
      ...options,
    });

    if(!res.ok) {
      const errorText = await res.text();
      throw new Error (
        `API Error ${res.status}: ${errorText || res.statusText}`
      );
    }

    return res.json() as Promise<T>;
  } catch(err) {
    throw err instanceof Error ? err : new Error('Unexpected error occurred');
  }
}
