'use client';
import Link from "next/link";
import { SquarePlus, SquareUser, ArrowLeftRight, HandCoins, House} from "lucide-react";

export function NavegationBar(){
    return(
        <nav className="navegation-bar flex flex-row bg-gray-100 text-gray-800 fixed left-0 bottom-0 w-full px-6 items-center text-center text-xs justify-between shadow-sm">
            <Link href={'/home'}><button className="cursor-pointer p-2 flex flex-row space-x-2"><House  size={20}/><p>Resumen</p></button></Link>
            <Link href={'/reports'}><button className="cursor-pointer p-2 flex flex-row space-x-2"><ArrowLeftRight size={20}/><p>Stats</p></button></Link>
            <Link href={'/profile'}><button className="cursor-pointer p-2 flex flex-row space-x-2" ><SquareUser size={20}/><p>Perfil</p></button></Link>
        </nav>
    );
}
/*
<Link href={'/savings'}><button className="cursor-pointer p-2 rounded-xl text-white"><HandCoins size={20}/></button></Link>
<Link href={'/transactions'}><button className="cursor-pointer p-2 rounded-xl text-white" ><SquarePlus size={20}/></button></Link>

*/