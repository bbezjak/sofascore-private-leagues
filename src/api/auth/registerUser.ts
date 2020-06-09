import { ApiResponse, fetchData } from "..";
import { addContentTypeJson } from "../fetch";

export async function registerUser(
  username: string,
  password: string
): Promise<ApiResponse> {
  const api = "/register";

  const method = "post";

  const headers = new Headers();
  addContentTypeJson(headers);

  const body = {
    username: username,
    password: password,
  };

  let response: ApiResponse = { success: false };

  await fetchData(api, method, headers, body)
    .then(async (res) => {
      if (res.status === 200) {
        await res.json().then((json) => {
          response = { success: true, data: json.id };
        });
      } else if (res.status === 409) {
        await res.json().then((json) => {
          response = { success: false, data: json.error };
        });
      } else {
        response = { success: false, data: "Status " + res.status };
      }
    })
    .catch((err) => {
      response = { success: false, data: "Status " + err.status };
    });
  return new Promise<ApiResponse>((resolve, reject) => {
    if (response.success === false) {
      reject(response);
    }
    resolve(response);
  });
}
