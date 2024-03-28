var sub1 = +prompt("Enter Chemistry Marks");
 var sub2 = +prompt("Enter Physics Marks");
 var sub3 = +prompt("Enter Biology Marks");
 var sub4 = +prompt("Enter Math Marks");
 var sub5 = +prompt("Enter Computer Marks");
 var obtn =  (sub1 + sub2 + sub3 + sub4 + sub5);
 var totalmarks = +prompt("Enter total Marks");
 var percentage = obtn / totalmarks * 100; 
 var grade = " "
 console.log(percentage)
 if(percentage >= 80){
 var remrks = "Excellent";
   document.write("<h1>"+ "Toral Marks: 500"  + "Obtained Marks:" + obtn +   "Grade: A+"  +"Remarks:" + remrks +"</h1>") 
 document.write("<h1>" + "Percentage:" + percentage + "</h1>")
 }
 else if(percentage >= 70){
   alert("Grade: A")
 }
 else if(percentage >= 60){
   alert("Grade: B")
 }
 else if(percentage >= 50){
   alert("Grade: C")
 }
 else if(percentage >= 40){
   alert("Grade: D")
 }
 else{
   alert("Grade: F")
 }