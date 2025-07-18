//References
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//https://www.w3schools.com/jsref/jsref_sort.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
//https://www.w3schools.com/jsref/jsref_sort.asp
//https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table



//Staff array containing staff data
const staffData = [
    { name: "Brielle Williamson", position: "Integration Specialist", location: "New York", id: "4804", startDate: "2012/12/02", salary: 372000 },
    { name: "Herrod Chandler", position: "Sales Assistant", location: "San Francisco", id: "9608", startDate: "2012/08/06", salary: 137500 },
    { name: "Rhona Davidson", position: "Integration Specialist", location: "Tokyo", id: "6200", startDate: "2010/10/14", salary: 327900 },
    { name: "Colleen Hurst", position: "Javascript Developer", location: "San Francisco", id: "2360", startDate: "2009/09/15", salary: 205500 },
    { name: "Sonya Frost", position: "Software Engineer", location: "Edinburgh", id: "1667", startDate: "2008/12/13", salary: 103600 },
    { name: "Jena Gaines", position: "Office Manager", location: "London", id: "3814", startDate: "2008/12/19", salary: 90560 },
    { name: "Quinn Flynn", position: "Support Lead", location: "Edinburgh", id: "9497", startDate: "2013/03/03", salary: 342000 },
    { name: "Tiger Nixon", position: "System Architect", location: "Edinburgh", id: "5421", startDate: "2011/04/25", salary: 320800 },
    { name: "Garrett Winters", position: "Accountant", location: "Tokyo", id: "8422", startDate: "2011/07/25", salary: 170750 },
    { name: "Ashton Cox", position: "Junior Technical Author", location: "San Francisco", id: "1562", startDate: "2009/01/12", salary: 86000 },
    { name: "Cedric Kelly", position: "Senior Javascript Developer", location: "Edinburgh", id: "6224", startDate: "2012/03/29", salary: 433060 },
    { name: "Airi Satou", position: "Accountant", location: "Tokyo", id: "5407", startDate: "2008/11/28", salary: 162700 },
    { name: "Charde Marshall", position: "Regional Director", location: "San Francisco", id: "6741", startDate: "2008/10/16", salary: 470600 },
    { name: "Haley Kennedy", position: "Senior Marketing Designer", location: "London", id: "3597", startDate: "2012/12/18", salary: 313500 },
    { name: "Tatyana Fitzpatrick", position: "Regional Director", location: "London", id: "1965", startDate: "2010/03/17", salary: 385750 },
    { name: "Michael Silva", position: "Marketing Designer", location: "London", id: "1581", startDate: "2012/11/27", salary: 198500 },
    { name: "Paul Byrd", position: "Chief Financial Officer (CFO)", location: "New York", id: "3059", startDate: "2010/06/09", salary: 725000 },
    { name: "Gloria Little", position: "Systems Administrator", location: "New York", id: "1721", startDate: "2009/04/10", salary: 237500 },
    { name: "Bradley Greer", position: "Software Engineer", location: "London", id: "2558", startDate: "2012/10/13", salary: 132000 },
    { name: "Dai Rios", position: "Personnel Lead", location: "Edinburgh", id: "2290", startDate: "2012/09/26", salary: 217500 },
    { name: "Jenette Caldwell", position: "Development Lead", location: "New York", id: "1937", startDate: "2011/09/03", salary: 345000 },
    { name: "Yuri Berry", position: "Chief Marketing Officer (CMO)", location: "New York", id: "6154", startDate: "2009/06/25", salary: 675000 },
    { name: "Caesar Vance", position: "Pre-Sales Support", location: "New York", id: "8330", startDate: "2011/12/12", salary: 106450 },
    { name: "Doris Wilder", position: "Sales Assistant", location: "Sidney", id: "3023", startDate: "2010/09/20", salary: 85600 },
    { name: "Angelica Ramos", position: "Chief Executive Officer (CEO)", location: "London", id: "5797", startDate: "2009/10/09", salary: 1200000 },
    { name: "Gavin Joyce", position: "Developer", location: "Edinburgh", id: "8822", startDate: "2010/12/22", salary: 92575 },
    { name: "Jennifer Chang", position: "Regional Director", location: "Singapore", id: "9239", startDate: "2010/11/14", salary: 357650 },
    { name: "Brenden Wagner", position: "Software Engineer", location: "San Francisco", id: "1314", startDate: "2011/06/07", salary: 206850 },
    { name: "Fiona Green", position: "Chief Operating Officer (COO)", location: "San Francisco", id: "2947", startDate: "2010/03/11", salary: 850000 },
    { name: "Shou Itou", position: "Regional Marketing", location: "Tokyo", id: "8899", startDate: "2011/08/14", salary: 163000 },
    { name: "Michelle House", position: "Integration Specialist", location: "Sidney", id: "2769", startDate: "2011/06/02", salary: 95400 },
    { name: "Suki Burks", position: "Developer", location: "London", id: "6832", startDate: "2009/10/22", salary: 114500 },
    { name: "Prescott Bartlett", position: "Technical Author", location: "London", id: "3606", startDate: "2011/05/07", salary: 145000 },
    { name: "Gavin Cortez", position: "Team Leader", location: "San Francisco", id: "2860", startDate: "2008/10/26", salary: 235500 },
    { name: "Martena Mccray", position: "Post-Sales support", location: "Edinburgh", id: "8240", startDate: "2011/03/09", salary: 324050 },
    { name: "Unity Butler", position: "Marketing Designer", location: "San Francisco", id: "5384", startDate: "2009/12/09", salary: 85675 },

];

//Debugging
console.log("Staff script loaded.");
console.log("Staff data:", staffData);

//object to keep track of sort order
let sortOrder = { name: "asc", salary: "asc" };

// Sorting function for Staff( by name or by salary)
function sortStaff(property) {
    staffData.sort((a, b) => {
        if (property === "name") {
            if (sortOrder[property] === "asc") {
                return a.name.localeCompare(b.name); // Ascending Order for names
            } else {
                return b.name.localeCompare(a.name); // Descending Order for names
            }
        } else if (property === "salary") {
            if (sortOrder[property] === "asc") {
                return a.salary - b.salary; // Ascending Order for salaries
            } else {
                return b.salary - a.salary; // Descending Order for salaries
            }
        }
    });

    // Toggle sort order
    sortOrder[property] = sortOrder[property] === "asc" ? "desc" : "asc";

    // Redisplay sorted Staff
    displayStaff();
}

// Display staff data in an html table
function displayStaff() {
    const tbody = document.querySelector("#staff-table tbody");
    if (!tbody) {
        console.error("Table body not found in the DOM.");
        return;
    }

    //Produce Rows of staff, and popluate the table
    tbody.innerHTML = staffData
        .map(
            (staff) =>
                `<tr>
                    <td>${staff.name}</td>
                    <td>${staff.position}</td>
                    <td>${staff.location}</td>
                    <td>${staff.id}</td>
                    <td>${staff.startDate}</td>
                    <td>$${staff.salary.toLocaleString()}</td>
                </tr>`
        )
        .join("");

    console.log("Staff data displayed successfully.");
}

// Ensure the function runs after the DOM is loaded
document.addEventListener("DOMContentLoaded", displayStaff);