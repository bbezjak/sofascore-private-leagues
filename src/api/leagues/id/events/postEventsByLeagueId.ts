import { ApiResponse, addToken, addXAppKey, fetchData } from "../../..";
import { addContentTypeJson } from "../../../fetch";

export async function postEventsByLeagueId(
  leagueId: string,
  token: string,
  event: Event
): Promise<ApiResponse> {
  
  const api = `/leagues/˘${leagueId}/events`;

  const method = "post";

  const body = event;

  const headers = new Headers();
  addToken(headers, token);
  addXAppKey(headers);
  addContentTypeJson(headers);

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
