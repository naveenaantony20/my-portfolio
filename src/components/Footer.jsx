export default function Footer() {
  return (
    <footer className="relative bg-[#0B1120] text-center py-8 border-t border-white/5">
      <div className="absolute inset-0 bg-glow-right"></div>
      <p className="relative text-gray-400 text-sm">
        Built with ❤️ using React & TailwindCSS<br />
        © {new Date().getFullYear()} Naveena Antony
      </p>
    </footer>
  );
}
