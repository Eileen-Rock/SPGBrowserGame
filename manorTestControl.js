var i = 0;
angular.module('manorFloor', []).controller('myCtrlr', function($scope) {
    $scope.startUp = true;
    $scope.floor1 = false;
    $scope.floor2 = false;
    $scope.floor3 = false;
    $scope.floor4 = false;
    $scope.floor5 = false;
    $scope.landing1 = false;
    $scope.landing2 = false;
    $scope.landing3 = false;
    $scope.landing4 = false;
    $scope.landing5 = false;
    $scope.landing5_1 = false;
    $scope.landing5_2 = false;
    $scope.winner = false;
    $scope.winner_2 = false;
    $scope.fallen = false;
    $scope.fallen1 = false;
    $scope.fallen2 = false;
    $scope.fallen3 = false;
    $scope.fallen4 = false;
    $scope.fallen5 = false;
    $scope.fallen6 = false;
    $scope.butten = false;
    $scope.myCol = "2345.png";
    $scope.answer = 0;
    $scope.answer1 = "";
    $scope.answer2 = "";
    $scope.answer3 = "";
    $scope.answer4 = "";
    $scope.answer5 = "";
    $scope.answer6 = "";
    $scope.count1 = 0;
    $scope.floorNo = 0;


    $scope.colorCols = [{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"}
        ,{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"}
        ,{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"}
        ,{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"}
        ,{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"}
        ,{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"}
        ,{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"}
        ,{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"}
        ,{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"}
        ,{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"}
        ,{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"}
        ,{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"}
        ,{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"}
        ,{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"}
        ,{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"}
        ,{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"}
        ,{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"}
        ,{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"}
        ,{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"},{value:0,colr:"2345.png"}];

//Functionality functions
    $scope.entryWay = function(){
        switch($scope.floorNo) {
            case 1:
                $scope.startUp = false;
                $scope.floor1 = true;
                $scope.floor2 = false;
                $scope.floor3 = false;
                $scope.floor4 = false;
                $scope.floor5 = false;
                $scope.landing1 = false;
                $scope.landing2 = false;
                $scope.landing3 = false;
                $scope.landing4 = false;
                $scope.landing5 = false;
                $scope.landing5_1 = false;
                $scope.landing5_2 = false;
                $scope.winner = false;
                $scope.winner_2 = false;
                $scope.fallen = false;
                $scope.fallen1 = false;
                $scope.fallen2 = false;
                $scope.fallen3 = false;
                $scope.fallen4 = false;
                $scope.fallen5 = false;
                $scope.fallen6 = false;
                $scope.butten = false;
                $scope.answer = 0;
                $scope.answer1 = "";
                $scope.answer2 = "";
                $scope.answer3 = "";
                $scope.answer4 = "";
                $scope.answer5 = "";
                $scope.answer6 = "";
                $scope.count1 = 0;
                for (i = 0; i < 95; i++) {
                    $scope.colorCols[i].value = 0;
                    $scope.colorCols[i].colr = "2345.png";
                }
                break;
            case 2:
                $scope.startUp = false;
                $scope.floor1 = false;
                $scope.floor2 = true;
                $scope.floor3 = false;
                $scope.floor4 = false;
                $scope.floor5 = false;
                $scope.landing1 = false;
                $scope.landing2 = false;
                $scope.landing3 = false;
                $scope.landing4 = false;
                $scope.landing5 = false;
                $scope.landing5_1 = false;
                $scope.landing5_2 = false;
                $scope.winner = false;
                $scope.winner_2 = false;
                $scope.fallen = false;
                $scope.fallen1 = false;
                $scope.fallen2 = false;
                $scope.fallen3 = false;
                $scope.fallen4 = false;
                $scope.fallen5 = false;
                $scope.fallen6 = false;
                $scope.butten = false;
                $scope.answer = 0;
                $scope.answer1 = "";
                $scope.answer2 = "";
                $scope.answer3 = "";
                $scope.answer4 = "";
                $scope.answer5 = "";
                $scope.answer6 = "";
                $scope.count1 = 0;
                for (i = 0; i < 95; i++) {
                    $scope.colorCols[i].value = 0;
                    $scope.colorCols[i].colr = "2345.png";
                }
                break;
            case 3:
                $scope.startUp = false;
                $scope.floor1 = false;
                $scope.floor2 = false;
                $scope.floor3 = true;
                $scope.floor4 = false;
                $scope.floor5 = false;
                $scope.landing1 = false;
                $scope.landing2 = false;
                $scope.landing3 = false;
                $scope.landing4 = false;
                $scope.landing5 = false;
                $scope.landing5_1 = false;
                $scope.landing5_2 = false;
                $scope.winner = false;
                $scope.winner_2 = false;
                $scope.fallen = false;
                $scope.fallen1 = false;
                $scope.fallen2 = false;
                $scope.fallen3 = false;
                $scope.fallen4 = false;
                $scope.fallen5 = false;
                $scope.fallen6 = false;
                $scope.butten = false;
                $scope.answer = 0;
                $scope.answer1 = "";
                $scope.answer2 = "";
                $scope.answer3 = "";
                $scope.answer4 = "";
                $scope.answer5 = "";
                $scope.answer6 = "";
                $scope.count1 = 0;
                for (i = 0; i < 95; i++) {
                    $scope.colorCols[i].value = 0;
                    $scope.colorCols[i].colr = "2345.png";
                }
                break;
            case 4:
                $scope.startUp = false;
                $scope.floor1 = false;
                $scope.floor2 = false;
                $scope.floor3 = false;
                $scope.floor4 = true;
                $scope.floor5 = false;
                $scope.landing1 = false;
                $scope.landing2 = false;
                $scope.landing3 = false;
                $scope.landing4 = false;
                $scope.landing5 = false;
                $scope.landing5_1 = false;
                $scope.landing5_2 = false;
                $scope.winner = false;
                $scope.winner_2 = false;
                $scope.fallen = false;
                $scope.fallen1 = false;
                $scope.fallen2 = false;
                $scope.fallen3 = false;
                $scope.fallen4 = false;
                $scope.fallen5 = false;
                $scope.fallen6 = false;
                $scope.butten = false;
                $scope.answer = 0;
                $scope.answer1 = "";
                $scope.answer2 = "";
                $scope.answer3 = "";
                $scope.answer4 = "";
                $scope.answer5 = "";
                $scope.answer6 = "";
                $scope.count1 = 0;
                for (i = 0; i < 95; i++) {
                    $scope.colorCols[i].value = 0;
                    $scope.colorCols[i].colr = "2345.png";
                }
                break;
            case 5:
                $scope.startUp = false;
                $scope.floor1 = false;
                $scope.floor2 = false;
                $scope.floor3 = false;
                $scope.floor4 = false;
                $scope.floor5 = true;
                $scope.landing1 = false;
                $scope.landing2 = false;
                $scope.landing3 = false;
                $scope.landing4 = false;
                $scope.landing5 = false;
                $scope.landing5_1 = false;
                $scope.landing5_2 = false;
                $scope.winner = false;
                $scope.winner_2 = false;
                $scope.fallen = false;
                $scope.fallen1 = false;
                $scope.fallen2 = false;
                $scope.fallen3 = false;
                $scope.fallen4 = false;
                $scope.fallen5 = false;
                $scope.fallen6 = false;
                $scope.butten = false;
                $scope.answer = 0;
                $scope.answer1 = "";
                $scope.answer2 = "";
                $scope.answer3 = "";
                $scope.answer4 = "";
                $scope.answer5 = "";
                $scope.answer6 = "";
                $scope.count1 = 0;
                for (i = 0; i < 95; i++) {
                    $scope.colorCols[i].value = 0;
                    $scope.colorCols[i].colr = "2345.png";
                }
                break;
            default:
                $scope.startUp = true;
                $scope.floor1 = false;
                $scope.floor2 = false;
                $scope.floor3 = false;
                $scope.floor4 = false;
                $scope.floor5 = false;
                $scope.landing1 = false;
                $scope.landing2 = false;
                $scope.landing3 = false;
                $scope.landing4 = false;
                $scope.landing5 = false;
                $scope.landing5_1 = false;
                $scope.landing5_2 = false;
                $scope.winner = false;
                $scope.winner_2 = false;
                $scope.fallen = false;
                $scope.fallen1 = false;
                $scope.fallen2 = false;
                $scope.fallen3 = false;
                $scope.fallen4 = false;
                $scope.fallen5 = false;
                $scope.fallen6 = false;
                $scope.butten = false;
                $scope.answer = 0;
                $scope.answer1 = "";
                $scope.answer2 = "";
                $scope.answer3 = "";
                $scope.answer4 = "";
                $scope.answer5 = "";
                $scope.answer6 = "";
                $scope.count1 = 0;
                for (i = 0; i < 95; i++) {
                    $scope.colorCols[i].value = 0;
                    $scope.colorCols[i].colr = "2345.png";
                }
                break;
        }
    };
    $scope.walkTile = function(id){
        if($scope.colorCols[id].value === 0){
            $scope.colorCols[id].colr = "24534643.png";
            $scope.colorCols[id].value++;
            $scope.count1++;
        } else{
            $scope.startUp = false;
            $scope.floor1 = false;
            $scope.floor2 = false;
            $scope.floor3 = false;
            $scope.floor4 = false;
            $scope.floor5 = false;
            $scope.landing1 = false;
            $scope.landing2 = false;
            $scope.landing3 = false;
            $scope.landing4 = false;
            $scope.landing5 = false;
            $scope.fallen = true;
            $scope.butten = false;
        }
    };
    $scope.checkTiles = function(){
        if($scope.floor1){
            if($scope.count1 === 22){
                $scope.butten = true;
                $scope.count1 = 0;
            }
        } else if($scope.floor2){
            if($scope.count1 === 44){
                $scope.butten = true;
                $scope.count1 = 0;
            }
        }else if($scope.floor3){
            if($scope.count1 === 44){
                $scope.butten = true;
                $scope.count1 = 0;
            }
        }else if($scope.floor4){
            if($scope.count1 === 36){
                $scope.butten = true;
                $scope.count1 = 0;
            }
        }else if($scope.floor5){
            if($scope.count1 === 74){
                $scope.butten = true;
                $scope.count1 = 0;
            }
        }
    };
    $scope.wallTile = function(){
        $scope.fallen1 = true;
        $scope.floor1 = false;
        $scope.floor2 = false;
        $scope.floor3 = false;
        $scope.floor4 = false;
        $scope.floor5 = false;
        $scope.landing1 = false;
        $scope.landing2 = false;
        $scope.landing3 = false;
        $scope.landing4 = false;
        $scope.landing5 = false;
        $scope.startUp = false;
        $scope.butten = false;
    };

//Progression across page buttons
//Spine's Floor
    $scope.firstFloor = function(){
        $scope.startUp = false;
        $scope.floor1 = true;
        $scope.floorNo = 1;
        $scope.butten = false;
    };
    $scope.firstLanding = function(){
        $scope.floor1 = false;
        $scope.landing1 = true;
    };

//Lil Steve's floor
    $scope.secondFloor = function(){
        for(i = 0; i < 60; i++){
            $scope.colorCols[i].value = 0;
            $scope.colorCols[i].colr = "2345.png";
        }
        if($scope.answer == 4 || $scope.answer == "four"){
        $scope.landing1 = false;
        $scope.floor2 = true;
        $scope.floorNo = 2;
        $scope.butten = false;
        } else{
            $scope.fallen2 = true;
            $scope.landing1 = false;
        }
    };
    $scope.secondLanding = function(){
        $scope.floor2 = false;
        $scope.landing2 = true;
    };

//Bebop's floor
    $scope.thirdFloor = function(){
        for(i = 0; i < 60; i++){
            $scope.colorCols[i].value = 0;
            $scope.colorCols[i].colr = "2345.png";
        }
        $scope.answer1 = $scope.answer1.toLowerCase();
        if($scope.answer1 == "headbutt" || $scope.answer1 == "headbutts"){
            $scope.landing2 = false;
            $scope.floor3 = true;
            $scope.floorNo = 3;
            $scope.butten = false;
        } else{
            $scope.fallen3 = true;
            $scope.landing2 = false;
            $scope.floor3 = false;
        }
    };
    $scope.thirdLanding = function(){
        $scope.floor3 = false;
        $scope.landing3 = true;
    };

//Zero's floor
    $scope.fourthFloor = function(){
        for(i = 0; i < 60; i++){
            $scope.colorCols[i].value = 0;
            $scope.colorCols[i].colr = "2345.png";
        }
        $scope.answer2 = $scope.answer2.toLowerCase();
        if($scope.answer2 == "e" || $scope.answer2 == "the letter e"){
            $scope.landing3 = false;
            $scope.floor4 = true;
            $scope.floorNo = 4;
            $scope.butten = false;
        } else{
            $scope.fallen4 = true;
            $scope.landing3 = false;
            $scope.floor4 = false;
        }
    };
    $scope.fourthLanding = function(){
        $scope.floor4 = false;
        $scope.landing4 = true;
    };

//Rabbit's floor
    $scope.fifthFloor = function(){
        for(i = 0; i < 60; i++){
            $scope.colorCols[i].value = 0;
            $scope.colorCols[i].colr = "2345.png";
        }
        $scope.answer3 = $scope.answer3.toLowerCase();
        if($scope.answer3 == "marshmallow" || $scope.answer3 == "marshmallow world"){
            $scope.landing4 = false;
            $scope.floor5 = true;
            $scope.floorNo = 5;
            $scope.butten = false;
        } else{
            $scope.fallen5 = true;
            $scope.landing4 = false;
            $scope.floor5 = false;
        }
    };
    $scope.fifthLanding = function(){
        $scope.floor5 = false;
        $scope.landing5 = true;
    };

//Rabbit's riddles
    $scope.riddleOne = function(){
        $scope.answer4 = $scope.answer4.toLowerCase();
        if($scope.answer4 == "march"){
            $scope.landing5 = false;
            $scope.landing5_1 = true;
        } else{
            $scope.fallen6 = true;
            $scope.landing5 = false;
            $scope.floor5 = false;
        }
    };
    $scope.riddleTwo = function(){
        $scope.answer5 = $scope.answer5.toLowerCase();
        if($scope.answer5 == "won ton" || $scope.answer5 == "wonton" || $scope.answer5 == "wonton soup" || $scope.answer5 == "won ton soup"){
            $scope.landing5 = false;
            $scope.landing5_2 = true;
        } else{
            $scope.fallen6 = true;
            $scope.landing5_1 = false;
            $scope.floor5 = false;
        }
    };
    $scope.riddleThree = function(){
        $scope.answer6 = $scope.answer6.toLowerCase();
        if($scope.answer5 == "mile stone" || $scope.answer5 == "milestone"){
            $scope.landing5 = false;
            $scope.winner = true;
        } else{
            $scope.fallen6 = true;
            $scope.landing5_2 = false;
            $scope.floor5 = false;
        }
    };
    $scope.winner2 = function(){
        $scope.winner = false;
        $scope.winner_2 = true;
    };
});