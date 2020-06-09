import { ApiResponse, fetchData, addToken } from "..";

export async function getMe(token: string): Promise<ApiResponse> {
  return await getDeleteMe("get", token);
}

export async function deleteMe(token: string): Promise<ApiResponse> {
  return await getDeleteMe("delete", token);
}

async function getDeleteMe(method: "get" | "delete", token: string): Promise<ApiResponse> {
    const api = `/users/me`;
  
    const headers = new Headers();
    addToken(headers, token);
  
    let response: ApiResponse = { success: false };

    await fetchData(api, method, headers)
      .then(async (res) => {
        debugger;
        if (res.status === 200) {
          response = {success: true}  
        } else {
          response = {success: false}
        }
      })
      .catch((err) => {
        debugger;
        response = {success: false}
      });
  
      return new Promise<ApiResponse>((resolve, reject) => {
        if (response.success === false) {
          reject(response);
        }
        resolve(response);
      })
  }