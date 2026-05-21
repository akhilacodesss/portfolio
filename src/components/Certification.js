import butterfly3 from "../assests/decor/butterfly3.png";

function Certification() {

return (

<section
id="certification"
className="
relative
bg-[#f3ede8]
pt-4
pb-16
px-4
md:px-8
scroll-mt-24
overflow-hidden
"
>

<div className="
max-w-6xl
mx-auto
relative
">


{/* BUTTERFLY */}

<img
src={butterfly3}
alt=""
className="
hidden
md:block
absolute
-right-[2px]
-top-[38px]
w-[258px]
max-w-none
z-0
pointer-events-none
"
/>








<p className="
uppercase
tracking-[5px]
text-sm
text-[#7a604f]
mb-2
">

CERTIFICATION

</p>







<h2 className="
text-[40px]
md:text-[56px]
font-serif
font-bold
text-[#3b2a1f]
">

Learning Journey

</h2>








<div className="
w-16
h-[2px]
bg-[#3b2a1f]
my-5
"/>









<div className="
relative
ml-2
md:ml-5
border-l-2
border-[#d8c8bc]
pl-6
md:pl-12
py-4
">


{/* DOT */}

<div className="
absolute
-left-[10px]
md:-left-[14px]
top-8
w-5
h-5
md:w-6
md:h-6
rounded-full
bg-[#3b2a1f]
"/>









<div className="
bg-[#faf6f2]
border
border-[#e5d4c6]
rounded-[28px]
p-5
md:p-8
shadow-sm
max-w-4xl
">




<p className="
uppercase
tracking-[4px]
text-xs
text-[#7a604f]
mb-3
">

• GUVI HCL

</p>








<h3 className="
text-2xl
md:text-3xl
font-bold
text-[#3b2a1f]
mb-5
">

Java Full Stack Development

</h3>









<p className="
text-[16px]
md:text-lg
leading-8
md:leading-9
text-[#4b3c32]
mb-8
">

Completed Full Stack Development training covering Java, MERN stack fundamentals, authentication, deployment, responsive UI and real-world project building.

</p>









<a
href="https://v2.zenclass.in/certificateDownload/jWOCuVdDK9RDEfKN"
target="_blank"
rel="noopener noreferrer"
className="
inline-block
bg-[#3b2a1f]
text-white
px-6
md:px-7
py-3
rounded-full
hover:opacity-90
transition
text-sm
md:text-base
">

View Certificate →

</a>



</div>



</div>



</div>

</section>

);

}

export default Certification;