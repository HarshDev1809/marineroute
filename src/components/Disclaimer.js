export default function Disclaimer({ type = "lib", className }) {
  const isLib = type === "lib";

  return (
    <p className={`text-sm text-red-700 bg-red-100 border border-red-300 px-4 py-2 rounded-md ${className}`}>
      <strong>Important Disclaimer:</strong>{" "}
      {isLib ? (
        <>
          This library is intended for visual and educational purposes only. It
          generates approximate sea routes and is <em>not suitable</em> for
          real-world navigation. Do <strong>not</strong> use it for operational
          maritime planning or route optimization for vessels.
        </>
      ) : (
        <>
          This API is designed for demonstration and educational use. It may
          not reflect real-time or fully accurate maritime data. Do{" "}
          <strong>not</strong> rely on it for professional navigation,
          logistics, or safety-critical marine applications.
        </>
      )}
    </p>
  );
}
