import { Outlet, Link, redirect } from "react-router-dom";
import GithubIcon from '../assets/github-mark.svg?react';

export async function loader(request) {
    const str = `${request.request.url}`
    if(!str.includes("profile")) {
        return redirect("/profile/home")
    }
    return null
}

function Root() {

    return (
        <>
            <header>
                <div className="w-full md:w-[480px] h-20 fixed right-0 md:right-40 bg-zinc-200 rounded-bl-lg rounded-br-lg opacity-50 flex justify-around items-center">
                    <Link to={"/profile/home"}><p className="text-zinc-900 font-bold font-serif text-2xl">Home</p></Link>
                    <Link to={"/profile/aboutme"}><p className="text-zinc-900 font-bold font-serif text-2xl">About Me</p></Link>
                    <Link to={"/profile/skills"}><p className="text-zinc-900 font-bold font-serif text-2xl">Skills</p></Link>
                    <Link to={"/profile/projects"}><p className="text-zinc-900 font-bold font-serif text-2xl">Projects</p></Link>
                </div>
            </header>
            <Outlet />
            <footer>
                <div className="w-full h-96 flex justify-around items-center flex-row bg-zinc-300">
                    <div className="w-80 h-80 bg-red-200 flex justify-center items-start p-12">
                        <GithubIcon width="20%" height="20%" />
                        github
                    </div>
                    <div className="w-80 h-80 bg-red-200">github</div>
                </div>
            </footer>
        </>
    );
}

export default Root;
