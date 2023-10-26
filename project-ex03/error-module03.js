module.exports = {
  n: 10,
  s: 'java',
  o: {}
};

exports.b = false;
exports.f = function() {

}

//섞어서 사용하면 거의 에러남
//module은 객체를 만드는 것 -> 이름 지정 안됨
//그냥 exports는 꼭 이름 지정이 필요함
