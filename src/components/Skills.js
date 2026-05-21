function Skills() {

const skillCategories = [
{
title:"Frontend",
iconClass:"fa-solid fa-code",
skills:["React.js","JavaScript","HTML","CSS","Tailwind CSS"]
},
{
title:"Backend",
iconClass:"fa-solid fa-server",
skills:["Node.js","Express.js","REST APIs","JWT Auth"]
},
{
title:"Database",
iconClass:"fa-solid fa-database",
skills:["MongoDB","Mongoose","MySQL"]
},
{
title:"Tools",
iconClass:"fa-solid fa-screwdriver-wrench",
skills:["Git","GitHub","VS Code","Figma"]
},
];

return (
<section
id="skills"
className="
bg-[#f3ede8]
scroll-mt-16
py-10
px-4
md:px-10
overflow-hidden
"
>

<div className="
max-w-7xl
mx-auto
w-full
">


{/* HEADER */}

<div className="mb-8">

<p className="
uppercase
tracking-[5px]
text-xs
text-[#7a604f]
mb-1
">

MY SKILLS

</p>




<h2 className="
text-[40px]
md:text-[56px]
font-serif
font-bold
text-[#3b2a1f]
leading-tight
mb-2
">

Skills

</h2>




<div className="
w-16
h-[2px]
bg-[#3b2a1f]
"/>


</div>










{/* GRID */}

<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-5
md:gap-6
">


{skillCategories.map((cat,index)=>(

<div
key={index}
className="
bg-[#fdfbf9]
border
border-[#e5d4c6]
rounded-[24px]
p-5
md:p-6
flex
flex-col
items-center
shadow-sm
transition
duration-300
hover:-translate-y-2
hover:shadow-xl
"
>


<div className="
w-12
h-12
md:w-14
md:h-14
bg-[#3b2a1f]
rounded-full
flex
items-center
justify-center
mb-4
md:mb-5
shadow-md
">

<i className={`
${cat.iconClass}
text-white
text-lg
md:text-xl
`}>

</i>

</div>








<h3 className="
text-lg
md:text-xl
font-bold
text-[#3b2a1f]
mb-4
md:mb-5
">

{cat.title}

</h3>









<ul className="
space-y-2
md:space-y-3
w-full
">


{cat.skills.map((skill)=>(

<li
key={skill}
className="
flex
items-center
text-[#5a4a3f]
text-[15px]
md:text-lg
"
>

<span className="
w-1
h-1
bg-[#3b2a1f]
rounded-full
mr-3
shrink-0
"/>


{skill}


</li>

))}


</ul>



</div>

))}


</div>

</div>

</section>

);

}

export default Skills;