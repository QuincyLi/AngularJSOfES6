import $ from 'jquery';

export default class loginController {
    constructor($location, dataService) {
        this.$location = $location;
        this.dataService = dataService;
        this.userName = '';
        this.password = '';
    }
    change() {
        this.$location.path('404');
    }

    goto() {
        this.$location.path('startup');
    }

    testjQuery() {
        $('#firstName').css('color', 'red');
    }

    login(){
        let vm = {
            userName: this.userName,
            password: this.password
        };
        this.dataService.login(vm).then(() => {
            this.$location.path('startup')
        })
    }
}

loginController.$inject = ['$location', 'dataService'];