:root{
  --bg:#fbf9fb;
  --accent:#E75A7C;
  --muted:#6b7280;
  --card:#ffffff;
  --glass: rgba(255,255,255,0.6);
  --container:1100px;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, "Helvetica Neue", Arial;
  background: linear-gradient(180deg, var(--bg), #fff);
  color:#111827;
  margin:0;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}

.container{max-width:var(--container);margin:0 auto;padding:0 1rem}

.site-header{backdrop-filter: blur(6px);position:sticky;top:0;z-index:50;border-bottom:1px solid rgba(0,0,0,0.04)}
.header-inner{display:flex;align-items:center;justify-content:space-between;padding:1rem 0}
.brand{display:flex;gap:0.75rem;align-items:center}
.logo{width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#FFD7E0,#FFE6C7);display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff}
.brand h1{margin:0;font-size:1.125rem}
.tag{font-size:.75rem;color:var(--muted);margin-top:-4px}

.nav{display:flex;gap:1rem}
.nav a{color:var(--muted);text-decoration:none;font-weight:600}
.menu-btn{display:none;background:none;border:none;font-size:1.25rem}

.hero{padding:3.5rem 0;margin-bottom:1.5rem}
.hero-inner{display:grid;grid-template-columns:1fr 420px;gap:2rem;align-items:center}
.hero-text h2{font-size:2rem;margin-bottom:.5rem;color:#111827}
.lead{color:var(--muted);margin-top:.25rem}
.hero-image img{width:100%;border-radius:18px;box-shadow:0 12px 40px rgba(0,0,0,0.08)}

.section{padding:3rem 0}
.section.alt{background:linear-gradient(180deg,#fff,#fff7fb)}

.products-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.25rem}
.card{background:var(--card);border-radius:14px;overflow:hidden;box-shadow:0 8px 25px rgba(2,6,23,0.06);transition:transform .25s,box-shadow .25s}
.card img{width:100%;height:190px;object-fit:cover}
.card-body{padding:1rem}
.card h4{margin:0 0 .35rem;color:#0f172a}
.price{font-weight:700;color:var(--accent)}
.desc{color:var(--muted);margin-top:.5rem;font-size:.95rem}
.card-actions{display:flex;gap:.5rem;margin-top:1rem;align-items:center}

.btn{border:0;padding:.6rem .9rem;border-radius:999px;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:.5rem;font-weight:600}
.btn.primary{background:var(--accent);color:#fff}
.btn.outline{background:transparent;border:1px solid rgba(0,0,0,0.08);color:var(--muted)}
.btn.ghost{background:transparent;color:var(--muted);border:1px solid rgba(0,0,0,0.04)}

.about-grid{display:grid;grid-template-columns:1fr 420px;gap:1.5rem;align-items:center}
.bullets{list-style:none;margin-top:1rem;color:var(--muted);display:grid;gap:.5rem}
.bullets li::before{content:'✔';color:var(--accent);margin-right:.5rem}

.contact-grid{display:grid;grid-template-columns:320px 1fr;gap:1rem;align-items:start}
.contact-card{background:var(--card);padding:1.25rem;border-radius:12px;box-shadow:0 6px 20px rgba(2,6,23,0.04)}
.contact-form{display:flex;flex-direction:column;gap:.6rem}
.contact-form input,.contact-form textarea{padding:.75rem;border-radius:10px;border:1px solid rgba(2,6,23,0.06)}
.form-actions{display:flex;gap:.5rem;align-items:center}

.site-footer{padding:1rem 0;background:#0f172a;color:#fff;margin-top:2rem;text-align:center}
.floating-wa{position:fixed;right:18px;bottom:18px;background:linear-gradient(135deg,#25D366,#128C7E);color:#fff;padding:.7rem 1rem;border-radius:999px;box-shadow:0 8px 20px rgba(0,0,0,0.15);text-decoration:none;font-weight:700}

@media (max-width:980px){
  .hero-inner{grid-template-columns:1fr}
  .about-grid{grid-template-columns:1fr}
  .contact-grid{grid-template-columns:1fr}
  .nav{display:none}
  .menu-btn{display:block}
}
.fade-in{opacity:0;transform:translateY(16px);transition:all .6s ease}
.fade-in.show{opacity:1;transform:none}
