export const HOST = "https://private-leagues-api.herokuapp.com/api";

export function fetchData(api: string, method: string, headers: HeadersInit, body?: object): Promise<Response> {
  const url = HOST + api;
  if (body === undefined) {
    return fetch(url, {
      headers: headers,
      method: method
    });
  } else {
    const bodyString = JSON.stringify(body);
    return fetch(url, {
      headers: headers,
      method: method,
      body: bodyString,
    });
  }
}

export interface ApiResponse {
  success?: boolean;
  data?: any;
}

export function addContentTypeJson(headers: Headers): void {
  headers.set("Content-Type", "application/json");
}

export function addToken(headers: Headers, token: String) {
  headers.set("Authorization",`Bearer ${token}`);
}

export function addXAppKey(headers: Headers) {
  headers.set("X-App-Key", "borna")
}
