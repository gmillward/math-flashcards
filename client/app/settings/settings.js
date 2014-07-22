'use strict';

angular.module('yoFlashcardFullstackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/settings', {
        templateUrl: 'app/settings/settings.html',
        controller: 'SettingsCtrl'
      });
  });
