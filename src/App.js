import logo from './logo.svg';
import './App.css';
import logos from "./logo.png"
import video from "./bg-video.mp4";
import pfeil from "./pfe.png";
import movie from "./movies.png"
import whats from "./whats.png"
import e from "./e-com.png"
import weather from "./wetter.png";
import js from "./js.jpg"
import html from "./html.png";
import css from "./css.png";
import reacticon from "./react.png"
import threejs from "./three.png";
import Contact from "./contact"
function App() {
document.addEventListener("scroll", () => {
  setTimeout( () => {
let html = document.getElementById('html');
let css = document.getElementById('css');
let js = document.getElementById('js');
let react = document.getElementById('react');
let three = document.getElementById('three');
html.style.transform = "translate(240px)";
html.style.transition = "all 600ms ease-in-out"
css.style.transform = "translate(240px)";
css.style.transition = "all 600ms ease-in-out"
js.style.transform = "translate(240px)";
js.style.transition = "all 600ms ease-in-out"
react.style.transform = "translate(240px)";
react.style.transition = "all 600ms ease-in-out"
three.style.transform = "translate(240px)";
three.style.transition = "all 600ms ease-in-out";




let project_1 = document.getElementById('project-1');
project_1.style.borderRadius = "0px";
project_1.style.transition = "all 900ms ease-in-out";
let projects = document.getElementById('projects');
projects.style.borderRadius = "0px";
projects.style.transition = "all 900ms ease-in-out";
let project_2 = document.getElementById('project-2');
project_2.style.borderRadius = "0px";
project_2.style.transition = "all 900ms ease-in-out";
let project_3 = document.getElementById('project-3');
project_3.style.borderRadius = "0px";
project_3.style.transition = "all 900ms ease-in-out";
console.log('hee');
let btn = document.getElementById('btn');
btn.style.transform = "translateY(-10px)"
btn.style.transition = "all 900ms ease-in-out";
let pf = document.getElementById('pf');
pf.animate([
  // keyframes
  { transform: 'translateY(0px)' },
  { transform: 'translateY(-50px)' },
  { transform: 'translateY(50px)' },
  { transform: 'translateY(-50px)' },
  
], {
  // timing options
  duration: 5000,
  iterations: Infinity
});

let alles = document.getElementById('alles');
alles.style.borderRadius = "0px";
alles.style.transition = "all 900ms ease-in-out";

  },600)
})
return (
    <div className="App">
    <video loop muted autoPlay   src={video}></video>
      

 <img id = "pf" src={pfeil} alt="" />
  
  
  
   
  
<h1 className = "logo">Theo</h1>
<h2 className = "job">Next Level <br /> Webdevelopment</h2>
<div className = "red"></div>
<h1 className = "lel">I'm a freelance webdeveloper from Germany.Over the last months I learned how to build amazing websites.My goal is to help clients offer a great User Experience and create a brand.</h1>
   
   <button id = "btn">Contact me!</button>
   <h1 className = "project">My Projects</h1>
   <div id="eins">
   <img  id = "projects" src={movie} alt="" />
   </div>
<div id="zwei">
<img id = "project-1" src={whats} alt="" />
</div>
<div id="drei">
 <img id = "project-2" src={e} alt="" />
</div>

   <div id="vier">
<img id = "project-3" src={weather} alt="" />
   </div>
  
   

<div className="fahig">
<h1 className = "skill">My skills</h1>

<div id="images">
<img src={html}  alt="" id="html" />
<img src={css} alt="" id="css" />
<img src={js} alt="" id="js" />
<img src={reacticon} alt="" id="react" />
<img src={threejs} alt="" id="three" />

</div>
</div>


<Contact></Contact>


<footer>
  <h1>@Copyright Theo Boewer | Im Felde 1a | Germany | Datenschutz</h1>
</footer>
    </div>
  );
}

export default App;
