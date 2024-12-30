import React from "react";

type HeaderProps = {
  title: string;
  subtitle: string;
};

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="text-white text-center py-8">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-5xl font-bold mt-2">{subtitle}</p>
    </header>
  );
};

export default Header;
