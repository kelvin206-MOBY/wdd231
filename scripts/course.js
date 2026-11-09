const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        certificate: "Web and Computer Programming",
        technology: ["Python"],
        completed: true
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        technology: ["HTML", "CSS"],
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        certificate: "Web and Computer Programming",
        technology: ["Python"],
        completed: true
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        certificate: "Web and Computer Programming",
        technology: ["C#"],
        completed: false
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        technology: ["HTML", "CSS", "JavaScript"],
        completed: true
    },
    {
        subject: "WDD",
        number: 231,
        title: "Frontend Web Development I",
        credits: 2,
        certificate: "Web and Computer Programming",
        technology: ["HTML", "CSS", "JavaScript"],
        completed: false
    }
];


const courseContainer = document.querySelector("#course-container");
const allButton = document.querySelector("#all-courses");
const wddButton = document.querySelector("#wdd-courses");
const cseButton = document.querySelector("#cse-courses");
const totalCredits = document.querySelector("#total-credits");

const filterButtons = [allButton, wddButton, cseButton];

function setActiveButton(activeButton) {
    filterButtons.forEach(button => {
        button.classList.remove("active");
    });

    activeButton.classList.add("active");
}

function displayCourses(courseList) {

    courseContainer.innerHTML = "";

    courseList.forEach(course => {

        const courseCard = document.createElement("div");

        courseCard.classList.add("course-card");

        if (course.completed) {
            courseCard.classList.add("completed");
        }
        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>${course.credits} Credits</p>
        `;

        courseContainer.appendChild(courseCard);

    });

    const creditTotal = courseList.reduce((total, course) => {
        return total + course.credits;
    }, 0);

    totalCredits.textContent = `Total Credits: ${creditTotal}`;

}


displayCourses(courses);
setActiveButton(allButton);


allButton.addEventListener("click", () => {
    displayCourses(courses);
    setActiveButton(allButton);

});


wddButton.addEventListener("click", () => {

    const wddCourses = courses.filter(course => {
        return course.subject === "WDD";
    });

    displayCourses(wddCourses);
    setActiveButton(wddButton);

});


// Display CSE courses when CSE is clicked
cseButton.addEventListener("click", () => {

    const cseCourses = courses.filter(course => {
        return course.subject === "CSE";
    });

    displayCourses(cseCourses);
    setActiveButton(cseButton);
});