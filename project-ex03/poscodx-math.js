//외부로 export하는 모듈

//ex02와 차이점 : 


//딱 객체 하나만 export 
exports.PI = 3.14 

exports.min = function() {
    // Array.prototype.forEach.call(arguments, function(e) {

    // });
    var min = Number.MAX_SAFE_INTEGER;
    Array.from(arguments).forEach(function(e) {
      if(e<min){
        min = e;
      }
    })
    return min;
  }

  exports.max=function() {
    var max = Number.MIN_SAFE_INTEGER;
    Array.from(arguments).forEach(function(e) {
      if(e>max){
        max = e;
      }
    })
    return max;
  }


