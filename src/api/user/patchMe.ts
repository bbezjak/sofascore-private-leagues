import { ApiResponse, fetchData, addToken } from "..";
import { User } from "../../model/user";
import { addContentTypeJson } from "../fetch";

// TODO CORS problemi

export async function patchMe( token: string, me: Partial<User> ): Promise<ApiResponse> {
  const api = "/users/me";

  const method = "PATCH";

  console.log(me);

  const headers = new Headers();
  addToken(headers, token);
  addContentTypeJson(headers);

  const body = {...me};

  let response: ApiResponse = { success: false };

  await fetchData(api, method, headers, body)
    .then(async (res) => {
      debugger;
      if (res.status === 204) {
        response = { success: true };
      } else if ([404, 409, 422].includes(res.status)) {
        await res.json().then((json) => {
          debugger;
          response = { success: false, data:json.error };
        });
      }  else {
        response = { success: false };
      }
    })
    .catch((err) => {
      response = { success: false };
    });

  return new Promise<ApiResponse>((resolve, reject) => {
    if (response.success === false) {
      reject(response);
    }
    resolve(response);
  });
}
