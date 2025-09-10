import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="container">
          <span className="top-link active">WEB ĐẶC SẢN</span>
          <span className="top-link">LIÊN HỆ NHANH</span>
        </div>
      </div>
      
      <div className="main-header">
        <div className="container">
          <div className="logo-section">
            <div className="logo">
              <div className="logo-icon">🍜</div>
              <div className="logo-text">
                <h1>Web <span className="highlight">Đặc Sản</span></h1>
                <p>Ẩm Thực Truyền Thống Việt Nam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;