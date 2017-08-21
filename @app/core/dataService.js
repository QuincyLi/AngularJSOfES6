class dataService {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    httpCall(method, url, data) {
        var defer = this.$q.defer();
        this.$http({
            method: method,
            url: url,
            data: data
        }).then(
            (data) => { 
                defer.resolve(data);
            },
            () => {
                alert('Ajax failed');
                defer.reject();
            });

        return defer.promise;
    }

    login(vm) {
        return this.httpCall('POST', '/login', vm);
    }
}

const dataServiceFactory = ($http, $q) => new dataService($http, $q);
dataServiceFactory.$inject = ['$http', '$q'];

export default dataServiceFactory;