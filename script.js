function calculateGrade() {
    let grade1 = parseFloat(document.getElementById('grade1').value) || 0;
    let grade2 = parseFloat(document.getElementById('grade2').value) || 0;
    let grade3 = parseFloat(document.getElementById('grade3').value) || 0;
    
    let average = (grade1 + grade2 + grade3) / 3;
    document.getElementById('result').textContent = "Your average grade is: " + average.toFixed(2);
}
