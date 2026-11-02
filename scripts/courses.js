const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will cover the building blocks of programming languages (variables, decisions, calculations, loops, array, and functions) using Python.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually building and publishing several websites.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students deepen their understanding of programming concepts while learning how to write functions, organize code into modules, write unit tests, and use recursive functions.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the concepts of object-oriented programming for students who have already introduced programming. Students will learn how to use classes and objects to build applications.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create user-friendly experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, clean code, performance, and advanced JavaScript.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];


const courseContainer = document.querySelector('#course-cards-container');
const totalCreditsDisplay = document.querySelector('#total-credits');
const allBtn = document.querySelector('#allBtn');
const cseBtn = document.querySelector('#cseBtn');
const wddBtn = document.querySelector('#wddBtn');


function displayCourses(filteredCourses) {
    courseContainer.innerHTML = '';

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

        if (course.completed) {
            courseCard.classList.add('completed');
        }

        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
        `;

        courseContainer.appendChild(courseCard);
    });


    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsDisplay.textContent = `The total credits for courses listed above is ${totalCredits}`;
}


allBtn.addEventListener('click', () => {
    displayCourses(courses);
});

cseBtn.addEventListener('click', () => {
    const cseCourses = courses.filter(course => course.subject === 'CSE');
    displayCourses(cseCourses);
});

wddBtn.addEventListener('click', () => {
    const wddCourses = courses.filter(course => course.subject === 'WDD');
    displayCourses(wddCourses);
});


displayCourses(courses);