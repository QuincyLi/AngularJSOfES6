export default class startupController {
    constructor($location) {
        this.firstName = 'Tom';
        this.$location = $location;
    }
    change() {
        this.$location.path('404');
    }

    goto() {
        this.$location.path('startup');
    }
}

startupController.$inject = ['$location'];