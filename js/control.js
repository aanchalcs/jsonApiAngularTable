(function() {
	angular.module("myA")
	.controller("myC", MyC);

	function MyC($scope, $http){
		//var vm = this;
		$http.get("https://api.github.com/users/mralexgray/repos")
		.success(function(res){
		$scope.dataFromApi = res;
	})
	}
})();

