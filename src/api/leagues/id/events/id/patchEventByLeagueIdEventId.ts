import { ApiResponse, addToken, addXAppKey, fetchData } from "../../../..";

export async function patchEventByLeagueIdEventId(
  method: "patch" | "delete",  
  leagueId: string,
  eventId: string,
  partialEvent: Partial<Event>,
  token: string
): Promise<ApiResponse> {
  
  const api = `/leagues/˘${leagueId}/events/${eventId}`;

  const headers = new Headers();
  addToken(headers, token);
  addXAppKey(headers);

  const body = partialEvent;

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
