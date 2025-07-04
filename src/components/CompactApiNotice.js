// components/CompactApiNotice.tsx
"use client";
import Link from "next/link";
import { FiAlertTriangle } from "react-icons/fi";

export default function CompactApiNotice() {
  return (
    <div className="flex items-center gap-2 p-2 px-3 rounded bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm mb-3">
      <FiAlertTriangle className="text-lg" />
      <span>
        Using the{" "}
        <Link
          href="/documentation/api"
          className="underline hover:text-yellow-900 font-medium"
        >
          official API
        </Link>{" "}
        is recommended for better accuracy and ease.
      </span>
    </div>
  );
}
