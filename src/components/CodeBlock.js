import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaRegCopy, FaCheck } from "react-icons/fa";

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
      toast.success("Copied");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className=" bg-gray-50 text-gray-800 rounded-md border-gray-300 mb-6 p-2">
      {/* Top left label */}

      <div className="flex justify-end w-full">
        {/* Copy button top right */}
        <button
          onClick={handleCopy}
          className="transition cursor-pointer rounded"
          aria-label="Copy code"
        >
          {copied ? <FaCheck /> : <FaRegCopy />}
        </button>
      </div>

      {/* Code content */}
      <pre className=" whitespace-pre-wrap break-words font-mono font-thin text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default CodeBlock;
