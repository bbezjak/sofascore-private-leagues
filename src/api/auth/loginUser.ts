import { ApiResponse, fetchData } from "..";

export async function loginUser(
  username: string,
  password: string
): Promise<ApiResponse> {
  const api = "/login";

  const method = "post";

  const headers = new Headers();
  headers.set("Content-Type", "application/json");

  const body = {
    username: username,
    password: password,
  };

  let response: ApiResponse = { success: false };

  await fetchData(api, method, headers, body)
    .then(async (res) => {
      if (res.status === 200) {
        await res.json().then((json) => {
          console.log("fetch successful");
          response = { success: true, data: json };
        });
      } else if (res.status === 404) {
        await res.json().then((json) => {
          console.log("fetch successful");
          response = { success: false, data: json.error };
        });
      } else if (res.status === 422) {
        response = {
          success: false,
          data: "Username or password is invalid, login unsuccessful",
        };
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
