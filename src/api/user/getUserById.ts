import { ApiResponse, fetchData, addToken } from "..";

export async function getUserById(id:string, token: string): Promise<ApiResponse> {
    const api = `/users/${id}`;
  
    const method = "get";
  
    const headers = new Headers();
    addToken(headers, token);
  
    let response: ApiResponse = { success: false };
  
    await fetchData(api, method, headers)
      .then((res) => {
        if (res.status !== 204) {
          res.json().then((json) => {
            response = {success: true}
          })
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