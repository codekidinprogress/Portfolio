const text = [
    "Frontend Developer",
    "B.Sc. IT Student",
    "Learning Full Stack Development",
    "Java & Python Developer",
    "React Enthusiast"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){

        setTimeout(()=>{
            erase();
        },1500);

        return;
    }

    setTimeout(type,100);

})();

function erase(){

    letter = currentText.slice(0,--index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === 0){

        count++;
        setTimeout(type,300);

    }else{

        setTimeout(erase,50);

    }

}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:0.2});

document.querySelectorAll(".about-card,.skill,.project,.contact a").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:30px;
right:30px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#0ea5e9;
color:white;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 0 20px #0ea5e9;
z-index:1000;
transition:.3s;
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
