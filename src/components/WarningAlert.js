import { FiAlertTriangle } from "react-icons/fi";

export default function WarningAlert({ title = "Warning", message, className }) {
  return (
    <div className={`flex items-start gap-3 p-2 border border-yellow-500 bg-yellow-50 rounded-md shadow-sm ${className}`}>
      <FiAlertTriangle className="text-yellow-600 " size={24} />
      <div className="flex flex-col">
        <strong className="text-yellow-800 font-semibold">{title}</strong>
        {message && <span className="text-yellow-700 text-sm">{message}</span>}
      </div>
    </div>
  );
}
