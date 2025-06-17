export default function LoadingIndicator() {
  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm space-y-6">
      <div className="text-2xl font-bold text-gray-800 relative overflow-hidden shimmer-text">
        Pradeep Electrodes
      </div>
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
      <style jsx>{`
        .shimmer-text::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          height: 100%;
          width: 100%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
}
