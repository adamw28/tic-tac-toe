$(document).ready(function() {
    let d=0;
    for(i=0;i<27;i++){
      $('<div class="board-row" id=i'+i+'>').appendTo("#root");
      for(j=0;j<50;j++){
        $('<button class="square" id="'+d+'">').appendTo('#i'+i+'');
        d++;
      }
    }

    let squares=Array(1350).fill(null);
    let isXNext=true;
    let score;

    $(".start").click(function(){
      squares=Array(1350).fill(null);
      $(".square").text("").removeAttr("disabled");
      isXNext=true;
      $(".game").text("Next player: X");
      $(".square").css("background","white");
    });

    function changeSquare(t){
      isXNext=!isXNext;
      t.attr("disabled","disabled");
      squares[t.attr("id")]=t.text();
      for (let i = 0; i < squares.length; i++) {
        if((squares[i] === "X" || squares[i] === "O") && ((i+1)%50 != 0 && (i+2)%50 != 0 && (i+3)%50 != 0 && (i+4)%50 != 0)){
          if(squares[i] === squares[i+1] && squares[i] === squares[i+2] && squares[i] === squares[i+3] && squares[i] === squares[i+4]){
            score = [i,i+1,i+2,i+3,i+4,squares[i]];
            return score;
          }
          if(squares[i] === squares[i+50] && squares[i] === squares[i+100] && squares[i] === squares[i+150] && squares[i] === squares[i+200]){
            score = [i,i+50,i+100,i+150,i+200,squares[i]];
            return score;
          }
          if(squares[i] === squares[i+51] && squares[i] === squares[i+102] && squares[i] === squares[i+153] && squares[i] === squares[i+204]){
            score = [i,i+51,i+102,i+153,i+204,squares[i]];
            return score;
          }
          if(squares[i] === squares[i+49] && squares[i] === squares[i+98] && squares[i] === squares[i+147] && squares[i] === squares[i+196]){
            score = [i,i+49,i+98,i+147,i+196,squares[i]];
            return score;
          }
        }
      }
    }

    $(".square").click(function(){
      if(isXNext){
        $(this).text("X");
        score = changeSquare($(this));
      }
      else{
        $(this).text("O");
        score = changeSquare($(this));
      }

      if(score){
        $(".game").text("Winner: " + score[5]);
        $(".square").attr("disabled","disabled");
        let [a,b,c,d,e] = score;
        $('#'+a+'').css("background","red");
        $('#'+b+'').css("background","red");
        $('#'+c+'').css("background","red");
        $('#'+d+'').css("background","red");
        $('#'+e+'').css("background","red");
      }
      else{
        $(".game").text("Next player: " + (isXNext ? "X" : "O"));
      }
    });
  });
  