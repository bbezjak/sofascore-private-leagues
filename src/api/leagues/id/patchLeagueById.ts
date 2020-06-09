import { ApiResponse, addToken, addXAppKey, fetchData } from "../..";
import { League } from "../../../model/league";
import { addContentTypeJson } from "../../fetch";

export async function patchByLeagueId(
  leagueId: string,
  partialLeague: Partial<League>,
  token: string
): Promise<ApiResponse> {
  
  const api = `/leagues/${leagueId}`;

  const method = "PATCH";

  const headers = new Headers();
  addToken(headers, token);
  addXAppKey(headers);
  addContentTypeJson(headers);

  const body = {...partialLeague};

  let response: ApiResponse = { success: false };

  debugger;
  await fetchData(api, method, headers, body)
    .then(async (res) => {
      debugger;
      if (res.status === 204) {
        response = { success: true };
      } else {
        response = { success: false };
      }
    })
    .catch((err) => {
      debugger;
      response = { success: false, data: err };
    });

  return new Promise<ApiResponse>((resolve, reject) => {
    if (response.success === false) {
      reject(response);
    }
    resolve(response);
  });
}
