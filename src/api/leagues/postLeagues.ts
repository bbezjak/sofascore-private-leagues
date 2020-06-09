import { ApiResponse, fetchData, addToken, addXAppKey } from "..";
import { League } from "../../model/league";
import { addContentTypeJson } from "../fetch";

export async function postLeagues(league: Partial<League>, token: string): Promise<ApiResponse> {
    const api = `/leagues`;

    const method = "POST";
  
    const headers = new Headers();
    addToken(headers, token);
    addXAppKey(headers);
    addContentTypeJson(headers);

    const body = {
      name: league.name,
      description: league.description,
    };
  
    let response: ApiResponse = { success: false };
    debugger;
  
    await fetchData(api, method, headers, body)
      .then(async (res) => {
        if (res.status === 201) {
          await res.json().then((json) => {
            debugger;
            response = {success: true, data: json.id}
          })
        } else {
          response = {success: false}
        }
      })
      .catch((err) => {
        response = {success: false}
      });
  
      return new Promise<ApiResponse>((resolve, reject) => {
        if (response.success === false) {
          reject(response);
        }
        resolve(response);
      })
  }