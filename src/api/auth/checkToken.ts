import { ApiResponse, fetchData } from "..";

export async function checkToken(token: string): Promise<ApiResponse> {
    const api = "/check-token";
  
    const method = "post";
  
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
  
    const body = {
      token: token,
    };
  
    let response: ApiResponse = { success: false };
  
    await fetchData(api, method, headers, body)
      .then((res) => {
        if (res.status === 204) {
          response = {success: true}
        } else {
          response = {success: false}
        }
      })
      .catch(() => {
        response = {success: false}
      });
  
      return new Promise<ApiResponse>((resolve, reject) => {
        if (response.success === false) {
          reject(response);
        }
        resolve(response);
      })
  }