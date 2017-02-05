var knowledgeApp = angular.module('knowledgeApp', ['ui.router']);

knowledgeApp.config(function ($stateProvider, $urlRouterProvider) {

});

knowledgeApp.directive("menuItem", function () {
    return{
        restrict:"AE",
        templateUrl:'tree_item.html'
    }
});








