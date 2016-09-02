import * as axios from "axios";
import {IMessageJson} from "../Models";

const config: Axios.AxiosXHRConfigBase<any> = {
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json'
  }
};

export function getRequest<T>(url: string,
  _successCB: (val: T) => void,
  _failCB: (val: IMessageJson) => void): Axios.IPromise<any> {

  function successCB(errXHR: Axios.AxiosXHR<T>): void {
    _successCB(errXHR.data);
  }

  function failCB(errXHR: Axios.AxiosXHR<IMessageJson>): void {
    if (errXHR.status === 401) {
      alert(errXHR.data.message);
      location.href = "/login";
    }
    _failCB(errXHR.data);
  }

  return axios.get(url, config)
    .then(successCB)
    .catch(failCB);
}