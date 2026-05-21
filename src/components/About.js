import butterfly from "../assests/decor/butterfly.png";

function About() {
return (

<section
id="about"
className="
relative
min-h-[80vh]
bg-[#f3ede8]
flex
items-center
px-4
md:px-10
overflow-hidden
scroll-mt-20
"
>


{/* BUTTERFLY */}

<img
src={butterfly}
alt=""
className="
hidden
md:block
absolute
top-30
right-4
w-80
"
/>







<div className="
max-w-7xl
mx-auto
w-full
flex
flex-col
md:flex-row
items-center
justify-between
gap-12
">



{/* LEFT */}

<div className="
w-full
md:w-[30%]
shrink-0
text-center
md:text-left
">


<p className="
uppercase
text-xs
tracking-[5px]
text-[#7a604f]
mb-2
">

ABOUT ME

</p>



<h2 className="
text-[48px]
md:text-[68px]
font-serif
font-bold
text-[#3b2a1f]
leading-[1.1]
">

About Me

</h2>



<div className="
w-12
h-[2px]
bg-[#b89c87]
my-6
mx-auto
md:mx-0
"/>





<div className="
w-24
h-24
rounded-full
bg-[#e5d4c6]
flex
items-center
justify-center
mx-auto
md:mx-0
">

<svg
fill="#c0a48d"
viewBox="0 0 24 24"
className="w-12 h-12"
>

<path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z"/>

</svg>

</div>



</div>








{/* RIGHT */}

<div className="
flex-1
md:ml-16
md:pr-40
text-center
md:text-left
">


<div className="
max-w-[600px] break-words
mx-auto
text-[#2f2f2f]
text-[16px] md:text-[20px]
md:text-[20px]
leading-[1.8]
">


<p className="mb-6">

I am a <strong>MERN Stack Developer</strong>
with hands-on experience building and deploying
full-stack web applications using MongoDB,
Express.js, React.js and Node.js.

</p>




<p className="mb-6">

I have worked on REST APIs,
JWT authentication, role-based access control,
CRUD operations and responsive UI development.

</p>





<p>

Recently, I built <strong>Brickly</strong>,
a Real Estate platform featuring dashboards,
messaging, wishlist functionality and
property management systems.

</p>


</div>


</div>



</div>

</section>

);

}

export default About;