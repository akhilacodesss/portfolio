import avatar from "../assests/avatar/avatar.png";

function Hero() {

return (

<section
className="
min-h-screen
bg-[#f3ede8]
flex
items-center
pt-10
md:pt-6
"
>


<div className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-12
items-center
px-6
md:px-2
w-full
">



{/* LEFT */}

<div className="
flex
flex-col sm:flex-row
justify-center
text-center
md:text-left
">


<p className="
text-[#6d5648]
text-base
md:text-lg
font-medium
mb-2
">

Hi, I'm

</p>








<h1 className="
text-5xl
md:text-7xl
font-bold
text-[#3b2a1f]
leading-tight
">

Akhila Goundla

</h1>








<h2 className="
text-xl
md:text-3xl
mt-3
text-[#6d5648]
font-medium
">

MERN Stack Developer

</h2>









<p className="
mt-6
text-base
md:text-lg
text-gray-700
max-w-xl
leading-relaxed
mx-auto
md:mx-0
">

Building responsive full-stack web applications using React.js, Node.js, Express.js and MongoDB.

</p>










<div className="
flex
flex-col
sm:flex-row
gap-4
mt-8
justify-center
md:justify-start
">


<a
href="#project"
className="
bg-[#3b2a1f]
text-white
px-6
py-3
rounded-full
w-full
sm:w-auto
text-center
"
>

View Project

</a>








<a
href="/resume.pdf"
target="_blank"
rel="noopener noreferrer"
className="
border
border-[#3b2a1f]
px-6
py-3
rounded-full
w-full
sm:w-auto
text-center
"
>

Resume

</a>



</div>



</div>










{/* RIGHT */}

<div className="
flex
justify-center
order-first
md:order-last
">


<img
src={avatar}
alt="avatar"
className="
w-[260px]
sm:w-[320px]
md:w-[440px]
"
/>


</div>



</div>

</section>

);

}

export default Hero;