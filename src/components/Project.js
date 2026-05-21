import { useState } from "react";

import homepage from "../assests/brickly/homepage.png";
import properties from "../assests/brickly/properties.png";
import propertyDetails from "../assests/brickly/property-details.png";
import wishlist from "../assests/brickly/wishlist.png";
import inbox from "../assests/brickly/inbox.png";
import agent from "../assests/brickly/agent.png";
import admin from "../assests/brickly/admin.png";

import reactLogo from "../assests/logos/react-logo.png";
import nodeLogo from "../assests/logos/node-logo.png";
import mongoLogo from "../assests/logos/mongoDB-logo.png";
import jwtLogo from "../assests/logos/jwt-logo.png";
import tailwindLogo from "../assests/logos/tailwind-logo.png";
import githubLogo from "../assests/logos/github-logo.png";

function Project() {
    const images = [
        homepage,
        properties,
        propertyDetails,
        wishlist,
        inbox,
        agent,
        admin,
    ];

    const titles = [
        "Homepage",
        "Properties",
        "Property Details",
        "Wishlist",
        "Inbox",
        "Agent Dashboard",
        "Admin Dashboard",
    ];

    const [current, setCurrent] = useState(0);

    return (
        <section
id="project"
className="
bg-[#f3ede8]
py-16
md:py-24
px-4
md:px-12
"
>

            <div className="max-w-7xl mx-auto">


                <p className="uppercase tracking-[4px] text-sm text-[#7a604f] font-semibold mb-2">
                    FEATURED PROJECT
                </p>


                <h2 className="
text-3xl
md:text-5xl
font-serif
font-bold
text-[#3b2a1f]
mb-3
">
                    Brickly — Real Estate MERN Application
                </h2>


                <div className="w-16 h-[2px] bg-[#3b2a1f] mb-12"></div>






              <div className="
grid
lg:grid-cols-[0.9fr,1.3fr]
gap-10
md:gap-14
items-start
">


                    {/* LEFT */}

                    <div>


                        <p className="
text-[#4b3c32]
text-[16px]
md:text-lg
leading-8
md:leading-9
mb-10
">
                            Brickly is a full-stack Real Estate web application allowing users to browse properties, save homes to wishlist, connect with agents through messaging and manage listings using role-based dashboards.

                        </p>





                        <div className="space-y-5">


                            {[
                                "User, Agent & Admin dashboards",
                                "Property management (CRUD)",
                                "Wishlist functionality",
                                "Messaging system",
                                "Search & filter properties",
                                "Authentication & Authorization",
                                "Responsive UI"

                            ].map((item) => (

                                <div
                                    key={item}
                                    className="flex items-center gap-4"
                                >

                                    <div className="w-8 h-8 rounded-full bg-[#3b2a1f] text-white flex justify-center items-center">

                                        ✓

                                    </div>


                                    <span>

                                        {item}

                                    </span>


                                </div>

                            ))}


                        </div>


                    </div>









                    {/* IMAGE */}

                    <div className="relative">


                        <img
                            src={images[current]}
                            alt=""
                            className="
w-full
h-[280px]
md:h-[520px]
object-contain
rounded-[28px]
border
border-[#d9c8ba]
shadow-sm
"
                        />





                        <button
                            onClick={() => {

                                if (current === 0) {

                                    setCurrent(images.length - 1);

                                }

                                else {

                                    setCurrent(current - 1);

                                }

                            }}

                            className="
absolute
left-4
top-1/2
-translate-y-1/2
bg-white
w-12
h-12
rounded-full
shadow
"
                        >

                            ←

                        </button>







                        <button
                            onClick={() => {

                                if (current === images.length - 1) {

                                    setCurrent(0);

                                }

                                else {

                                    setCurrent(current + 1);

                                }

                            }}

                            className="
absolute
right-4
top-1/2
-translate-y-1/2
bg-white
w-12
h-12
rounded-full
shadow
"
                        >

                            →

                        </button>






                        <div className="
absolute
bottom-5
left-1/2
-translate-x-1/2
bg-white
rounded-full
px-5
py-2
text-sm
">

                            {titles[current]}

                        </div>


                    </div>



                </div>


                {/* BOTTOM SECTION */}

              {/* BOTTOM SECTION */}

<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 mt-14">


{/* TECH STACK */}

<div>

<h3 className="font-bold text-[#3b2a1f] mb-5">

TECH STACK

</h3>



<div className="flex flex-wrap gap-4">


{[
[reactLogo,"React"],
[nodeLogo,"Node"],
[mongoLogo,"Mongo"],
[jwtLogo,"JWT"],
[tailwindLogo,"Tailwind"]

].map(([logo,name])=>(

<div
key={name}
className="
bg-[#faf6f2]
border
border-[#e3d5ca]
rounded-2xl
w-[90px]
h-[90px]
md:w-[105px]
md:h-[105px]
flex
flex-col
justify-center
items-center
gap-3
shadow-sm
"
>

<img
src={logo}
alt=""
className="
w-8
h-8
md:w-11
md:h-11
"
/>

<p className="text-sm">

{name}

</p>


</div>

))}


</div>


</div>









{/* PROJECT STATS */}

{/* PROJECT STATS */}

<div>

<h3 className="font-bold text-[#3b2a1f] mb-5">

PROJECT STATS

</h3>



<div className="flex flex-wrap gap-4">


{[
["7+","Pages"],
["3","Roles"],
["JWT","Auth"],
["MERN","Stack"]

].map(([num,label])=>(

<div
key={label}
className="
bg-[#faf6f2]
border
border-[#e3d5ca]
rounded-2xl
w-[100px]
h-[90px]
md:w-[130px]
md:h-[105px]
flex
flex-col
justify-center
items-center
shadow-sm
"
>

<p className="
text-2xl
md:text-3xl
font-bold
">

{num}

</p>


<p className="
text-sm
mt-1
">

{label}

</p>


</div>

))}


</div>


</div>










{/* PROJECT LINKS */}

<div>

<h3 className="font-bold text-[#3b2a1f] mb-5">

PROJECT LINKS

</h3>



<div className="flex flex-wrap gap-4">


<a
href="https://real-estate-website00.netlify.app/"
target="_blank"
rel="noopener noreferrer"
className="
bg-[#faf6f2]
border
border-[#e3d5ca]
rounded-2xl
w-[120px]
h-[100px]
md:w-[130px]
md:h-[105px]
flex
flex-col
justify-center
items-center
gap-2
shadow-sm
hover:-translate-y-1
transition
"
>

<span className="text-2xl">

🔗

</span>


<p className="text-sm">

Live Demo

</p>


</a>










<a
href="https://github.com/akhilacodesss/real-estate-website-fe"
target="_blank"
rel="noopener noreferrer"
className="
bg-[#faf6f2]
border
border-[#e3d5ca]
rounded-2xl
w-[120px]
h-[100px]
md:w-[130px]
md:h-[105px]
flex
flex-col
justify-center
items-center
gap-2
shadow-sm
hover:-translate-y-1
transition
"
>

<img
src={githubLogo}
alt="GitHub"
className="
w-8
h-8
"
/>


<p className="text-sm">

Frontend

</p>


</a>










<a
href="https://github.com/akhilacodesss/real-estate-website-be"
target="_blank"
rel="noopener noreferrer"
className="
bg-[#faf6f2]
border
border-[#e3d5ca]
rounded-2xl
w-[120px]
h-[100px]
md:w-[130px]
md:h-[105px]
flex
flex-col
justify-center
items-center
gap-2
shadow-sm
hover:-translate-y-1
transition
"
>

<img
src={githubLogo}
alt="GitHub"
className="
w-8
h-8
"
/>


<p className="text-sm">

Backend

</p>


</a>


</div>

</div>









{/* DEMO CREDENTIALS */}

<div>

<h3 className="font-bold text-[#3b2a1f] mb-5">

DEMO CREDENTIALS

</h3>



<div className="
flex
flex-col
sm:flex-row
gap-4
">


<div className="
bg-[#faf6f2]
border
rounded-2xl
p-4
w-full
sm:w-[150px]
shadow-sm
">

<h4 className="font-semibold mb-3">
👤 User
</h4>

<p className="text-sm">
user@gmail.com
</p>

<p className="text-sm mt-2">
test1
</p>

</div>









<div className="
bg-[#faf6f2]
border
rounded-2xl
p-4
w-full
sm:w-[150px]
shadow-sm
">

<h4 className="font-semibold mb-3">
🛡️ Admin
</h4>

<p className="text-sm">
admin@gmail.com
</p>

<p className="text-sm mt-2">
test
</p>

</div>









<div className="
bg-[#faf6f2]
border
rounded-2xl
p-4
w-full
sm:w-[150px]
shadow-sm
">

<h4 className="font-semibold mb-3">
🧑‍💼 Agent
</h4>

<p className="text-sm">
agent@gmail.com
</p>

<p className="text-sm mt-2">
test
</p>

</div>


</div>

</div>



</div>

            </div>

        </section>
    );
}

export default Project;