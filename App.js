import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ fontFamily: "Segoe UI, sans-serif" }}>
      {/* Header */}
      <header style={{ background: "linear-gradient(90deg,#a2d4ec,#e0bbf7)", padding: "1rem" }}>
        <h1 style={{ color: "white", margin: 0 }}>Skintific Skincare</h1>
        <nav>
          <a href="#about" style={{ margin: "0 1rem", color: "white" }}>Tentang</a>
          <a href="#products" style={{ margin: "0 1rem", color: "white" }}>Produk</a>
          <a href="#testimonials" style={{ margin: "0 1rem", color: "white" }}>Testimoni</a>
          <a href="#contact" style={{ margin: "0 1rem", color: "white" }}>Kontak</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1612817159949-1c80274a7f63?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "2rem"
      }}>
        <div>
          <h2 style={{ fontSize: "2.5rem", textShadow: "2px 2px 5px rgba(0,0,0,0.5)" }}>
            Skincare Lokal, Aman & Terjangkau
          </h2>
          <p>Produk perawatan kulit berbasis riset untuk semua jenis kulit.</p>
        </div>
      </section>

      {/* Tentang */}
      <section id="about" style={{ padding: "3rem 2rem", maxWidth: "900px", margin: "auto" }}>
        <h2>Tentang Kami</h2>
        <p>
          Skintific adalah brand skincare UMKM lokal yang menghadirkan produk perawatan kulit aman, halal, 
          dan terjangkau untuk semua kalangan.
        </p>
      </section>

      {/* Produk */}
      <section id="products" style={{ padding: "3rem 2rem", maxWidth: "1100px", margin: "auto" }}>
        <h2>Produk Kami</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem"
        }}>
          <div style={{ background: "white", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <img src="https://images.unsplash.com/photo-1612817159949-1c80274a7f63?auto=format&fit=crop&w=500&q=80" 
                 alt="Moisturizer" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <h3 style={{ padding: "1rem" }}>Moisturizer</h3>
            <p style={{ padding: "0 1rem", fontWeight: "bold" }}>Rp 85.000</p>
          </div>

          <div style={{ background: "white", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <img src="https://images.unsplash.com/photo-1601049676869-702ea24cfd54?auto=format&fit=crop&w=500&q=80" 
                 alt="Serum" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <h3 style={{ padding: "1rem" }}>Brightening Serum</h3>
            <p style={{ padding: "0 1rem", fontWeight: "bold" }}>Rp 120.000</p>
          </div>

          <div style={{ background: "white", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <img src="https://images.unsplash.com/photo-1620912189861-1f1bb3f26ef2?auto=format&fit=crop&w=500&q=80" 
                 alt="Facial Wash" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <h3 style={{ padding: "1rem" }}>Facial Wash</h3>
            <p style={{ padding: "0 1rem", fontWeight: "bold" }}>Rp 65.000</p>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimonials" style={{ padding: "3rem 2rem", maxWidth: "1000px", margin: "auto" }}>
        <h2>Testimoni Pelanggan</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem"
        }}>
          <div style={{ background: "#fff", padding: "1.2rem", borderRadius: "10px", boxShadow: "0 3px 6px rgba(0,0,0,0.1)" }}>
            “Kulit jadi glowing dalam 2 minggu!” – Sinta
          </div>
          <div style={{ background: "#fff", padding: "1.2rem", borderRadius: "10px", boxShadow: "0 3px 6px rgba(0,0,0,0.1)" }}>
            “Produk aman banget, nggak bikin iritasi.” – Rani
          </div>
          <div style={{ background: "#fff", padding: "1.2rem", borderRadius: "10px", boxShadow: "0 3px 6px rgba(0,0,0,0.1)" }}>
            “Harga terjangkau tapi kualitas premium!” – Dian
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section id="contact" style={{ padding: "3rem 2rem", textAlign: "center" }}>
        <h2>Kontak Kami</h2>
        <p>Email: info@skintific.id</p>
        <p>Instagram: @skintific.id</p>
        <p>WhatsApp: 0812-3456-7890</p>
      </section>

      {/* Footer */}
      <footer style={{ background: "#444", color: "white", textAlign: "center", padding: "1rem" }}>
        <p>&copy; 2025 Skintific Skincare - UMKM Lokal Indonesia</p>
      </footer>
    </div>
  );
}

export default App;
