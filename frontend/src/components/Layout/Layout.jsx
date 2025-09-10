import React, { useEffect } from 'react';
import { useRegion } from '../../contexts/RegionContext';
import './Layout.css';

const Layout = () => {
  const { currentRegion } = useRegion();

  useEffect(() => {
    // Fetch region-specific data when region changes
    const fetchRegionData = async () => {
      try {
        const response = await fetch(`/api/regions/${currentRegion}`);
        const data = await response.json();
        // Update component state with new data
      } catch (error) {
        console.error('Error fetching region data:', error);
      }
    };

    fetchRegionData();
  }, [currentRegion]); // Re-fetch when region changes

  return (
    <main className="main-content">
      <div className="container">
        <div className="content-wrapper">
          <section className="main-section">
            <div className="page-title">
              <h1>{currentRegion === 'Việt Nam' ? `Đặc sản ${currentRegion}` : 
                   currentRegion.includes('Miền') || currentRegion.includes('TP.') || currentRegion.includes('Tỉnh') || 
                   (!currentRegion.includes('Góc') && !currentRegion.includes('Văn Hóa') && !currentRegion.includes('Món Ăn')) ? 
                   `Đặc sản ${currentRegion}` : currentRegion}</h1>
            </div>
            
            <div className="featured-section">
              <div className="featured-image">
                <img src={`https://via.placeholder.com/800x400/4a90e2/white?text=Đặc+sản+${currentRegion.replace(/\s+/g, '+')}`} alt={`Đặc sản ${currentRegion}`} />
                <div className="navigation-arrows">
                  <button className="nav-arrow">‹</button>
                  <button className="nav-arrow">›</button>
                </div>
                <div className="featured-overlay">
                  <h2>Khám phá kho tàng ẩm thực đặc sản {currentRegion}</h2>
                </div>
              </div>
            </div>
            
            <div className="content-sections">
              <div className="food-grid">
                <div className="food-card">
                  <img src="https://via.placeholder.com/250x200/ff6b35/white?text=Món+đặc+sản" alt="Món đặc sản" />
                  <h3>Món đặc sản nổi tiếng</h3>
                  <p>Khám phá hương vị độc đáo của {currentRegion}</p>
                </div>
                <div className="food-card">
                  <img src="https://via.placeholder.com/250x200/28a745/white?text=Ẩm+thực+truyền+thống" alt="Ẩm thực truyền thống" />
                  <h3>Ẩm thực truyền thống</h3>
                  <p>Những món ăn được truyền từ đời này sang đời khác</p>
                </div>
                <div className="food-card">
                  <img src="https://via.placeholder.com/250x200/6f42c1/white?text=Đồ+ăn+vặt" alt="Đồ ăn vặt" />
                  <h3>Đồ ăn vặt đường phố</h3>
                  <p>Những món ăn vặt không thể bỏ qua khi đến {currentRegion}</p>
                </div>
              </div>
            </div>
          </section>
          
          <aside className="sidebar">
            <div className="sidebar-widget contact-widget">
              <div className="widget-header">
                <h3>THÔNG TIN LIÊN HỆ</h3>
              </div>
              <div className="contact-info-grid">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div className="contact-text">
                    <span className="contact-label">Địa chỉ:</span>
                    <span className="contact-value">123 Đường ABC, Quận 1, TP.HCM</span>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div className="contact-text">
                    <span className="contact-label">Hotline:</span>
                    <span className="contact-value">1900 6883</span>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <div className="contact-text">
                    <span className="contact-label">Email:</span>
                    <span className="contact-value">contact@dacsan.vn</span>
                  </div>
                </div>
              </div>
              
              <button className="contact-btn">Liên hệ ngay</button>
            </div>
            
            <div className="sidebar-widget">
              <h3>Tin tức mới nhất</h3>
              <div className="news-list">
                <div className="news-item">
                  <h4>Festival ẩm thực 2024</h4>
                  <p>Khám phá văn hóa ẩm thực Việt Nam</p>
                </div>
                <div className="news-item">
                  <h4>Công thức món ngon</h4>
                  <p>Hướng dẫn nấu các món đặc sản</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Layout;