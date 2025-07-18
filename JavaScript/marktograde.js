//References
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
//https://www.w3schools.com/js/js_errors.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
//Debugging
console.log("marktograde.js loaded successfully");


//This function converts marks(numbers) to grades(A-F)
function MarkToGrade() {
    // Get input and output elements
    const markInput = document.getElementById('mark-input-box').value;
    const validationMessage = document.getElementById('validation-message');
    const gradeResult = document.getElementById('grade-result');

    // Debugging to ensure the function is called correctly
    console.log('MarkToGrade function called.');
    console.log('Input value:', markInput);

    // Clear previous messages
    validationMessage.textContent = '';
    gradeResult.textContent = '';

    try {
        //Parse the input
        const mark = parseInt(markInput, 10);

        //Validate the input
        if (isNaN(mark)) throw 'Invalid input: Please enter a number.';
        if (mark < 0) throw 'Invalid input: Number cannot be negative.';
        if (mark > 100) throw 'Invalid input: Number cannot exceed 100.';

        //
        let grade;
        if (mark >= 90) grade = 'A';
        else if (mark >= 80) grade = 'B';
        else if (mark >= 70) grade = 'C';
        else if (mark >= 60) grade = 'D';
        else if (mark >= 50) grade = 'E';
        else grade = 'F';

        //Display the Grade
        gradeResult.textContent = `Your grade is: ${grade}`;
    } catch (error) {
        //Display Error Message
        validationMessage.textContent = error;
    }
}