function Navbar() {

return (

<>

<nav className="
fixed
top-0
w-full
bg-[#f3ede8]
border-b
border-[#cbb8a9]
z-50
">

<div className="
max-w-7xl
mx-auto
flex
justify-between
items-center
px-4
md:px-2
py-4
md:py-5
">


{/* LOGO */}

<a
href="#home"
className="
text-[#3b2a1f]
font-bold
text-lg
md:text-xl
hover:text-[#7a604f]
transition
"
>

AKHILA

</a>








{/* LINKS */}

<ul className="
hidden
md:flex
gap-8
text-[#3b2a1f]
font-medium
">

<li><a href="#about">About</a></li>

<li><a href="#skills">Skills</a></li>

<li><a href="#project">Project</a></li>

<li><a href="#certification">Certification</a></li>

<li><a href="#contact">Contact</a></li>

</ul>









{/* MOBILE MENU */}

<div className="md:hidden"></div>









<a
href="#contact"
className="
bg-[#3b2a1f]
text-white
px-4
md:px-5
py-2
rounded-full
text-sm
md:text-base
"
>

Hire Me

</a>



</div>

</nav>


</>

);

}

export default Navbar;