import React from "react";

const navLinks = [
  { label: "杉山家具製作所について", href: "#" },
  { label: "製品について", href: "#" },
  { label: "納品事例", href: "#" },
  { label: "会社情報", href: "#" },
];

export default function Navigation() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "stretch",
        width: "100vw",
        height: 80,
        background: "#fff",
        boxSizing: "border-box",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          minWidth: 260,
          paddingLeft: 24,
        }}
      >
        {/* Logo icon (placeholder square blocks) */}
        <div style={{ marginRight: 16 }}>
          <svg width={40} height={40} viewBox="0 0 40 40">
            <rect x="0" y="0" width="16" height="16" fill="#54594B" />
            <rect x="0" y="20" width="16" height="16" fill="#54594B" />
            <rect x="20" y="0" width="16" height="36" fill="#54594B" />
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 22, letterSpacing: 6, color: "#54594B" }}>
            杉山家具製作所
          </div>
          <div
            style={{
              fontSize: 10,
              letterSpacing: 2,
              color: "#54594B",
              marginTop: 2,
            }}
          >
            SUGIYAMA FURNITURE
          </div>
        </div>
      </div>
      {/* Navigation links */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          flex: 1,
          justifyContent: "center",
          gap: 48,
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontSize: 22,
              color: "#222",
              textDecoration: "none",
              letterSpacing: 2,
              padding: "0 8px",
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
      {/* Right side: Recruitment and Contact */}
      <div style={{ display: "flex", alignItems: "stretch" }}>
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 120,
            fontSize: 22,
            color: "#222",
            background: "#fff",
            textDecoration: "none",
            letterSpacing: 2,
            borderLeft: "1px solid #eee",
          }}
        >
          採用情報
        </a>
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 180,
            fontSize: 24,
            color: "#fff",
            background: "#54594B",
            textDecoration: "none",
            letterSpacing: 2,
            fontWeight: 500,
          }}
        >
          お問い合わせ
        </a>
      </div>
    </header>
  );
}
