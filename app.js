angular
  .module('app', ['chart.js'])
  .controller('PlotrController', function ($scope) {
    var ctrl = this;
    ctrl.count = 0;
    ctrl.dataPointsX = [];
    ctrl.dataPointsY = [];
    ctrl.labels = [];

    ctrl.addData = function () { 
      ctrl.dataPointsX.push(ctrl.parseData(ctrl.dataX));
      ctrl.dataPointsY.push(ctrl.parseData(ctrl.dataY));
      ctrl.count += 1;
      ctrl.labels.push(["Set " + ctrl.count.toString()]);
      ctrl.dataX = '';
      ctrl.dataY = '';
    }

    ctrl.parseData = function (data) {
      holder = data.split(",");
      array = [];
      for (var i = 0; i < holder.length; i++) {
        array.push(parseInt(holder[i]));
      }
      return array;
    }

    $scope.labels = ctrl.dataPointsX;
    $scope.series = ctrl.labels;
    $scope.data = ctrl.dataPointsY;
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      }
    };
  });