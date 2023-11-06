import { useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";

export async function loader({params}) {
    const position = params.position
    return { position };
}

function Profile() {

    const { position } = useLoaderData();

    const homeRef = useRef(null);
    const aboutMeRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);

    if(position === "home") {
        homeRef.current?.scrollIntoView({ behavior: 'smooth' })
    } else if(position === "aboutme") {
        aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' })
    } else if(position === "skills") {
        skillsRef.current?.scrollIntoView({ behavior: 'smooth' })
    } else if(position === "projects") {
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    
    let description = `
    전자공학에서 MCU를 공부하면서
    SW 개발에 관심을 가지게 되었고
    지금은 웹, 모바일, 리눅스 등을 활용한
    IoT 개발자로서 성장하고 있습니다.
    `

    return (
        <>
            <div className="h-screen">
                <div ref={homeRef} className="w-full bg-[url('./assets/background.jpg')] bg-fixed h-4/6 bg-cover flex justify-center items-center">
                    <span className="text-slate-200 bg-zinc-600 p-4">안녕하세요. IoT 개발자 김도훈입니다.</span>
                </div>
                <div ref={aboutMeRef} className="w-full bg-cover flex flex-col sm:flex-row justify-center items-center">
                    <div className="w-40 h-40 m-4 flex justify-center items-center text-slate-700 text-4xl text-center border-b-4 border-teal-600"><p>About<br/> Me</p></div>
                    <div className="w-[480px] sm:w-4/6 flex justify-center items-center h-80 text-2xl text-center m-4 whitespace-pre-wrap"><p>{description}</p></div>
                </div>
            </div>
            <div ref={skillsRef} className="w-full h-[880px] bg-rose-50">
                <div></div>

            </div>
            <div ref={projectsRef} className="w-full h-[880px] bg-rose-50">
                <div></div>

            </div>
        </>
    )
}

export default Profile