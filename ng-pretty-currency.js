angular.module('ngPrettyCurrency', []).directive('ngPrettyCurrency', function() {
  return {
    restrict: 'AE',
    scope: {
      ngModel: '=',
      currencyCode: '='
    },
    require: ['^currencyCode'],
    template: '<span class="pretty-currency-symbol">{{currencyCode | symbol | html}}</span><span ng-hide="attrs.hideAmount" class="pretty-currency-amount">{{ngModel | number:2}}</span>',
    link: function($scope, $element, attrs) {
      $scope.attrs = attrs;
    }
  }
}).filter('html', function($sce) {
  return function(input) {
    return $sce.trustAsHtml(input);
  }
}).filter('symbol', function() {
  var codeToSigns = {
    'PHP': '₱', // philipine peso
    'ARA': '₳', // Argentine austral
    'GBP': '£',
    'USD': '$',
    'JPY': '¥',
    'EUR': '€'
  };
  return function(input) {
    input = input.toUpperCase();
    if (codeToSigns[input]) {
      return codeToSigns[input];
    }
    return input;
  }
});