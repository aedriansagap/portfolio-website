import Link from "next/link";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <Link href="/" className="logo">
          <span className="text-gradient">Portfolio.</span>
        </Link>
        <nav className="main-nav">
          <ul>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#contact" className="btn btn-outline">Contact Me</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
