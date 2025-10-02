// styles.js
const styles = {
  header: {
    background: "linear-gradient(90deg, #a2d4ec, #e0bbf7)",
    color: "white",
    padding: "1rem",
    textAlign: "center",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  navLink: {
    margin: "0 1rem",
    textDecoration: "none",
    color: "white",
    fontWeight: "500"
  },
  hero: {
    backgroundImage: "url('https://images.unsplash.com/photo-1612817159949-1c80274a7f63?auto=format&fit=crop&w=1500&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "70vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    padding: "2rem"
  },
  section: {
    padding: "3rem 2rem",
    maxWidth: "1100px",
    margin: "auto"
  },
  productCard: {
    background: "white",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    overflow: "hidden",
    transition: "transform 0.2s"
  },
  productImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover"
  },
  footer: {
    background: "#444",
    color: "white",
    textAlign: "center",
    padding: "1rem",
    marginTop: "2rem"
  }
};

export default styles;
