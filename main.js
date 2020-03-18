// chance는 4개당 1스테이지, 난이도 설정
// time도 동일
var chance = [1,0.9,0.8,0.7,0.75,0.85,0.85,0.85,0.85,0.97,0.96,0.95,0.02,0.95,0.95,0.95,1,1,1,0.2,0.005,1,1,1,0.5,0.5,0.5,0.6,0.9,0.89,0.88,0.87,0.7,0.6,0.5,0.4,0.001,0.99,0.99,0.99];
var time = [0.2,0.2,0.1,0.1,0.5,0.4,0.3,0.2,10,0,0,0,0,0.1,0.1,0.1,1,1,1,0,0,0,0,0,0.05,0.05,0.05,0.1,1,0.9,0.8,0.7,1,1.2,1.4,1.6,0,0,0,0];
var stage = 1;
var task = 0;
var waiting = 0;
$(function (){
  // 버튼 클릭 시 가능 여부
  $('#GoButton').click(function () {
    if (waiting >= time[(stage - 1) * 4 + task] * 1000) {
      if (Math.random() <= chance[(stage - 1) * 4 + task]) {
        task++;
        waiting = 0;
        if (task > 3) {
          task = 0;
          stage++;
        }
      }
      else {
        waiting = 0;
        task = 0;
      }
    }
  });
});
// 퍼센트, 초 변하게 하기
setInterval ( function (){
  $('#firstper').html(function (index,html) {
    return '#1 : ' + chance[(stage - 1) * 4] * 100 + '%, ';
  });
  $('#firstsec').html(function (index,html) {
    return time[(stage - 1) * 4] + ' 초';
  });
  $('#secondper').html(function (index,html) {
    return '#2 : ' + chance[(stage - 1) * 4 + 1] * 100 + '%, ';
  });
  $('#secondsec').html(function (index,html) {
    return time[(stage - 1) * 4 + 1] + ' 초';
  });
  $('#thirdper').html(function (index,html) {
    return '#3 : ' + chance[(stage - 1) * 4 + 2] * 100 + '%, ';
  });
  $('#thirdsec').html(function (index,html) {
    return time[(stage - 1) * 4 + 2] + ' 초';
  });
  $('#fourthper').html(function (index,html) {
    return '#4 : ' + chance[(stage - 1) * 4 + 3] * 100 + '%, ';
  });
  $('#fourthsec').html(function (index,html) {
    return time[(stage - 1) * 4 + 3] + ' 초';
  });
  waiting = waiting + 50;
  if (waiting > time[(stage - 1) * 4 + task] * 1000) {
    $("#GoButton").attr({
      'class' : 'DoButton'
    });
  }
  else {
    $("#GoButton").attr({
      'class' : 'DoButtonRed'
    });
  }
  $('#titlemsgs').html(function (index,html) {
    return '운빨적망겜 : Stage ' + stage;
  });
}, (50));
// >, < 표시하게 하기
setInterval ( function (){
  if(task == 0){
    $('#firstopen').html(function (index,html) {
      return '> ';
    });
    $('#firstclose').html(function (index,html) {
      return ' <';
    });
  }
  if(task != 0){
    $('#firstopen').html(function (index,html) {
      return '  ';
    });
    $('#firstclose').html(function (index,html) {
      return '  ';
    });
  }
  if(task == 1){
    $('#secondopen').html(function (index,html) {
      return '> ';
    });
    $('#secondclose').html(function (index,html) {
      return ' <';
    });
  }
  if(task != 1){
    $('#secondopen').html(function (index,html) {
      return '  ';
    });
    $('#secondclose').html(function (index,html) {
      return '  ';
    });
  }
  if(task == 2){
    $('#thirdopen').html(function (index,html) {
      return '> ';
    });
    $('#thirdclose').html(function (index,html) {
      return ' <';
    });
  }
  if(task != 2){
    $('#thirdopen').html(function (index,html) {
      return '  ';
    });
    $('#thirdclose').html(function (index,html) {
      return '  ';
    });
  }
  if(task == 3){
    $('#fourthopen').html(function (index,html) {
      return '> ';
    });
    $('#fourthclose').html(function (index,html) {
      return ' <';
    });
  }
  if(task != 3){
    $('#fourthopen').html(function (index,html) {
      return '  ';
    });
    $('#fourthclose').html(function (index,html) {
      return '  ';
    });
  }

}, (20));
