import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function RedirectLink({ href = "/", text = "" }) {
  return (
    <Link href={href}>
      <span className="flex flex-row items-center justify-center gap-1">
        <u>
          {text} 
        </u>
        <FaExternalLinkAlt />
      </span>
    </Link>
  );
}
