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
    });

    function changeSquare(t){
      isXNext=!isXNext;
      t.attr("disabled","disabled");
      squares[t.attr("id")]=t.text();
      for (let i = 0; i < squares.length; i++) {
        if((squares[i] === "X" || squares[i] === "O") &&
          ((i+1)%50 != 0 && (i+2)%50 != 0 && (i+3)%50 != 0 && (i+4)%50 != 0) &&
          ((squares[i] === squares[i+1] && squares[i] === squares[i+2] && squares[i] === squares[i+3] && squares[i] === squares[i+4]) || 
          (squares[i] === squares[i+50] && squares[i] === squares[i+100] && squares[i] === squares[i+150] && squares[i] === squares[i+200])
          || (squares[i] === squares[i+51] && squares[i] === squares[i+102] && squares[i] === squares[i+153] && squares[i] === squares[i+204])
          || (squares[i] === squares[i+49] && squares[i] === squares[i+98] && squares[i] === squares[i+147] && squares[i] === squares[i+196]))) {
            console.log("return", i, squares[i]);
            return squares[i];
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
        $(".game").text("Winner: " + score);
        $(".square").attr("disabled","disabled");
      }
      else{
        $(".game").text("Next player: " + (isXNext ? "X" : "O"));
      }

      console.log($(this).attr("id"),squares[$(this).attr("id")]);
    });
  });
  