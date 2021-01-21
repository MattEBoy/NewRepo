var submit = document.getElementById("submit")

submit.addEventListener("click", function () {
    var gradeCalc = 0;


    var asg = document.getElementById("Assignments").value
    var proj = document.getElementById("Projects").value
    var quiz = document.getElementById("Quizzes").value
    var exam = document.getElementById("Exams").value
    var intex = document.getElementById("INTEX").value
    //Projects
    gradeCalc = parseInt(asg)*0.5 + parseInt(proj)*0.1 + parseInt(quiz)*0.1 + parseInt(exam)*0.2 + parseInt(intex)*0.1;


    document.getElementById("expected_grade").innerHTML = "Expected Grade: " + gradeCalc + "%";
    alert(gradeCalc)

});