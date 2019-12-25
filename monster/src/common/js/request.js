import axios from 'axios'
import store from './../../store'
import {_getSessionStore} from "./storage";
import Qs from 'qs'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
axios.defaults.timeout

axios.interceptors.request.use(
    config => {
        if (store.state.token === '' && _getSessionStore('token')) {
            store.commit('setToken', _getSessionStore('token'))
        }
        //每个请求添加token
        if (store.state.token !== '') {
            if (config.data === "") {
                config.data += ("#TOKEN#=" + store.state.token);
            } else {
                config.data += ("&#TOKEN#=" + store.state.token);
            }
        }
        // 对全局参数做过滤，把不存在的参数删除
        for (const key in config.data) {
            if (!config.data[key]) {
                delete config.data[key]
            }
        }
        // 全局去前后空格
        function dataTrim(data) {
            if (Array.isArray(data)) {
                for (let item of data) {
                    if (typeof item === 'object') {
                        dataTrim(item)
                    } else if (typeof item === 'string') {
                        item = item.trim()
                    }
                }
            } else if (typeof data === 'object') {
                for (const key in data) {
                    if (typeof data[key] === 'object') {
                        dataTrim(data[key])
                    } else if (typeof data[key] === 'string') {
                        data[key] = data[key].trim()
                    }
                }
            }
        }
        dataTrim(config.data);
        return config;
    },
    error => {
        return Promise.reject(error)
    }
);

//get请求
export const getRequest = (opt) => {
    return axios.get(opt.url, Qs.stringify(opt.data));
};

//post请求
export const postRequest = (opt) => {
    return axios.post(opt.url, Qs.stringify(opt.data));
};

//form表单请求
export const downloadRequest = (opt) => {
    let body = document.body,
        form = document.createElement('form'),
        input;
    form.setAttribute('action', opt.url);
    if (opt.args) {
        for (let key in opt.args) {
            input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', key);
            input.setAttribute('value', opt.args[key]);
            form.appendChild(input);
        }
    }
    let submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'submit');
    form.appendChild(submitBtn);
    body.appendChild(form);
    submitBtn.click();
    body.removeChild(form);
    return form;
};