function submit_form(){
    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const image = document.getElementById("image").value;
    const img_caption = document.getElementById("img_caption").value;
    const pers_background = document.getElementById("pers_background").value;
    const prof_background = document.getElementById("prof_background").value;
    const ac_background = document.getElementById("ac_background").value;
    const web_background = document.getElementById("web_background").value;
    const computer = document.getElementById("computer").value;
    const courses = Array.from(document.getElementsByClassName("course"))
                     .map(course => course.value);
    const funny = document.getElementById("funny").value;
    const anything = document.getElementById("extra").value;

    const final_form= document.getElementById("result_form");
    final_form.innerHTML= `
    <h2>Introduction</h2>
    <h3>${name}'s "${mascot}"</h3>
    <figure>
        <img src="${image}" class="pfp" alt="${img_caption}">
        <figcaption>${img_caption}</figcaption>
    </figure>
    <ul>
            <li><b>Personal Background: </b>${pers_background}</li>
            <li><b>Professional Background: </b>${prof_background}</li>
            <li><b>Academic Background: </b>${ac_background}</li>
            <li><b>Background in Subject: </b>${web_background}</li>
            <li><b>Primary Computer Platform: </b>${computer}</li>
            <li><b>Interest: </b>${anything}</li>
            <li><b>Courses I'm Taking & Why: </b>
                <ul>
                    ${courses.map(course => `<li><b>${course}</b></li>`).join("")}
                </ul>
            </li>
            <li><b>Funny/Interesting Item about Yourself: </b>${funny}</li>
        </ul>
    `;
    
    
    
}

function addCourse() {
    const coursesDiv = document.getElementById("courses");
    const newCourseDiv = document.createElement("div");
    newCourseDiv.innerHTML = `
        <label for="course">Course Being Taken:</label>
        <input type="text" class="course" required>
    `;

    const del_button = document.createElement("button");
    del_button.type = "button";
    del_button.textContent = "Delete";
    del_button.onclick = function() {
        coursesDiv.removeChild(newCourseDiv);
        coursesDiv.removeChild(del_button);
    };

    coursesDiv.appendChild(newCourseDiv);
    coursesDiv.appendChild(del_button);
}

