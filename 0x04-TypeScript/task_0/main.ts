// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Johnson",
  lastName: "Dwayne",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "London",
};

// Array of students
const studentsList: Student[] = [student1, student2];

// Render table
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

// Create header row
const headerRow = document.createElement("tr");
const th1 = document.createElement("th");
th1.textContent = "First Name";
const th2 = document.createElement("th");
th2.textContent = "Location";
headerRow.appendChild(th1);
headerRow.appendChild(th2);
thead.appendChild(headerRow);

// Append rows for each student
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(thead);
table.appendChild(tbody);

// Append table to the body
document.body.appendChild(table);
