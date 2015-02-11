## ngPrettyCurrency

Converts three character currency codes (*EUR*) into their respective symbol (*€*).

### Install

* Install using Bower

        bower install ngPrettyCurrency --save

* Add the script

        <script type="text/javascript" src="ng-pretty-currency.js"></script>

* Add it to angular

        angular.module('app', ['ngPrettyCurrency']);

* Use it like this

        <ng-pretty-currency currency-code="tx.metadata.currency_type" ng-model="tx.amount" hide-amount="false"></ng-pretty-currency>

### License

MIT.
