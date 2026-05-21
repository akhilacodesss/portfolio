import butterfly2 from "../assests/decor/butterfly2.png";

function Contact() {

return (

<section
id="contact"
className="
bg-[#f3ede8]
pt-14
pb-4
px-8
scroll-mt-24
"
>

<div className="
max-w-5xl
mx-auto
text-center
relative
overflow-visible
">


{/*  BUTTERFLY  */}

<img
src={butterfly2}
alt=""
className="
hidden
md:block
absolute
left-[-200px]
bottom-[58px]
w-[260px]
"
/>








<p className="
uppercase
tracking-[8px]
text-sm
text-[#7a604f]
mb-2
">

CONTACT

</p>








<h2 className="
text-[56px]
md:text-[68px]
font-serif
font-bold
text-[#3b2a1f]
leading-none
mb-2
">

Open for Work

</h2>








<div className="
w-16
h-[2px]
bg-[#3b2a1f]
mx-auto
my-4
"/>









<p className="
text-[18px]
md:text-[20px]
leading-[1.8]
max-w-2xl
mx-auto
text-[#5a483c]
mb-10
px-4
">

Building modern and responsive web experiences through clean design and functional development.

</p>











{/* GITHUB + LINKEDIN */}

<div className="
flex
justify-center
gap-12
md:gap-20
text-[18px]
md:text-[20px]
mb-6
flex-wrap
">


<a
href="https://github.com/akhilacodesss/"
target="_blank"
rel="noopener noreferrer"
className="
flex
items-center
gap-3
hover:-translate-y-1
transition
">

<i className="
fa-brands
fa-github
text-xl
md:text-2xl
"></i>

GitHub

</a>








<a
href="https://www.linkedin.com/in/akhila-goud-278b8537b/"
target="_blank"
rel="noopener noreferrer"
className="
flex
items-center
gap-3
hover:-translate-y-1
transition
">

<i className="
fa-brands
fa-linkedin
text-xl
md:text-2xl
"></i>

LinkedIn

</a>


</div>









{/* EMAIL + LOCATION */}

<div className="
flex
justify-center
gap-10
md:gap-16
text-[16px]
md:text-[18px]
text-[#5a483c]
mb-12
flex-wrap
">


<div className="
flex
items-center
gap-3
">

<i className="
fa-solid
fa-envelope
"></i>

akhila.goundla1112@gmail.com

</div>








<div className="
flex
items-center
gap-3
">

<i className="
fa-solid
fa-location-dot
"></i>

Hyderabad, India

</div>


</div>











{/* DIVIDER */}

<div className="
flex
items-center
w-screen
relative
left-1/2
translate-x-[-50%]
mb-4
">

<div className="
flex-1
h-[1px]
bg-[#cbb8a9]
"/>


<div className="
px-4
text-[#7a604f]
text-sm
">

✦

</div>


<div className="
flex-1
h-[1px]
bg-[#cbb8a9]
"/>


</div>










<p className="
text-[14px]
md:text-[18px]
text-[#5a483c]
font-medium
tracking-[1px]
pb-1
">

© 2026 Akhila • Built with React & Tailwind

</p>



</div>

</section>

);

}

export default Contact;