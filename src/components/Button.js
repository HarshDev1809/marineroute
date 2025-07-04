"use client";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GoSidebarCollapse } from "react-icons/go";
import { useRouter } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa";
import Link from "next/link";
import toast from "react-hot-toast";
import { GrHomeRounded } from "react-icons/gr";

export default function Button({
  border = true,
  label,
  command = "npm i marineroute-js",
  href = "/",
  type = "button",
  onClick = () => {},
  disabled = false,
}) {
  const router = useRouter();

  const handleCopy = () => {
    const textToCopy = command;
    navigator.clipboard.writeText(textToCopy);
    toast.success("Copied");
  };

  const renderButton = (buttonType) => {
    switch (buttonType) {
      case "button":
        return (
          <button
            type="button"
            onClick={onClick}
            className="border rounded px-4 cursor-pointer py-2"
          >
            Button
          </button>
        );

      case "common":
        return (
          <button
            type="button"
            onClick={onClick}
            className="border-2 border-gray-400 bg-white w-full rounded px-4 cursor-pointer py-2"
          >
            {label}
          </button>
        );

      case "link-btn":
        return (
          <Link href={href} passHref className="w-full">
            <button
              type="button"
              className="border-2 border-gray-400 bg-white w-full rounded px-4 cursor-pointer py-2"
            >
              {label}
            </button>
          </Link>
        );

      case "cta-btn":
        return (
          <Link href={href} passHref>
            <button
              type="button"
              className={`${
                border && "border-2 border-gray-400"
              } bg-white w-full rounded px-4 cursor-pointer py-2`}
            >
              {label}
            </button>
          </Link>
        );

        case "home-logo":
        return (
          <Link href={"/"} passHref>
            <button
              type="button"
              className={`${
                border && "border-2 border-gray-400"
              } bg-white w-full rounded px-2 cursor-pointer py-2`}
            >
              <GrHomeRounded />
            </button>
          </Link>
        );
      case "npm-command":
        return (
          <button
            type="button"
            onClick={handleCopy}
            className="border-3 text-xl gap-2 border-gray-400 bg-white w-full rounded px-4 cursor-pointer py-2 flex flex-row items-center justify-start"
          >
            <IoIosArrowForward />
            <code className="grow text-start">npm i marineroute-js</code>
            <FaRegCopy />
          </button>
        );

      case "npm-command-common":
        return (
          <button
            type="button"
            onClick={handleCopy}
            className=" text-base gap-2 border-gray-400 bg-gray-100 w-full rounded px-4 cursor-pointer py-2 flex flex-row items-center justify-start"
          >
            <IoIosArrowForward />
            <code className="grow text-start">{command}</code>
            <FaRegCopy />
          </button>
        );

      case "delete":
        return (
          <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className="bg-gray-300 text-black  rounded mt-3  p-1 h-10 w-10 flex items-center justify-center cursor-pointer"
          >
            <MdDelete />
          </button>
        );

      case "check-route":
        return (
          <button
            type="button"
            onClick={onClick}
            className={`${border && "border"} rounded px-4 cursor-pointer py-2`}
          >
            Check Route
          </button>
        );

      case "add-coordinates":
        return (
          <button
            type="button"
            onClick={onClick}
            className="p-1 cursor-pointer hover:bg-gray-100 flex flex-row items-center justify-center gap-1 rounded mt-1"
          >
            <IoIosAddCircleOutline />
            Add Coordinates
          </button>
        );

      case "open":
        return (
          <button
            className=" rounded h-8 w-8 flex items-center justify-center cursor-pointer"
            onClick={onClick}
          >
            <GoSidebarCollapse size={20} />
          </button>
        );

      case "monogram-logo":
        return (
          <button
            className="border rounded h-8 w-8 flex items-center justify-center cursor-pointer"
            onClick={onClick}
          >
            MR
          </button>
        );

      case "logo":
        return (
          <button
            className="rounded px-2 py-1 flex items-center  text-xl justify-center cursor-pointer"
            onClick={() => router.push("/")}
          >
            <b>Marine Route</b>
          </button>
        );

      case "close":
        return (
          <button
            className=" rotate-180 h-8 w-8 flex items-center justify-center cursor-pointer"
            onClick={onClick}
          >
            <GoSidebarCollapse className="text-gray-400" size={25} />
          </button>
        );

      case "submit":
        return (
          <button
            className="border rounded px-4 py-2"
            type="submit"
            disabled={disabled}
          >
            Get Route
          </button>
        );
      default:
        return (
          <button
            type="button"
            onClick={() => {}}
            className="border rounded px-4 cursor-pointer py-2"
          >
            Button
          </button>
        );
    }
  };

  return renderButton(type);
}
