import React, { useState } from "react";
import Logo from "../assets/logoipsum-380.svg";

// All links are hardcoded and internal (no user input)
const navLinks = [
  { label: "杉山家具製作所について", href: "/about" },
  { label: "製品について", href: "/products" },
  { label: "納品事例", href: "/cases" },
  { label: "会社情報", href: "/company" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-stretch w-screen lg:h-[120px] h-[60px] bg-white box-border relative">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img src={Logo.src} alt="杉山家具製作所" className="h-7 w-40 pl-5 lg:h-7 lg:w-64 lg:pl-10" />
      </a>
      
      {/* Hamburger (mobile only) */}
      <button
        className="drawer_open lg:hidden flex flex-col items-center justify-center ml-auto mr-6"
        aria-label="Open mobile menu"
        onClick={() => setMenuOpen(true)}
      >
        <span className="block w-[27px] h-px bg-[#4e5346] mb-2"></span>
        <span className="block w-[27px] h-px bg-[#4e5346] mb-2"></span>
        <span className="block w-[27px] h-px bg-[#4e5346]"></span>
      </button>
      
      {/* Navigation links (desktop only) */}
      <nav className="hidden lg:flex items-center flex-1 justify-end gap-12">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[14px] text-[#222] no-underline tracking-[2px] px-2"
          >
            {link.label}
          </a>
        ))}
        <span className="inline-block w-2"></span>
      </nav>
      {/* Right side: Recruitment and Contact (desktop only) */}
      <div className="hidden lg:flex items-stretch">
        <a
          href="/recruit"
          className="flex items-center justify-center min-w-[120px] text-[16px] text-[#222] bg-white no-underline tracking-[2px] border-l border-[#eee]"
        >
          採用情報
        </a>
        <a
          href="/contact"
          className="flex items-center justify-center min-w-[180px] text-[16px] text-white bg-[#54594B] no-underline tracking-[2px] font-medium"
        >
          お問い合わせ
        </a>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex"
          aria-modal="true"
          role="dialog"
        >
          {/* Overlay background */}
          <div
            className="fixed inset-0 bg-white"
            onClick={() => setMenuOpen(false)}
          />
          {/* Menu content */}
          <div className="relative flex flex-col w-full h-[700px] z-10">
            {/* Overlay header: logo + close button */}
            <div className="flex items-center justify-between h-[60px] w-full bg-white pl-5 pr-2">
              <a href="/" className="flex items-center h-[60px]">
                <img src={Logo.src} alt="杉山家具製作所" className="h-7 w-40" />
              </a>
              <button
                className="text-[#54594B] text-3xl h-[60px] w-10 flex items-center justify-center"
                aria-label="メニューを閉じる"
                onClick={() => setMenuOpen(false)}
                style={{ background: "transparent" }}
              >
                ×
              </button>
            </div>
            {/* Navigation area */}
            <div className="flex-1 flex flex-col bg-[#54594B] text-white p-14 pt-[65px] pb-[100px]">
              <div className="flex flex-col gap-5 m-auto" >
                <nav className="flex flex-col gap-5 m-auto">
                  <a href="/" className="text-[16px] tracking-widest">トップページ</a>
                  {navLinks.slice(0, 3).map((link) => (
                    <a key={link.label} href={link.href} className="text-[16px] tracking-widest">
                    {link.label}
                    </a>
                  ))}

                  <a href="/news" className="text-[16px] tracking-widest">お知らせ</a>
                  <a href="/company" className="text-[16px] tracking-widest">会社情報</a>
                  <a href="/recruit" className="text-[16px] tracking-widest">採用情報</a>
                  <a href="/contact" className="text-[16px] tracking-widest">お問い合わせ</a>
                  <a href="/privacy" className="text-[16px] tracking-widest">個人情報保護方針</a>
                </nav>

              {/* SNS */}

                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs tracking-widest"
                >
                  <span className="w-4 h-4 bg-white rounded mr-1"></span>Instagram
                </a>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs tracking-widest"
                >
                  <span className="w-4 h-4 bg-white rounded mr-1"></span>Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
