import { ApiResponse, addToken, addXAppKey, fetchData } from "../..";
import { League } from "../../../model/league";

export async function patchByLeagueId(
  leagueId: string,
  partialLeague: Partial<League>,
  token: string
): Promise<ApiResponse> {
  
  const api = `/leagues/˘${leagueId}`;

  const method = "patch";

  const headers = new Headers();
  addToken(headers, token);
  addXAppKey(headers);

  const body = partialLeague;

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
