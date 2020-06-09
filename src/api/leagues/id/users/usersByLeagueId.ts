import { ApiResponse, addToken, addXAppKey, fetchData } from "../../..";

export async function postUsersByLeagueId(
  leagueId: string,
  token: string,
  userId: string
): Promise<ApiResponse> {
  return await usersByLeagueId(leagueId, "post", token, userId);
}

export async function deleteUsersByLeagueId(
  leagueId: string,
  token: string,
  userId: string
): Promise<ApiResponse> {
  return await usersByLeagueId(leagueId, "delete", token, userId);
}

async function usersByLeagueId(
  leagueId: string,
  method: "post" | "delete",
  token: string,
  userId: string
): Promise<ApiResponse> {
  
  const api = `/leagues/˘${leagueId}/admins`;

  const headers = new Headers();
  addToken(headers, token);
  addXAppKey(headers);

  const body = {
    userId: userId,
  };

  let response: ApiResponse = { success: false };

  await fetchData(api, method, headers, body)
    .then((res) => {
      if (res.status === 200) {
        res.json().then((json) => {
          response = { success: true };
        });
      } else {
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
