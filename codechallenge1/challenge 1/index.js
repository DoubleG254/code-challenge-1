
function grading() {   //This a function that logs the grades depending on the marks.
   let marks= document.querySelector("#marks").value;
   let Grade = document.querySelector("#Grade");
   if (marks > 79 && marks <= 100) {
      Grade.innerHTML = `GRADE: A`;
    }
    if (marks > 59 && marks < 79) {
      Grade.innerHTML = `GRADE: B`;
    }
    if (marks > 49 && marks < 59) {
      Grade.innerHTML = `GRADE: C`;
    }
    if (marks > 39 && marks < 49) {
      Grade.innerHTML = `GRADE: D`;
    }
    if (marks >= 0 && marks < 39) {
      Grade.innerHTML = `GRADE: E`;
    }
    if (marks >100) {
      Grade.innerHTML = `INVALID MARKS`
    }

  //ONLY VALUES FROM 0 TO 100 CAN BE GRADED
}

