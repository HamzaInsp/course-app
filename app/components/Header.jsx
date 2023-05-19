import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Free Courses </Link>
        </div>
        <div className="links" >
          <Link href="/about" style={{ color: "white", textDecoration: "none", fontSize: 20 }}>About</Link>
          <Link href="/about/team" style={{ color: "white", textDecoration: "none", fontSize: 20 }}>
           Our Team
          </Link>
          <Link href="/code/repos" style={{ color: "white", textDecoration: "none", fontSize: 20 }}>
           Code
          </Link>
        </div>
      </div>
    </header>
  );
}
