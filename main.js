import "/style.css"
import { NavBar } from "./components/Navbar/Navbar"
import { changeTheme } from "./components/Navbar/Navbar"
import { Footer } from "./components/Footer/Footer"
import { Home } from "./pages/Home/home"
import { linkPage } from "./utils/linkPage"
import { Projects } from "./pages/projects/projects"
import { Divider } from "./components/Divider/Divider"

const header = document.querySelector("header")
header.innerHTML = NavBar()

const footer = document.querySelector("footer")
footer.innerHTML = Footer()

linkPage("#homeLink", Home)
linkPage("#projectsLink", Projects)



changeTheme()


Home()