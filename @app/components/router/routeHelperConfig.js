export default class routeHelperConfig {
    constructor() {
        this.config = {
            // these are the properties we need to set
            $urlRouterProvider: undefined,
            $stateProvider: undefined,
            docTitle: ''
        };
    }

    setConfig(config) {
        this.config.$urlRouterProvider = config.urlRouterProvider;
        this.config.$stateProvider = config.stateProvider;
        this.config.docTitle = config.title;
    }

    $get() {
        return {
            config: this.config
        };
    }
}