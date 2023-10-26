//외부로 export하는 모듈

//딱 객체 하나만 export 
module.exports = {
  PI: 3.14,
  min:function() {
    // Array.prototype.forEach.call(arguments, function(e) {

    // });
    var min = Number.MAX_SAFE_INTEGER;
    Array.from(arguments).forEach(function(e) {
      if(e<min){
        min = e;
      }
    })
    return min;
  },
  max:function() {
    var max = Number.MIN_SAFE_INTEGER;
    Array.from(arguments).forEach(function(e) {
      if(e>max){
        max = e;
      }
    })
    return max;
  }

}

exports.a = 10;
module.exports.a = 10;
