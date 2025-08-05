export default function Maintenance() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#090722] via-[#27243d] via-[#1f0c4b] to-[#1a25c2] animate-gradient bg-[length:400%_400%]">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold mb-10 text-white drop-shadow-lg">Maintenance mode</h1>
        <h2 className="text-2xl font-normal leading-relaxed mb-8 text-white/90">
          Sorry for the inconvenience.<br />
          My website is currently undergoing scheduled maintenance.<br /><br />
        </h2>
        <p className="text-lg text-white/80">Thank you for your understanding.</p>
      </div>
      <style jsx>{`
        .animate-gradient {
          background-size: 400% 400%;
          animation: Gradient 15s ease infinite;
        }
        @keyframes Gradient {
          0% {background-position: 0% 50%}
          50% {background-position: 100% 50%}
          100% {background-position: 0% 50%}
        }
      `}</style>
    </div>
  );
}
