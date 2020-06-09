import { ApiResponse, addToken, addXAppKey, fetchData } from "../../..";

export async function getEventsByLeagueId(
  leagueId: string,
  token: string
): Promise<ApiResponse> {
  
  const api = `/leagues/˘${leagueId}/events`;

  const method = "get";

  const headers = new Headers();
  addToken(headers, token);
  addXAppKey(headers);

  let response: ApiResponse = { success: false };

  await fetchData(api, method, headers)
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
