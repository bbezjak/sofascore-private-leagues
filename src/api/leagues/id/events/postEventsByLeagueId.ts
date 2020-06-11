import { ApiResponse, addToken, addXAppKey, fetchData } from "../../..";
import { addContentTypeJson } from "../../../fetch";
import { LeagueEvent } from "../../../../model/leagueEvent";

export async function postEventsByLeagueId(
  leagueId: string,
  token: string,
  event: Partial<LeagueEvent>
): Promise<ApiResponse> {
  
  const api = `/leagues/${leagueId}/events`;

  const method = "POST";

  const body = {...event};

  const headers = new Headers();
  addToken(headers, token);
  addXAppKey(headers);
  addContentTypeJson(headers);

  let response: ApiResponse = { success: false };

  await fetchData(api, method, headers, body)
    .then(async (res) => {
      debugger;
      if (res.status === 201) {
        await res.json().then((json) => {
          response = { success: true, data: json.id };
        });
      } else {
        response = { success: false };
      }
    })
    .catch((err) => {
      debugger;
      response = { success: false };
    });

  return new Promise<ApiResponse>((resolve, reject) => {
    if (response.success === false) {
      reject(response);
    }
    resolve(response);
  });
}
