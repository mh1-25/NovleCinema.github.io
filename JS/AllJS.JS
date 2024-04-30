document.addEventListener("DOMContentLoaded", function() {
    // Call the onclickOnButton1 function after the DOM content is loaded
    ToLightMode();
    TheRecentAdd();
    onclickOnButton1();
    onclickOnButton2();
    SwapTheColorForHeader();
    TheCommingSoon();
    clearSAVE();
    myFunction();
    forStars();
    SubmitButton();
    buttonOfWahts();
    clivkOnStars();
    TheClickButtonM();
    DarKM();
    displayComment(comment) ;
});
function clearSAVE(){
    var feedback = document.getElementById('fdback').value;
    localStorage.setItem('fdback', feedback);
    var textarea= document.getElementById('fdback');
    var inputs = document.getElementsByClassName("details");
    textarea.value='';
    for (var i=0; i<inputs.length;i++) {
        inputs[i].value = '';
    }
}
        var feed = localStorage.getItem('fdback');
        var userr= document.getElementById('userfb');
        if (feed) {
            userr.innerText= feed;
        } else {
            userr.innerText= 'No feedback yet.';
        }
function myFunction() {
    var input = document.getElementById("My-Input-search");
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("MyUL");
    var li = ul.getElementsByTagName("li");

    ul.style.display = "block";

    for (var i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("a")[0];
        var txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }

    if (input.value === "") {
        ul.style.display = "none";
    }
}
// change backgroundcolor and text color for header

function ToDarkMode() {
    const gallryMovie = document.getElementById("recent-add");
    const bodyColor = document.body;
    const DarkMode = document.getElementById("TheButton-To-change");
    const TheIcon = document.getElementById("madeIcon");
    const TheGallryMovie = document.getElementById("comming-soon");
    const TheSecondDiv = document.getElementById("second-div");
    const TheFirstDiv = document.getElementById("first-div");
    TheIcon.classList.add("fa-sun");
    TheIcon.classList.remove("fa-moon");
    bodyColor.style.backgroundColor = "rgb(0, 22, 24)";
    gallryMovie.style.backgroundColor = "rgb(0, 37, 40)";
    TheGallryMovie.style.backgroundColor = "rgb(0, 37, 40)";
    TheSecondDiv.style.backgroundColor = "black";
    TheFirstDiv.style.backgroundColor = "black";
    DarkMode.setAttribute("onclick", "ToLightMode()");
}
function ToLightMode() {
    const gallryMovie = document.getElementById("recent-add");
    const bodyColor = document.body;
    const DarkMode = document.getElementById("TheButton-To-change");
    const TheIcon = document.getElementById("madeIcon");
    const TheGallryMovie = document.getElementById("comming-soon");
    const TheSecondDiv = document.getElementById("second-div");
    const TheFirstDiv = document.getElementById("first-div");
    TheIcon.classList.remove("fa-sun");
    TheIcon.classList.add("fa-moon");
    bodyColor.style.backgroundColor = "#6698b5";
    gallryMovie.style.backgroundColor = "#a7cab2";
    TheGallryMovie.style.backgroundColor = "#a7cab2";
    TheSecondDiv.style.backgroundColor = "rgb(0, 37, 40)";
    TheFirstDiv.style.backgroundColor = "rgb(0, 37, 40)";
    DarkMode.setAttribute("onclick", "ToDarkMode()");
}


function SwapTheColorForHeader(){
    const DarkMode = document.getElementsByClassName("fa-regular")[0];
    const TheHeader = document.getElementById("header");
    const TheLogo = document.getElementById("logo");
    const TheList = document.getElementsByClassName("javas-change");
    window.addEventListener("scroll" , function(){
        if(window.scrollY > 0){
            TheHeader.style.backgroundColor = "White";
            TheLogo.style.color = "black";
            DarkMode.style.color = "black";
            for(var i = 0 ; i < TheList.length ; i++){
                TheList[i].style.color="black";
            }
        }
        else{
            TheHeader.style.backgroundColor = "black";
            TheLogo.style.color = "aliceblue";
            DarkMode.style.color = "aliceblue";
            for(var i = 0 ; i < TheList.length ; i++){
                TheList[i].style.color="aliceblue";
            }
        }
    });
}
//End of change backgroundcolor and text color for header.

