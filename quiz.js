function check()
{
       var c=0;
	   var q1=document.quiz.question1.value;
	   var q2=document.quiz.question2.value;
	   var q3=document.quiz.question3.value;
	   var q4=document.quiz.question4.value;
	   var q5=document.quiz.question5.value;
	   var q6=document.quiz.question6.value;
	   var q7=document.quiz.question7.value;
	   var q8=document.quiz.question8.value;
	   var q9=document.quiz.question9.value;
	   var q10=document.quiz.question10.value;
	   var result= document.getElementById('result');
	   var quiz=document.getElentById("quiz");
	   if (q1=="javascript") {c++}
	    if (q2=="Markup Language") {c++} 
		if (q3=="Tim Berners-Lee") {c++}
		 if (q4=="1990") {c++}
		  if (q5=="HTML Tag") {c++}
		   if (q6=="Web Browser") {c++}
		    if (q7=="Tim Berners-Lee") {c++}
			 if (q8=="Microsofts Bing") {c++}
			  if (q9=="Angle") {c++}
			   if (q10=="img") {c++}
			   quiz.style.display="None";
	    result.textContent='$(c)';
 }