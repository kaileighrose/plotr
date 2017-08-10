angular
.module('app', ['chart.js'])
.controller('PlotrController', function () {
  var ctrl = this;
  ctrl.dataPoints = [];

  ctrl.addData = function () {
    ctrl.dataPoints.push([ctrl.dataX, ctrl.dataY]);
      ctrl.dataX = '';
      ctrl.dataY = '';
  }
});