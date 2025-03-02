
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t shadow-sm text-xs text-center text-gray-400">
      <div className="p-3">{currentYear} Trendora. All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
