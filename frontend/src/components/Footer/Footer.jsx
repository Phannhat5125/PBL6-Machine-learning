import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Web Đặc Sản</h3>
            <p>Khám phá ẩm thực truyền thống Việt Nam với những món đặc sản từ ba miền Bắc - Trung - Nam.</p>
          </div>
          
          <div className="footer-section">
            <h4>Liên kết nhanh</h4>
            <ul>
              <li><a href="#dac-san">Đặc sản</a></li>
              <li><a href="#mien-bac">Miền Bắc</a></li>
              <li><a href="#mien-trung">Miền Trung</a></li>
              <li><a href="#mien-nam">Miền Nam</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Thông tin liên hệ</h4>
            <div className="contact-items">
              <p><span className="contact-icon">📍</span> 123 Đường ABC, Quản 1, TP.HCM</p>
              <p><span className="contact-icon">📞</span> Hotline: 1900 6883</p>
              <p><span className="contact-icon">✉️</span> Email: contact@dacsan.vn</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Theo dõi chúng tôi</h4>
            <div className="social-links">
              <a href="#facebook" className="social-btn facebook">Facebook</a>
              <a href="#instagram" className="social-btn instagram">Instagram</a>
              <a href="#youtube" className="social-btn youtube">YouTube</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 PBL6 Machine Learning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;