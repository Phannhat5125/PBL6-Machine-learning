import React, { useState } from 'react';
import { useRegion } from '../../contexts/RegionContext';
import './Navigation.css';

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState('dac-san');
  const { setCurrentRegion } = useRegion();

  const mienBacProvinces = [
    'Tuyên Quang', 'Lào Cai', 'Thái Nguyên', 'Phú Thọ', 'Bắc Ninh', 
    'Hưng Yên', 'TP. Hải Phòng', 'Ninh Bình', 'TP. Hà Nội', 'Lai Châu', 
    'Điện Biên', 'Sơn La', 'Lạng Sơn', 'Quảng Ninh', 'Cao Bằng'
  ];

  const mienTrungProvinces = [
    'Tỉnh Quảng Trị', 'Thành phố Đà Nẵng', 'Tỉnh Quảng Ngãi', 
    'Tỉnh Gia Lai', 'Tỉnh Khánh Hòa', 'Tỉnh Lâm Đồng', 'Tỉnh Đắk Lắk', 
    'Tỉnh Thanh Hóa', 'Tỉnh Nghệ An', 'Tỉnh Hà Tĩnh', 'Thành phố Huế'
  ];

  const mienNamProvinces = [
    'TP. Hồ Chí Minh', 'Tỉnh Đồng Nai', 'Tỉnh Tây Ninh', 'TP. Cần Thơ', 
    'Tỉnh Vĩnh Long', 'Tỉnh Đồng Tháp', 'Tỉnh Cà Mau', 'Tỉnh An Giang'
  ];

  const handleMenuClick = (menuName, event) => {
    event.preventDefault();
    setActiveMenu(menuName);
    
    // Update region title
    if (menuName === 'dac-san') {
      setCurrentRegion('Việt Nam');
    } else if (menuName === 'mien-bac') {
      setCurrentRegion('Miền Bắc');
    } else if (menuName === 'mien-nam') {
      setCurrentRegion('Miền Nam');
    } else if (menuName === 'mien-trung') {
      setCurrentRegion('Miền Trung');
    } else if (menuName === 'van-hoa-am-thuc') {
      setCurrentRegion('Văn Hóa Ẩm Thực');
    } else if (menuName === 'goc-nau-an') {
      setCurrentRegion('Góc Nấu Ăn');
    } else if (menuName === 'mon-an-suc-khoe') {
      setCurrentRegion('Món Ăn Và Sức Khỏe');
    }
    
    // Update URL without page reload
    if (typeof window !== 'undefined') {
      const newUrl = menuName === 'dac-san' ? '/' : `/${menuName.replace(/-/g, '-')}`;
      window.history.pushState({}, '', newUrl);
    }
  };

  const handleProvinceClick = (province, region) => {
    setCurrentRegion(province);
    // Set active menu based on region
    if (region === 'Miền Bắc') {
      setActiveMenu('mien-bac');
    } else if (region === 'Miền Nam') {
      setActiveMenu('mien-nam');
    } else if (region === 'Miền Trung') {
      setActiveMenu('mien-trung');
    }
    // No navigation here since we want to show the province page
  };

  return (
    <nav className="main-nav">
      <div className="container">
        <ul className="nav-menu">
          <li>
            <a 
              href="/" 
              className={`nav-link ${activeMenu === 'dac-san' ? 'active function-menu' : ''}`}
              onClick={(e) => handleMenuClick('dac-san', e)}
            >
              ĐẶC SẢN
            </a>
          </li>
          
          <li className="dropdown">
            <a 
              href="/mien-bac" 
              className={`nav-link ${activeMenu === 'mien-bac' ? 'active function-menu' : ''}`}
              onClick={(e) => handleMenuClick('mien-bac', e)}
            >
              MIỀN BẮC <span>»</span>
            </a>
            <div className="dropdown-content">
              {mienBacProvinces.map((province, index) => (
                <a 
                  key={index} 
                  href={`/mien-bac/${province.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleProvinceClick(province, 'Miền Bắc');
                  }}
                >
                  {province}
                </a>
              ))}
            </div>
          </li>
          
          <li className="dropdown">
            <a 
              href="/mien-nam" 
              className={`nav-link ${activeMenu === 'mien-nam' ? 'active function-menu' : ''}`}
              onClick={(e) => handleMenuClick('mien-nam', e)}
            >
              MIỀN NAM <span>»</span>
            </a>
            <div className="dropdown-content">
              {mienNamProvinces.map((province, index) => (
                <a 
                  key={index} 
                  href={`/mien-nam/${province.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleProvinceClick(province, 'Miền Nam');
                  }}
                >
                  {province}
                </a>
              ))}
            </div>
          </li>
          
          <li className="dropdown">
            <a 
              href="/mien-trung" 
              className={`nav-link ${activeMenu === 'mien-trung' ? 'active function-menu' : ''}`}
              onClick={(e) => handleMenuClick('mien-trung', e)}
            >
              MIỀN TRUNG <span>»</span>
            </a>
            <div className="dropdown-content">
              {mienTrungProvinces.map((province, index) => (
                <a 
                  key={index} 
                  href={`/mien-trung/${province.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleProvinceClick(province, 'Miền Trung');
                  }}
                >
                  {province}
                </a>
              ))}
            </div>
          </li>
          
          <li>
            <a 
              href="/goc-nau-an" 
              className={`nav-link ${activeMenu === 'goc-nau-an' ? 'active function-menu' : ''}`}
              onClick={(e) => handleMenuClick('goc-nau-an', e)}
            >
              GÓC NẤU ĂN
            </a>
          </li>
          <li>
            <a 
              href="/van-hoa-am-thuc" 
              className={`nav-link ${activeMenu === 'van-hoa-am-thuc' ? 'active function-menu' : ''}`}
              onClick={(e) => handleMenuClick('van-hoa-am-thuc', e)}
            >
              VĂN HÓA ẨM THỰC
            </a>
          </li>
          <li>
            <a 
              href="/mon-an-suc-khoe" 
              className={`nav-link ${activeMenu === 'mon-an-suc-khoe' ? 'active function-menu' : ''}`}
              onClick={(e) => handleMenuClick('mon-an-suc-khoe', e)}
            >
              MÓN ĂN VÀ SỨC KHỎE
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;