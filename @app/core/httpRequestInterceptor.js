import $ from 'jquery';

class httpRequestInterceptor {
    constructor() {

    }

    request($config) {
        $config.headers['csrf-token'] = $('input[name="_csrf"]').val();
        return $config;
    }
}


const requestInterceptorFactory = () => new httpRequestInterceptor();
export default  requestInterceptorFactory;
