import * as urls from './url';
import common from './api';

export default {
    login: (loginForm) => common({ url: urls.login, method: 'post', data: loginForm }),
    registry: (data) => common({ url: urls.registry, method: 'post', data })
}