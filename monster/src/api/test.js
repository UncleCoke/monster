import {postRequest,getRequest,downloadRequest} from "../common/js/request";

let postUrl = window.g.LOCAL_POST_URL;
let getUrl = window.g.LOCAL_GET_URL;
export const testApi = data => {
    return postRequest({
        url:postUrl + '/test',
        data
    })
};