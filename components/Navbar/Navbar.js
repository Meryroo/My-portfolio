import "./Navbar.css"

export const NavBar = () =>`
<nav>
<h2>Peter Parker</h2>
<ul>
<li>
<a href="#" id="homeLink">Home</a>
</li>
<li>
<a href="#" id="projectsLink">Projects</a>
</li>
<li>
<button id="themeBtn">☀</button>
</li>
</ul>
</nav>
`;

export const changeTheme = () =>{
    const themeBtn = document.querySelector("#themeBtn");
    themeBtn.addEventListener("click", () =>{
        document.body.classList.toggle("ligth");
        changeText()
    });
}
 
export const changeText = () => {
    const themeBtn = document.querySelector("#themeBtn")
    if (themeBtn.innerText === "☀"){
        themeBtn.innerText = "☾"
    } else {
        themeBtn.innerText = "☀"
    }
}