// let The Right and Left buuten And let The Div of films to scroll.
function TheRecentAdd(){
const gallryMovie = document.getElementById("recent-add");
gallryMovie.addEventListener("wheel" , function (moha){
    gallryMovie.scrollLeft += moha.deltaX;
});
}

function onclickOnButton1() {
    const gallryMovie = document.getElementById("recent-add");
    const TheRightbtn = document.getElementById("Right");
    
    // Check if the button exists before attaching the event listener
    if (TheRightbtn) {
        TheRightbtn.addEventListener("click", function() {
            gallryMovie.scrollBy({
                left: 230,
                behavior: 'smooth'
            });
        });
    }
}

function onclickOnButton2(){
    const gallryMovie = document.getElementById("recent-add");
const TheLeftbtn = document.getElementById("Left");
TheLeftbtn.onclick = function(){
    gallryMovie.scrollBy({
        left : -230,
        behavior: 'smooth'
    });
};
}
 // End of let The Right and Left buuten And let The Div of films to scroll.


// let The Right and Left buuten And let The Div of films to scroll.
function TheCommingSoon(){
const TheGallryMovie = document.getElementById("comming-soon");
TheGallryMovie.addEventListener("wheel" , function(Ham){
    TheGallryMovie.scrollLeft += Ham.deltaX;
});
const TheRigthbtn2 = document.getElementById("Right2");
TheRigthbtn2.onclick = function(){
    TheGallryMovie.scrollBy(
        {
            left:230,
            behavior : 'smooth'
        }
    );
};
const TheLeftbtn2 = document.getElementById("Left2");
TheLeftbtn2.onclick= function(){
    TheGallryMovie.scrollBy({
        left:-230,
        behavior:'smooth'
    });
};
}// End of let The Right and Left buuten And let The Div of films to scroll.

//  created by lara 
function buttonOfWahts(){

    const TheWhatsBtnL = document.getElementById("WhatsL");
    TheWhatsBtnL.onclick = function(){
        window.open("https://wa.me/qr/E67LBY3OKIZ2L1", "_blank");
    };

    const TheWhatsBtnFS = document.querySelector(".Fatma #WhatsFM");
TheWhatsBtnFS.onclick = function(){
    window.open("https://wa.me/qr/E67LBY3OKIZ2L1", "_blank");
};

const TheWhatsBtnFM = document.getElementById("WhatsFS");
TheWhatsBtnFM.onclick = function(){
    window.open("https://wa.me/qr/E67LBY3OKIZ2L1", "_blank");
};

const TheWhatsBtnMM = document.getElementById("WhatsMM");
TheWhatsBtnMM.onclick = function(){
    window.open("https://wa.me/qr/E67LBY3OKIZ2L1", "_blank");
};

const TheWhatsBtnFar = document.getElementById("WhatsFa");
TheWhatsBtnFar.onclick = function(){
    window.open("https://wa.me/qr/E67LBY3OKIZ2L1", "_blank");
};

const TheWhatsBtnMa = document.getElementById("WhatsMA");
TheWhatsBtnMa.onclick = function(){
    window.open("https://wa.me/qr/E67LBY3OKIZ2L1", "_blank");
};

const TheWhatsBtnMH = document.getElementById("WhatsMH");
TheWhatsBtnMH.onclick = function(){
    window.open("https://wa.me/qr/E67LBY3OKIZ2L1", "_blank");
};
}

