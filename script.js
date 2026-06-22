let students =
    JSON.parse(localStorage.getItem("students"))
    || [];

displayStudents();

function addStudent()
{
    let roll =
        document.getElementById("roll").value;

    let name =
        document.getElementById("name").value;

    let phone =
        document.getElementById("phone").value;

    let course =
        document.getElementById("course").value;

    let department =
        document.getElementById("department").value;

    let semester =
        document.getElementById("semester").value;

    let marks =
        document.getElementById("marks").value;

    if(
        !roll ||
        !name ||
        !phone ||
        !course ||
        !department ||
        !semester ||
        !marks
    )
    {
        alert("Please fill all fields");
        return;
    }

    let exists =
        students.find(
            student => student.roll == roll
        );

    if(exists)
    {
        alert("Roll Number already exists");
        return;
    }

    let grade =
        calculateGrade(marks);

    students.push({
        roll,
        name,
        phone,
        course,
        department,
        semester,
        marks,
        grade
    });

    saveData();

    displayStudents();

    clearForm();
}

function calculateGrade(marks)
{
    marks = Number(marks);

    if(marks >= 90)
        return "A";

    if(marks >= 75)
        return "B";

    if(marks >= 60)
        return "C";

    return "D";
}

function displayStudents()
{
    let table =
        document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach((student,index)=>
    {
        table.innerHTML +=
        `
        <tr>

            <td>${student.roll}</td>

            <td>${student.name}</td>

            <td>${student.phone}</td>

            <td>${student.course}</td>

            <td>${student.department}</td>

            <td>${student.semester}</td>

            <td>${student.marks}</td>

            <td>${student.grade}</td>

            <td>

                <button
                    class="edit-btn"
                    onclick="editStudent(${index})">
                    Edit/Update
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteStudent(${index})">
                    Delete
                </button>

            </td>

        </tr>
        `;
    });

    document.getElementById("count").innerText =
        students.length;
}

function editStudent(index)
{
    document.getElementById("roll").value =
        students[index].roll;

    document.getElementById("name").value =
        students[index].name;

    document.getElementById("phone").value =
        students[index].phone;

    document.getElementById("course").value =
        students[index].course;

    document.getElementById("department").value =
        students[index].department;

    document.getElementById("semester").value =
        students[index].semester;

    document.getElementById("marks").value =
        students[index].marks;

    students.splice(index,1);

    saveData();

    displayStudents();
}

function deleteStudent(index)
{
    let confirmDelete =
        confirm(
            "Delete this student record?"
        );

    if(confirmDelete)
    {
        students.splice(index,1);

        saveData();

        displayStudents();
    }
}

function searchStudent()
{
    let roll =
        document.getElementById("searchRoll").value;

    let result =
        students.find(
            student => student.roll == roll
        );

    if(result)
    {
        alert(
`Student Found

Roll No.: ${result.roll}

Student's Name: ${result.name}

Phone No.: ${result.phone}

Course: ${result.course}

Department / Branch: ${result.department}

Semester: ${result.semester}

Marks: ${result.marks}

Grade: ${result.grade}`
        );
    }
    else
    {
        alert("Student Not Found");
    }
}

function saveData()
{
    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );
}

function clearForm()
{
    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("course").value = "";
    document.getElementById("department").value = "";
    document.getElementById("semester").value = "";
    document.getElementById("marks").value = "";
}