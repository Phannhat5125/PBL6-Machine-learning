import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('dac-san'); // Default active menu

  const handleMenuClick = (menuName, event) => {
    event.preventDefault();
    setActiveMenu(menuName);
  };

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
              <span className="logo-icon">🍜</span>
              <div className="logo-text">
                <h1>Web <span className="highlight">Đặc Sản</span></h1>
                <p>Ẩm Thực Truyền Thống Việt Nam</p>
              </div>
            </div>
          </div>
          
          <div className="contact-info">
            <div className="contact-banner">
              <span>🍲 Đặc Sản & Ẩm Thực</span>
              <div className="contact-details">
                <span>Hỗ Trợ & Tư Vấn</span>
                <strong>1900 6883</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="main-nav">
        <div className="container">
          <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li>
              <a 
                href="/" 
                className={`nav-link ${activeMenu === 'dac-san' ? 'active' : ''}`}
                onClick={(e) => handleMenuClick('dac-san', e)}
              >
                ĐẶC SẢN
              </a>
            </li>
            
            <li className="dropdown">
              <a 
                href="/mien-bac" 
                className={`nav-link ${activeMenu === 'mien-bac' ? 'active' : ''}`}
                onClick={(e) => handleMenuClick('mien-bac', e)}
              >
                MIỀN BẮC <span>»</span>
              </a>
              <div className="dropdown-content">
                <a href="/mien-bac/tuyen-quang">Tuyên Quang</a>
                <a href="/mien-bac/lao-cai">Lào Cai</a>
                <a href="/mien-bac/thai-nguyen">Thái Nguyên</a>
                <a href="/mien-bac/phu-tho">Phú Thọ</a>
                <a href="/mien-bac/bac-ninh">Bắc Ninh</a>
                <a href="/mien-bac/hung-yen">Hưng Yên</a>
                <a href="/mien-bac/hai-phong">TP. Hải Phòng</a>
                <a href="/mien-bac/ha-noi">TP. Hà Nội</a>
                <a href="/mien-bac/ninh-binh">Ninh Bình</a>
                <a href="/mien-bac/lai-chau">Lai Châu</a>
                <a href="/mien-bac/dien-bien">Điện Biên</a>
                <a href="/mien-bac/son-la">Sơn La</a>
                <a href="/mien-bac/lang-son">Lạng Sơn</a>
                <a href="/mien-bac/quang-ninh">Quảng Ninh</a>
                <a href="/mien-bac/cao-bang">Cao Bằng</a>
              </div>
            </li>
            
            <li className="dropdown">
              <a 
                href="/mien-nam" 
                className={`nav-link ${activeMenu === 'mien-nam' ? 'active' : ''}`}
                onClick={(e) => handleMenuClick('mien-nam', e)}
              >
                MIỀN NAM <span>»</span>
              </a>
              <div className="dropdown-content">
                <a href="/mien-nam/ho-chi-minh">TP. Hồ Chí Minh</a>
                <a href="/mien-nam/dong-nai">Tỉnh Đồng Nai</a>
                <a href="/mien-nam/tay-ninh">Tỉnh Tây Ninh</a>
                <a href="/mien-nam/can-tho">TP. Cần Thơ</a>
                <a href="/mien-nam/vinh-long">Tỉnh Vĩnh Long</a>
                <a href="/mien-nam/dong-thap">Tỉnh Đồng Tháp</a>
                <a href="/mien-nam/ca-mau">Tỉnh Cà Mau</a>
                <a href="/mien-nam/an-giang">Tỉnh An Giang</a>
              </div>
            </li>
            
            <li className="dropdown">
              <a 
                href="/mien-trung" 
                className={`nav-link ${activeMenu === 'mien-trung' ? 'active' : ''}`}
                onClick={(e) => handleMenuClick('mien-trung', e)}
              >
                MIỀN TRUNG <span>»</span>
              </a>
              <div className="dropdown-content">
                <a href="/mien-trung/quang-tri">Tỉnh Quảng Trị</a>
                <a href="/mien-trung/da-nang">Thành phố Đà Nẵng</a>
                <a href="/mien-trung/quang-ngai">Tỉnh Quảng Ngãi</a>
                <a href="/mien-trung/gia-lai">Tỉnh Gia Lai</a>
                <a href="/mien-trung/khanh-hoa">Tỉnh Khánh Hòa</a>
                <a href="/mien-trung/lam-dong">Tỉnh Lâm Đồng</a>
                <a href="/mien-trung/dak-lak">Tỉnh Đắk Lắk</a>
                <a href="/mien-trung/thanh-hoa">Tỉnh Thanh Hóa</a>
                <a href="/mien-trung/nghe-an">Tỉnh Nghệ An</a>
                <a href="/mien-trung/ha-tinh">Tỉnh Hà Tĩnh</a>
                <a href="/mien-trung/hue">Thành phố Huế</a>
              </div>
            </li>
            
            <li>
              <a 
                href="/goc-nau-an" 
                className={`nav-link ${activeMenu === 'goc-nau-an' ? 'active' : ''}`}
                onClick={(e) => handleMenuClick('goc-nau-an', e)}
              >
                GÓC NẤU ĂN
              </a>
            </li>
            <li>
              <a 
                href="/van-hoa-am-thuc" 
                className={`nav-link ${activeMenu === 'van-hoa-am-thuc' ? 'active' : ''}`}
                onClick={(e) => handleMenuClick('van-hoa-am-thuc', e)}
              >
                VĂN HÓA ẨM THỰC
              </a>
            </li>
            <li>
              <a 
                href="/mon-an-suc-khoe" 
                className={`nav-link ${activeMenu === 'mon-an-suc-khoe' ? 'active' : ''}`}
                onClick={(e) => handleMenuClick('mon-an-suc-khoe', e)}
              >
                MÓN ĂN VÀ SỨC KHỎE
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