function forStars(){
    const TheStarsRateL = document.querySelectorAll(".lara .fa");
    const TheStarsRateFS = document.querySelectorAll(".Fatma .fa");
    const TheStarsRateFM = document.querySelectorAll(".Fatma- .fa");
    const TheStarsRateMM = document.querySelectorAll(".Mohammed-Mansour .fa");
    const TheStarsRateFar = document.querySelectorAll(".Faris .fa");
    const TheStarsRateMa = document.querySelectorAll(".Marwan .fa");
    const TheStarsRateMH = document.querySelectorAll(".Mohammed-Hassanein .fa");
    for(let i = 0 ; i < TheStarsRateL.length ; i++){
        TheStarsRateL[i].onclick = function(){
            for(let j = 0 ; j < i+1 ; j++){
                TheStarsRateL[j].style.color = "red";
            }
        }    
    };
    for(let i = 0 ; i < TheStarsRateFS.length ; i++){
        TheStarsRateFS[i].onclick = function(){
            for(let j = 0 ; j < i+1 ; j++){
                TheStarsRateFS[j].style.color = "red";
            }
        }    
    };
    for(let i = 0 ; i < TheStarsRateFar.length ; i++){
        TheStarsRateFar[i].onclick = function(){
            for(let j = 0 ; j < i+1 ; j++){
                TheStarsRateFar[j].style.color = "red";
            }
        }    
    };
    for(let i = 0 ; i < TheStarsRateMa.length ; i++){
    TheStarsRateMa[i].onclick = function(){
        for(let j = 0 ; j < i+1 ; j++){
            TheStarsRateMa[j].style.color = "red";
        }
    }    
    for(let i = 0 ; i < TheStarsRateMH.length ; i++){
        TheStarsRateMH[i].onclick = function(){
            for(let j = 0 ; j < i+1 ; j++){
                TheStarsRateMH[j].style.color = "red";
            }
        }    
    };
    for(let i = 0 ; i < TheStarsRateFM.length ; i++){
        TheStarsRateFM[i].onclick = function(){
            for(let j = 0 ; j < i+1 ; j++){
                TheStarsRateFM[j].style.color = "red";
            }
        }    
    };
    for(let i = 0 ; i < TheStarsRateMM.length ; i++){
        TheStarsRateMM[i].onclick = function(){
            for(let j = 0 ; j < i+1 ; j++){
                TheStarsRateMM[j].style.color = "red";
            }
        }    
};
}
}
function SubmitButton(){
    const TheStarsRateL = document.querySelectorAll(".lara .fa");
    const TheStarsRateFS = document.querySelectorAll(".Fatma .fa");
    const TheStarsRateFM = document.querySelectorAll(".Fatma- .fa");
    const TheStarsRateMM = document.querySelectorAll(".Mohammed-Mansour .fa");
    const TheStarsRateFar = document.querySelectorAll(".Faris .fa");
    const TheStarsRateMa = document.querySelectorAll(".Marwan .fa");
    const TheStarsRateMH = document.querySelectorAll(".Mohammed-Hassanein .fa");


    const TheSubmitCommentFS = document.getElementById("FatmaS-Submit");
    const TheinputFS = document.getElementById("FatmaS-input");
    TheSubmitCommentFS.onclick = function(){
        if (TheinputFS.value !== "") {
            alert("The comment was sent successfully");
            TheinputFS.value = "";
            for (let j = 0; j < TheStarsRateFS.length; j++) {
                TheStarsRateFS[j].style.color = "rgb(0, 76, 37)";
            }
        } 
    };

    
const TheSubmitCommentL = document.getElementById("Lara-Submit");
const TheinputL = document.getElementById("Lara-input");
TheSubmitCommentL.onclick = function(){
    if (TheinputL.value !== "") {
        alert("The comment was sent successfully");
        TheinputL.value = "";
        for (let j = 0; j < TheStarsRateL.length; j++) {
            TheStarsRateL[j].style.color = "rgb(0, 76, 37)";
        }
    } 
};
    const TheSubmitCommentFM = document.getElementById("FatmaM-Submit");
    const TheinputFM = document.getElementById("FatmaM-input");
    TheSubmitCommentFM.onclick = function(){
        if (TheinputFM.value !== "") {
            alert("The comment was sent successfully");
            TheinputFM.value = "";
            for (let j = 0; j < TheStarsRateFM.length; j++) {
                TheStarsRateFM[j].style.color = "rgb(0, 76, 37)";
            }
        } 
    };
const TheSubmitCommentMM = document.getElementById("MM-Submit");
const TheinputMM = document.getElementById("MM-input");
TheSubmitCommentMM.onclick = function(){
    if (TheinputMM.value !== "") {
        alert("The comment was sent successfully");
        TheinputMM.value = "";
        for (let j = 0; j < TheStarsRateMM.length; j++) {
            TheStarsRateMM[j].style.color = "rgb(0, 76, 37)";
        }
    } 
};
    const TheSubmitCommentFar = document.getElementById("Faris-Submit");
    const TheinputFar = document.getElementById("Faris-input");
    TheSubmitCommentFar.onclick = function(){
        if (TheinputFar.value !== "") {
            alert("The comment was sent successfully");
            TheinputFar.value = "";
            for (let j = 0; j < TheStarsRateFar.length; j++) {
            TheStarsRateFar[j].style.color = "rgb(0, 76, 37)";
        }
    } 
};
const TheinputMa = document.getElementById("Marwan-input");
const TheSubmitCommentMa = document.getElementById("Marwan-Submit");
TheSubmitCommentMa.onclick = function(){
    if (TheinputMa.value !== "") {
        alert("The comment was sent successfully");
        TheinputMa.value = "";
        for (let j = 0; j < TheStarsRateMa.length; j++) {
            TheStarsRateMa[j].style.color = "rgb(0, 76, 37)";
        }
    } 
};
const TheSubmitCommentMH = document.getElementById("MH-Submit");
const TheinputMH = document.getElementById("MH-input");
TheSubmitCommentMH.onclick = function(){
    if (TheinputMH.value !== "") {
        alert("The comment was sent successfully");
        TheinputMH.value = "";
        for (let j = 0; j < TheStarsRateMH.length; j++) {
            TheStarsRateMH[j].style.color = "rgb(0, 76, 37)";
        }
    } 
};
}

