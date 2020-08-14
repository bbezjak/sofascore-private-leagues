import { ApiResponse, addToken, addXAppKey, fetchData } from "../..";

export async function getLeagueById(
  leagueId: string,
  token: string
): Promise<ApiResponse> {
 return await getDeleteByLeagueId("get", leagueId, token);
}

export async function deleteLeagueById(
  leagueId: string,
  token: string
): Promise<ApiResponse> {
 return await getDeleteByLeagueId("delete", leagueId, token);
}

async function getDeleteByLeagueId(
  method: "get" | "delete",
  leagueId: string,
  token: string
): Promise<ApiResponse> {
  
  const api = `/leagues/${leagueId}`;

  const headers = new Headers();
  addToken(headers, token);
  addXAppKey(headers);

  let response: ApiResponse = { success: false };

  await fetchData(api, method, headers)
    .then(async (res) => {
      if (res.status === 200) {
        await res.json().then((json) => {
          response = { success: true, data: json };
        });
      } else if (res.status === 204){
        response = { success: true };
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
