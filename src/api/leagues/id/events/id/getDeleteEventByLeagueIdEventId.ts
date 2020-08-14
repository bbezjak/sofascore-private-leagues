import { ApiResponse, addToken, addXAppKey, fetchData } from "../../../..";

export async function getEventByLeagueIdEventId(
  leagueId: string,
  eventId: string,
  token: string
): Promise<ApiResponse> {
  return await getDeleteEventByLeagueIdEventId("get", leagueId, eventId, token);
}

export async function deleteEventByLeagueIdEventId(
  leagueId: string,
  eventId: string,
  token: string
): Promise<ApiResponse> {
  return await getDeleteEventByLeagueIdEventId("delete", leagueId, eventId, token);
}

async function getDeleteEventByLeagueIdEventId(
  method: "get" | "delete",
  leagueId: string,
  eventId: string,
  token: string
): Promise<ApiResponse> {
  
  const api = `/leagues/${leagueId}/events/${eventId}`;

  const headers = new Headers();
  addToken(headers, token);
  addXAppKey(headers);

  let response: ApiResponse = { success: false };

  await fetchData(api, method, headers)
    .then(async (res) => {
      if (res.status === 200) {
        await res.json().then((json) => {
          response = { success: true, data:json };
        });
      } else if (res.status === 204) {
        response = { success: true};
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
