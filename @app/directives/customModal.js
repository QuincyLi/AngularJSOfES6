import template from '../templates/customModal.html';
// import $ from 'jQuery';

export default class customModal {
    constructor() {
        this.restrict = 'EA';
        this.template = template;
        this.scope = {
            modalName: '='
        };
        this.controllerAs = 'vm';
        this.bindToController = true;

    }

    controller() {
        this.$onInit = function() {
            // this.modalName = 'test1';
            this.changeName = () => {
                this.modalName = 'This is an angular directive, Name has been changed';
            }

        };
    }

    // link(scope, element) {
    //     $(element).on('click', () => {
    //         alert('this is a directive');
    //     })
    // }
}