// Filter The Search Button



                                    // Lara Pages 
var isShowing= false;
function show() {
    if(!isShowing){
        document.getElementById("hidden").style.display = "inline-block";
        document.getElementById("press").innerHTML = "Read less";
        isShowing=true;}
    else{
        document.getElementById("hidden").style.display = "none";
        document.getElementById("press").innerHTML = "Read more";
        isShowing=false;
    }
}
function COM(){
    var comment= document.getElementById("com").value;
    document.getElementById("displayPart").innerText= comment;
    document.getElementById("com").value='';
    alert("Comment Posted");
}
function RuSure(){
    var confirmed= confirm("Are you sure you want to open a new tab?");
    if(confirmed){
        window.open("feedback.html",'_blank');
    }
    else{}
}
var light=true;
function Theme()
{
   if(light){
    document.getElementsByTagName("body")[0].style.backgroundColor="rgb(0, 23, 52)";
    document.getElementsByTagName("body")[0].style.color= "white";
    var head2=document.getElementsByTagName("h2");
    for(var k=0; k<head2.length;k++){
        head2[k].style.color="rgb(163, 204, 255)";
    }
    document.getElementsByTagName("button")[0].style.backgroundColor="rgb(163, 204, 255)";
    document.getElementsByTagName("button")[0].style.borderColor="white";
    document.getElementsByTagName("button")[0].style.color="rgb(0, 23, 52)";
    document.getElementsByTagName("nav")[0].style.backgroundColor="rgb(163, 204, 255)";
    var links= document.getElementsByClassName("linkat");
    for(var h=0; h< links.length;h++)
    {
        links[h].style.color="rgb(0, 23, 52)";
    }
    document.getElementById("switch").innerText="SWITCH TO LIGHT THEME";
    light=false;
}
 else{
    document.getElementsByTagName("body")[0].style.backgroundColor="rgb(246, 248, 255)";
    document.getElementsByTagName("body")[0].style.color= "black";
    var head2=document.getElementsByTagName("h2");
    for(var k=0; k<head2.length;k++){
        head2[k].style.color="rgb(0, 23, 52) ";
    }
    document.getElementsByTagName("button")[0].style.backgroundColor="rgb(0, 23, 52) ";
    document.getElementsByTagName("button")[0].style.borderColor="transparent";
    document.getElementsByTagName("button")[0].style.color="white";
    document.getElementsByTagName("nav")[0].style.backgroundColor="rgb(0, 23, 52) ";
    var links= document.getElementsByClassName("linkat");
    for(var h=0; h< links.length;h++)
    {
        links[h].style.color="rgb(246, 248, 255)";
    }
    document.getElementById("switch").innerText="SWITCH TO DARK THEME";
    light=true;
 }
}
                    //______________ marwan JS__________________
