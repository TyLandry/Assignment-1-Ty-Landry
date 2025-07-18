//References
//https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
//https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
//https://www.w3schools.com/js/js_timing.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString


document.addEventListener('DOMContentLoaded', () => {


    //Displays picture after 10 seconds
    setTimeout(() => {
        document.getElementById('profile-picture').style.display = 'block';
    }, 10000);
    
    // Displays the current date
    const currentDate = new Date().toLocaleDateString();
    document.getElementById('current-date').textContent = currentDate;
});