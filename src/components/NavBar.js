'use client'

import { useRouter } from "next/navigation";
import Button from "./Button";

export default function NavBar() {
  const router = useRouter()

  return (
    <nav className="p-2 w-full flex flex-row justify-between pr-6 fixed z-100 bg-white top-0">
      <b className="text-4xl ">marineroute.in</b>
      <div className="flex flex-row gap-2">
        <Button type="check-route" onClick={()=>router.push("/map/route")} border ={false}/>
        <Button type = "cta-btn" href="/documentation/api" border={false} label="API"/>
        <Button type = "cta-btn" href="/documentation/npm-package" border={false} label="NPM Package"/>
      </div>
    </nav>
  );
}