var rated = 0 ;
var TheStars = document.getElementsByClassName("fa");

for (var i = 0; i < TheStars.length; i++) {
    TheStars[i].onclick = function() {
        rated = Array.from(TheStars).indexOf(this) + 1;
        rate();
    };
}

function rate() {
    for (var j = 0; j < TheStars.length; j++) {
        if (j < rated) {
            TheStars[j].style.color = "#b04a55";
        } else {
            TheStars[j].style.color = "#a9aa9f";
        }
    }
}
const thebutton = document.getElementById ("btn");
thebutton.onclick = function(){
    alert("the rate has been sent successfully");}
     
function feedback (){
    
        alert("your feedback has been sent successfully");}

        function toggleTheme() {
            var body = document.body;
            body.classList.toggle("dark");
        }
        
function display() {


    localStorage.setItem("value",input.value);
}
//------------------ Faris JS-----------------
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  function see(see_more, seee) {
    if (document.getElementById(see_more).style.display=='none'){
      document.getElementById(see_more).style.display='block'
      document.getElementById(seee).innerHTML='See less'
    }
    else {
      document.getElementById(see_more).style.display='none'
      document.getElementById(seee).innerHTML='See more'
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    loadPreferences();
  });
  
  function savePreferences() {
    localStorage.setItem('fname', document.getElementById('fname').value);
    localStorage.setItem('lname', document.getElementById('lname').value);
    localStorage.setItem('urcomment', document.getElementById('urcomment').value);
  }
  function loadPreferences() {
    document.getElementById('fname').value = localStorage.getItem('fname');
    document.getElementById('lname').value = localStorage.getItem('lname');
    document.getElementById('urcomment').value = localStorage.getItem('urcomment');
  }
  function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }


//   Fatma Maher JS 

