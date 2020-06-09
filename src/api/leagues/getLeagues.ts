import { ApiResponse, fetchData, addToken, addXAppKey } from "..";

export async function getLeagues(token: string): Promise<ApiResponse> {
    const api = `/leagues`;

    const method = "get";
  
    const headers = new Headers();
    addToken(headers, token);
    addXAppKey(headers);
  
    let response: ApiResponse = { success: false };
  
    await fetchData(api, method, headers)
      .then(async (res) => {
        if (res.status === 200) {
          await res.json().then((json) => {
            debugger;
            response = {success: true, data:json}
          })
        } else {
          response = {success: false}
        }
      })
      .catch((err) => {
        response = {success: false}
      });
  
      return new Promise<ApiResponse>((resolve, reject) => {
        if (response.success === false) {
          reject(response);
        }
        resolve(response);
      })
  }