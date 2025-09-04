import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-slider">
          <div className="hero-slide active">
            <img src="/api/placeholder/1200/400" alt="Đặc sản Việt Nam" />
            <div className="hero-content">
              <div className="hero-arrows">
                <button className="arrow-btn prev">‹</button>
                <button className="arrow-btn next">›</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content-area">
              <article className="featured-article">
                <h2>Khám phá kho tàng ẩm thực đặc sản ba miền đất nước</h2>
                
                <div className="article-content">
                  <img src="/api/placeholder/200/150" alt="Đặc sản Việt Nam" className="article-image" />
                  <div className="article-text">
                    <p>
                      Giới thiệu về ẩm thực đặc sản truyền thống Việt Nam với hương vị 
                      đậm đà từ ba miền Bắc - Trung - Nam. Mỗi vùng đều có những 
                      món ăn độc đáo, mang đậm bản sắc văn hóa địa phương. 
                      Từ phở Hà Nội, bún bò Huế đến bánh mì Sài Gòn, 
                      tất cả đều là những tinh hoa ẩm thực không thể bỏ qua. 
                      Hãy cùng khám phá và thưởng thức...
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <aside className="sidebar">
              <div className="sidebar-section">
                <h3>THÔNG TIN LIÊN HỆ</h3>
                <div className="contact-card">
                  <div className="contact-logo">
                    <div className="logo-placeholder">
                      <span>🏪</span>
                    </div>
                    <div className="company-info">
                      <h4>Đặc Sản Việt Group</h4>
                      <div className="phone-number">09.215.215.88</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sidebar-section">
                <h3>ĐẶC SẢN THEO MIỀN</h3>
                <ul className="category-list">
                  <li><a href="/mien-bac">› Đặc sản Miền Bắc</a></li>
                  <li><a href="/mien-nam">› Đặc sản Miền Nam</a></li>
                  <li><a href="/mien-trung">› Đặc sản Miền Trung</a></li>
                  <li><a href="/goc-nau-an">› Góc nấu ăn</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
