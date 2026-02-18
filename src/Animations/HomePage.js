import gsap from "gsap";

const tl = gsap.timeline();

export function lineAnimate()
{

            tl.fromTo("#line1",
                {
                    width:0,
                },
                {
                    duration:0.5,
                    width:"150px"
                }
            )   
}