var triviaquestions = [
{
	question:"What is the world's longest river?",
	choices:["1)Amazon","2)Thames","3)MississippiRiver","4)White River"],
	correctAnswer:0,
    chosenanswer:-1
},
{
	question:"Name the world's biggest island",
	choices:["1)Iceland", "2)Greenland","3)Maldivs","4)Fijian"],
	correctAnswer:1,
    chosenanswer:-1
},
{
	question:"What is the diameter of Earth?",
	choices:["1)10,000miles", "2)40,000 miles", "3)60,000 miles", "4)8,000 miles"],
	correctAnswer:3,
    chosenanswer:-1
},
{
	question:"Which country is Prague in?",
	choices:["1) UK", "2)USA","3)Czech Republic","4)Spain"],
	correctAnswer:2,
    chosenanswer:-1
}];
$("#submit").hide();
$("#play-again").hide();
var tallycorrect=0;
var tallyincorrect=0;
var remainingtime=120;
var countdown;
$("#start").on('click', function(){
    start();
});
var start=function(){
    $("#trivia-form").empty();
    for (var i=0; i<triviaquestions.length; i++){
        // console.log($("#trivia-form"));
        $("#trivia-form").append("<label>"+triviaquestions[i].question+"</label><br>");
        for (var j=0; j<triviaquestions[i].choices.length; j++){
            console.log(i+","+j+","+triviaquestions[i]);
            if (j===triviaquestions[i].correctAnswer){
            $("#trivia-form").append('<input type="radio" name="question'+i+'" value="correct">'+triviaquestions[i].choices[j]+'<br>');
            }
            else{    
            $("#trivia-form").append('<input type="radio" name="question'+i+'" value="incorrect">'+triviaquestions[i].choices[j]+'<br>');
            }    
            //$("trivia-form").show(trivia.question);
        }
        console.log(triviaquestions[i].question);
        //countdown=setInterval(stopwatch,1000);
        //settimeInterval(stopwatch,1000);
        // $('#time-remaining').html("Time Remaining : "+remainingtime);
       	//  stopwatch();
       
    }
    countdown=setInterval(stopwatch,1000);
    $("#start").hide();
    $("#submit").show();
	$("#submit").on('click', function(){

      // stopwatch();
       submitAnswers();
       stop();


     $("#submit").hide();

    });
     stopwatch();

};

var submitAnswers = function()
{
    var radioValue = $("input[name='question0']:checked").val();
    console.log(radioValue);
    for (var i=0; i<triviaquestions.length; i++){
        if ( $("input[name='question"+i+"']:checked").val()==="correct")
        {
            console.log(true)
            tallycorrect++;
        }
        else
        {
            tallyincorrect++;
        }
    }
    $("#tallyright").html("Correct Answers "+tallycorrect);
    $("#tallywrong").html("Incorrect Answers " +tallyincorrect);
    $("#tallyright").show();
    $("#tallywrong").show();
    $("#play-again").show();
    $("#time-remaining").hide();
    $("#trivia-form").hide();
    stop();

};
    
//var countdown=setInterval(stopwatch,1000);
    
 var stopwatch=function()
	{
		remainingtime--;
		//clearInterval(countdown);
		$('#time-remaining').html("Time Remaining : "+ remainingtime+ "Seconds");
		stop();
	};

var stop=function(){

	if(remainingtime===0){
        //$(triviaquestions[i]).hide();
	clearInterval(countdown);
	//alert("Time's UP");
	$("#time-remaining").hide();
    $("#trivia-form").hide();
	}
  };
$("#play-again").on('click', function(){
   
 start();
 stopwatch();
 //$("input type=radio" ).prop( "checked", false );
 tallycorrect=0;
 tallyincorrect=0;
 remainingtime=120;
 countdown;
  $("#tallyright").html(tallycorrect);
  $("#tallywrong").html(tallyincorrect);
  $("#trivia-form").show();
  $("#time-remaining").show();
  $("#play-again").hide();

});

