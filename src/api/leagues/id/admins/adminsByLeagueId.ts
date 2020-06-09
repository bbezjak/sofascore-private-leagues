import { ApiResponse, addToken, addXAppKey, fetchData } from "../../..";

export async function postAdminsByLeagueId(
  leagueId: string,
  token: string,
  adminId: string): Promise<ApiResponse> {
    return await adminsByLeagueId(leagueId, "post", token, adminId)
}

export async function deleteAdminsByLeagueId(
  leagueId: string,
  token: string,
  adminId: string): Promise<ApiResponse> {
    return await adminsByLeagueId(leagueId, "delete", token, adminId)
}

async function adminsByLeagueId(
  leagueId: string,
  method: "post" | "delete",
  token: string,
  adminId: string
): Promise<ApiResponse> {
  
  const api = `/leagues/˘${leagueId}/admins`;

  const headers = new Headers();
  addToken(headers, token);
  addXAppKey(headers);

  const body = {
    userId: adminId,
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
