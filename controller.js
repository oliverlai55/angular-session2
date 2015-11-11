angular.module('myApp',[]).controller('myController',function($scope){
	
	$scope.addPerson = function(){
		$scope.students.push({
			name: $scope.newName, 
			desc: $scope.newDesc
		});
		$scope.newName = "";
		$scope.netDesc = "";
	}

	$scope.removeStudent = function (studentToRemove){
		var i = $scope.students.indexOf(studentToRemove)
		$scope.students.splice(i,1);
	}
	$scope.students =[

	{
		name: 'Freddy',
		desc: 'Made a cool football game',
		luckynumber: '1'
	},
	{
		name: 'Chance',
		desc: 'Bootstrap Guy',
		luckynumber: '2'
	},
	{
		name: 'Will',
		desc: 'The wig guy',
		luckynumber: '3'
	},
	{
		name: 'Stephen',
		desc: 'Awesome theme',
		luckynumber: '4'
	},
	{
		name: 'Oliver',
		desc: 'Eats 8 times/day',
		luckynumber: '5'
	},
	{
		name: 'Griffin',
		desc: 'Plays Games',
		luckynumber: '6'
	},
	{
		name: 'Yohsuke',
		desc: 'Hockey Player',
		luckynumber: '7'
	},

	];
});

	