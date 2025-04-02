document.getElementById("Logo").addEventListener('click', function(){
    window.location.href ="index.html";
});
// Color Change Function
document.getElementById("ColorChangeBtn").addEventListener('click',    function() {
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);

        var newColor = "rgb(" + red + "," + green + "," + blue + ")";
        document.getElementById("BodyWhole").style.backgroundColor = newColor;
      }

);

const now = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"
];

const dayAbbreviation = days[now.getDay()];
const dayOfMonth = now.getDate();
const monthName = months[now.getMonth()];
const year = now.getFullYear();

const formattedDate = `${dayOfMonth} ${monthName} ${year}`;
console.log(formattedDate);

document.getElementById("Day").innerText = dayAbbreviation;
document.getElementById("Date").innerText = formattedDate;

document.getElementById("Clear_History").addEventListener('click',    function() {

    const parentElement = document.getElementById("Sidebar_Notification");
    parentElement.innerHTML = "";


    alert("History Cleared");
  }
);

var n = 7;
// Task Complete
document.getElementById("btn1").addEventListener('click',    function(event) {
    event.preventDefault();
    const title = document.getElementById("title1").value;

    document.getElementById("btn1").disabled = true;
    document.getElementById("btn1").style.backgroundColor = "gray";

    const plusOne = document.getElementById("total_completed").innerText;
    const plusOneConvert = parseInt(plusOne);
    const sum = plusOneConvert + 1;

    document.getElementById("total_completed").innerText = sum;

    const minOne = document.getElementById("Assigned").innerText;
    const minOneConvert = parseInt(minOne);
    const min= minOneConvert - 1;

    document.getElementById("Assigned").innerText = min;

    n--;

    const now = new Date();
    const when_completed = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    console.log(when_completed);


    if(n>1){
        const container = document.getElementById("Sidebar_Notification");
        const p = document.createElement('p');
        p.innerText = `You have Complete The Task ${title} at ${when_completed}`;
        container.appendChild(p);


        alert(title + " Task Completed Succesfully");

    }else{
        const container = document.getElementById("Sidebar_Notification");
        const p = document.createElement('p');
        p.innerText = `Congratulationsssssss!!!!!By Completing This Task ${title} at ${when_completed}. You have completed all the task for today`;
        container.appendChild(p);


        alert(title + " Task Completed. Congratulationsssssss!!!!!By Completing This Task you have completed all the task for today");
    }
    console.log(n);

  }
);
document.getElementById("btn2").addEventListener('click',    function(event) {
    event.preventDefault();
    const title = document.getElementById("title2").value;

    document.getElementById("btn2").disabled = true;
    document.getElementById("btn2").style.backgroundColor = "gray";

    const plusOne = document.getElementById("total_completed").innerText;
    const plusOneConvert = parseInt(plusOne);
    const sum = plusOneConvert + 1;

    document.getElementById("total_completed").innerText = sum;

    const minOne = document.getElementById("Assigned").innerText;
    const minOneConvert = parseInt(minOne);
    const min= minOneConvert - 1;

    document.getElementById("Assigned").innerText = min;

    n--;

    const now = new Date();
    const when_completed = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    console.log(when_completed);


    if(n>1){
        const container = document.getElementById("Sidebar_Notification");
        const p = document.createElement('p');
        p.innerText = `You have Complete The Task ${title} at ${when_completed}`;
        container.appendChild(p);


        alert(title + " Task Completed Succesfully");

    }else{
        const container = document.getElementById("Sidebar_Notification");
        const p = document.createElement('p');
        p.innerText = `Congratulationsssssss!!!!!By Completing This Task ${title} at ${when_completed}. You have completed all the task for today`;
        container.appendChild(p);


        alert(title + " Task Completed. Congratulationsssssss!!!!!By Completing This Task you have completed all the task for today");
    }
    console.log(n);

  }
);
document.getElementById("btn3").addEventListener('click',    function(event) {
    event.preventDefault();
    const title = document.getElementById("title3").value;

    document.getElementById("btn3").disabled = true;
    document.getElementById("btn3").style.backgroundColor = "gray";

    const plusOne = document.getElementById("total_completed").innerText;
    const plusOneConvert = parseInt(plusOne);
    const sum = plusOneConvert + 1;

    document.getElementById("total_completed").innerText = sum;

    const minOne = document.getElementById("Assigned").innerText;
    const minOneConvert = parseInt(minOne);
    const min= minOneConvert - 1;

    document.getElementById("Assigned").innerText = min;

    n--;

    const now = new Date();
    const when_completed = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    console.log(when_completed);


    if(n>1){
        const container = document.getElementById("Sidebar_Notification");
        const p = document.createElement('p');
        p.innerText = `You have Complete The Task ${title} at ${when_completed}`;
        container.appendChild(p);


        alert(title + " Task Completed Succesfully");

    }else{
        const container = document.getElementById("Sidebar_Notification");
        const p = document.createElement('p');
        p.innerText = `Congratulationsssssss!!!!!By Completing This Task ${title} at ${when_completed}. You have completed all the task for today`;
        container.appendChild(p);


        alert(title + " Task Completed. Congratulationsssssss!!!!!By Completing This Task you have completed all the task for today");
    }
    console.log(n);

  }
);
document.getElementById("btn4").addEventListener('click',    function(event) {
    event.preventDefault();
    const title = document.getElementById("title4").value;

    document.getElementById("btn4").disabled = true;
    document.getElementById("btn4").style.backgroundColor = "gray";

    const plusOne = document.getElementById("total_completed").innerText;
    const plusOneConvert = parseInt(plusOne);
    const sum = plusOneConvert + 1;

    document.getElementById("total_completed").innerText = sum;

    const minOne = document.getElementById("Assigned").innerText;
    const minOneConvert = parseInt(minOne);
    const min= minOneConvert - 1;

    document.getElementById("Assigned").innerText = min;

    n--;

    const now = new Date();
    const when_completed = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    console.log(when_completed);


    if(n>1){
        const container = document.getElementById("Sidebar_Notification");
        const p = document.createElement('p');
        p.innerText = `You have Complete The Task ${title} at ${when_completed}`;
        container.appendChild(p);


        alert(title + " Task Completed Succesfully");

    }else{
        const container = document.getElementById("Sidebar_Notification");
        const p = document.createElement('p');
        p.innerText = `Congratulationsssssss!!!!!By Completing This Task ${title} at ${when_completed}. You have completed all the task for today`;
        container.appendChild(p);


        alert(title + " Task Completed. Congratulationsssssss!!!!!By Completing This Task you have completed all the task for today");
    }
    console.log(n);

  }
);
document.getElementById("btn5").addEventListener('click',    function(event) {
    event.preventDefault();
    const title = document.getElementById("title5").value;

    document.getElementById("btn5").disabled = true;
    document.getElementById("btn5").style.backgroundColor = "gray";

    const plusOne = document.getElementById("total_completed").innerText;
    const plusOneConvert = parseInt(plusOne);
    const sum = plusOneConvert + 1;

    document.getElementById("total_completed").innerText = sum;

    const minOne = document.getElementById("Assigned").innerText;
    const minOneConvert = parseInt(minOne);
    const min= minOneConvert - 1;

    document.getElementById("Assigned").innerText = min;

    n--;

    const now = new Date();
    const when_completed = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    console.log(when_completed);


    if(n>1){
        const container = document.getElementById("Sidebar_Notification");
        const p = document.createElement('p');
        p.innerText = `You have Complete The Task ${title} at ${when_completed}`;
        container.appendChild(p);


        alert(title + " Task Completed Succesfully");

    }else{
        const container = document.getElementById("Sidebar_Notification");
        const p = document.createElement('p');
        p.innerText = `Congratulationsssssss!!!!!By Completing This Task ${title} at ${when_completed}. You have completed all the task for today`;
        container.appendChild(p);


        alert(title + " Task Completed. Congratulationsssssss!!!!!By Completing This Task you have completed all the task for today");
    }
    console.log(n);

  }
);
document.getElementById("btn6").addEventListener('click',    function(event) {
    event.preventDefault();
    const title = document.getElementById("title6").value;

    document.getElementById("btn6").disabled = true;
    document.getElementById("btn6").style.backgroundColor = "gray";

    const plusOne = document.getElementById("total_completed").innerText;
    const plusOneConvert = parseInt(plusOne);
    const sum = plusOneConvert + 1;

    document.getElementById("total_completed").innerText = sum;

    const minOne = document.getElementById("Assigned").innerText;
    const minOneConvert = parseInt(minOne);
    const min= minOneConvert - 1;

    document.getElementById("Assigned").innerText = min;

    n--;

    const now = new Date();
    const when_completed = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    console.log(when_completed);


    if(n>1){
        const container = document.getElementById("Sidebar_Notification");
        const p = document.createElement('p');
        p.innerText = `You have Complete The Task ${title} at ${when_completed}`;
        container.appendChild(p);


        alert(title + " Task Completed Succesfully");

    }else{
        const container = document.getElementById("Sidebar_Notification");
        const p = document.createElement('p');
        p.innerText = `Congratulationsssssss!!!!!By Completing This Task ${title} at ${when_completed}. You have completed all the task for today`;
        container.appendChild(p);


        alert(title + " Task Completed. Congratulationsssssss!!!!!By Completing This Task you have completed all the task for today");
    }
    console.log(n);

  }
);

console.log(n);




























document.getElementById("BlogPage").addEventListener('click', function(){
    window.location.href = "blog.html";
});

document.getElementById("BackToHome").addEventListener('click', function(){
    window.location.href = "index.html";
});