function TheTrailerbutton(){
document.getElementById('watch-trailer').addEventListener('click', function() {
    document.querySelector('.trailer-popup').style.display = 'inline-block';
    document.getElementById('trailer-video').src += "?autoplay=1";
});

document.querySelector('.trailer-popup').addEventListener('click', function(e) {
    if (e.target !== document.getElementById('trailer-video')) {
        this.style.display = 'none';
        
        var iframeSrc = document.getElementById('trailer-video').src;
        document.getElementById('trailer-video').src = iframeSrc;
    }
});}
function THeButtonForReadMore(){
    const buttons = document.querySelectorAll('.details-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const moreInfo = this.nextElementSibling;
            if (moreInfo.style.display === 'block') {
                moreInfo.style.display = 'none';
                this.textContent = 'Read more';
            } else {
                moreInfo.style.display = 'block';
                this.textContent = 'Read less';
            }
        });
    });
}
function TheDarkButton(){
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('change', () => {
      document.body.classList.toggle('night', darkModeToggle.checked);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    loadPreferences();
});
function savePreferences() {
localStorage.setItem('name', document.getElementById('name').value);
localStorage.setItem('email', document.getElementById('email').value);
localStorage.setItem('message', document.getElementById('message').value);
}
function loadPreferences() {
document.getElementById('name').value = localStorage.getItem('name');
document.getElementById('email').value = localStorage.getItem('email');
document.getElementById('message').value = localStorage.getItem('message');
}

function toggleDetails(details1) {
    var details = document.getElementById(details1);
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.getElementById('feedbackForm').addEventListener('submit', function(event){
    console.log('Form submission triggered'); // Check if the event is triggered
    event.preventDefault();

    var isValid = true;

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');

    console.log('Name:', name.value); // Debug values
    console.log('Email:', email.value);
    console.log('Message:', message.value);

    // Validation for Name
    if (!name.value.trim()) {
        document.querySelector('#name + .error-message').style.display = 'block';
        isValid = false;
    } else {
        document.querySelector('#name + .error-message').style.display = 'none';
    }

    // Validation for Email
    if (!email.value.trim()) {
        document.querySelector('#email + .error-message').style.display = 'block';
        isValid = false;
    } else {
        document.querySelector('#email + .error-message').style.display = 'none';
    }

    // Validation for Message
    if (!message.value.trim()) {
        document.querySelector('#message + .error-message').style.display = 'block';
        isValid = false;
    } else {
        document.querySelector('#message + .error-message').style.display = 'none';
    }

    console.log('Form valid:', isValid);

    if (isValid) {
        this.submit();
    }

})
//_______________ Fatma Sayed Pages ___________
function addComment() {
    var commentInput = document.getElementById('commentInput').value;
    var commentsDiv = document.getElementById('comments');
    var thankYouMessage = document.getElementById('thankYouMessage');
    
    if(commentInput.trim() === '') {
        alert("Please write a comment before submitting.");
        return;
    }
    
    
    var storedComments = localStorage.getItem('comments');
    var commentsArray = storedComments ? JSON.parse(storedComments) : [];
    
    
    commentsArray.push(commentInput);
    

    localStorage.setItem('comments', JSON.stringify(commentsArray));
    
    
    var commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.innerText = commentInput;
    commentsDiv.appendChild(commentElement);
    
    
    document.getElementById('commentInput').value = '';
    
    
    thankYouMessage.style.display = 'block';
    
    
    setTimeout(function() {
        thankYouMessage.style.display = 'none';
    }, 3000);
}

window.onload = function() {

    loadComments();
}

function loadComments() {
    var storedComments = localStorage.getItem('comments');
    var commentsDiv = document.getElementById('comments');


    commentsDiv.innerHTML = '';

    if (storedComments) {
        var commentsArray = JSON.parse(storedComments);
        commentsArray.forEach(function(commentText) {
            var commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerText = commentText;
            commentsDiv.appendChild(commentElement);
        });
    } else {
        
        var noCommentsMessage = document.createElement('div');
        noCommentsMessage.innerText = 'No comments found.';
        commentsDiv.appendChild(noCommentsMessage);
    }
  
}

  function addComment() {
    var commentInput = document.getElementById('commentInput').value;
    var commentsDiv = document.getElementById('comments');
    var thankYouMessage = document.getElementById('thankYouMessage');

    if (commentInput.trim() === '') {
      alert("Please write a comment before submitting.");
      return;
    }

    var storedComments = localStorage.getItem('comments');
    var commentsArray = storedComments ? JSON.parse(storedComments) : [];

    commentsArray.push(commentInput);

    localStorage.setItem('comments', JSON.stringify(commentsArray));

    var commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.innerText = commentInput;
    commentsDiv.appendChild(commentElement);

    document.getElementById('commentInput').value = '';

    thankYouMessage.style.display = 'block';

    setTimeout(function () {
      thankYouMessage.style.display = 'none';
    }, 3000);
  }

  window.onload = function () {
    loadComments();
  }

  function loadComments() {
    var storedComments = localStorage.getItem('comments');
    var commentsDiv = document.getElementById('comments');

    commentsDiv.innerHTML = '';

    if (storedComments) {
      var commentsArray = JSON.parse(storedComments);
      commentsArray.forEach(function (commentText) {
        var commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerText = commentText;
        commentsDiv.appendChild(commentElement);
      });
    } else {

      var noCommentsMessage = document.createElement('div');
      noCommentsMessage.innerText = 'No comments found.';
      commentsDiv.appendChild(noCommentsMessage);
    }

  }

function clivkOnStars(){
const stars = document.querySelectorAll('.star');
const result = document.getElementById('result');
let rating = 0;

stars.forEach(star => {
    star.addEventListener('click', () => {
        const value = parseInt(star.getAttribute('data-value'));
        if (!star.classList.contains('selected')) {
            stars.forEach(s => s.classList.remove('selected'));
            star.classList.add('selected');
            rating = value;
        } else {
            star.classList.remove('selected');
            rating = 0;
        }
        result.textContent = 'Your Rating : ' +  rating  + ' Star';
    });
});
}
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('light-mode');
  body.classList.toggle('dark-mode');
}
function addComment2() {
    var commentInput = document.getElementById('commentInput').value;
    var commentsDiv = document.getElementById('comments2');
    var thankYouMessage = document.getElementById('thankYouMessage2');
    
    if(commentInput.trim() === '') {
        alert("Please write a comment before submitting.");
        return;
    }
    
    var storedComments = localStorage.getItem('comments');
    var commentsArray = storedComments ? JSON.parse(storedComments) : [];
    
    commentsArray.push(commentInput);
    localStorage.setItem('comments', JSON.stringify(commentsArray));
    
    var commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.innerText = commentInput;
    commentsDiv.appendChild(commentElement);
    
    document.getElementById('commentInput').value = '';
    
    thankYouMessage.style.display = 'block';
    
    setTimeout(function() {
        thankYouMessage.style.display = 'none';
    }, 3000);
}

window.onload = function() {
    loadComments2();
}

function loadComments2() {
    var storedComments = localStorage.getItem('comments');
    var commentsDiv = document.getElementById('comments2');

    commentsDiv.innerHTML = '';

    if (storedComments) {
        var commentsArray = JSON.parse(storedComments);
        commentsArray.forEach(function(commentText) {
            var commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerText = commentText;
            commentsDiv.appendChild(commentElement);
        });
    } else {
        var noCommentsMessage = document.createElement('div');
        noCommentsMessage.innerText = 'No comments found.';
        commentsDiv.appendChild(noCommentsMessage);
    }
}

var showing=false;
function show(){
    var button=document.getElementsByClassName('f50');
    if(!showing){
    for(i=0;i<button.length;i++){
        button[i].style.display="inline-block";
        showing=true;

    }}
   else{
    for(i=0;i<button.length;i++){
        button[i].style.display="none";
        showing=false;
   } 
}
}
// MohammedM Pages


function onClickM(){
    alert("The comment was sent successfully !");
}
function DarKM() {
    let darkMode = false;
    const TheToSwithc = document.getElementById("theme-togglem");
    document.body.style.backgroundColor = darkMode ? 'rgb(18, 10, 49)' : 'rgb(110, 190, 196)';
    document.body.style.color = darkMode ? 'rgb(110, 190, 196)' : 'rgb(18, 10, 49)';
}

function ThesubmitForM() {
    const commentText = document.getElementById('comment-text').value.trim();
        if (commentText !== '') {
        displayComment(commentText);
        document.getElementById('comment-text').value = '';
    }
document.getElementById('comment-form').addEventListener('click', function(event) {
    event.preventDefault();
    ThesubmitForM();
});
}