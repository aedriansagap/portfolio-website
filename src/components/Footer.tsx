import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p className="copyright">© {year} Creative Developer. All rights reserved.</p>
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
