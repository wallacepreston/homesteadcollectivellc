import * as React from 'react';

export const Footer = () => {
  return <footer className="footer-area section-padding" data-wow-delay="0.3s">
      <span className="pro-detail">901-609-5412</span>
      <span className="pro-detail"><a href="mailto:prestonbuysmemphis@gmail.com">prestonbuysmemphis@gmail.com</a></span>
      <div>
        © {new Date().getFullYear()}, Homestead Collective LLC
      </div>
  </footer>
}
