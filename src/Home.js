import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


export default function HomePage() {
  return (
    <div className="homepage bg-black text-light">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top shadow-sm border-bottom border-gold">
        <div className="container">
          <a className="navbar-brand fw-bold text-gold fs-3" href="#">
            Esspace Fragrance
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {["Collections", "Why Espace", "Contact Us", "Shop Now"].map(
                (link, i) => (
                  <li className="nav-item" key={i}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="nav-link text-gold"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>


{/* Hero Section (Luxury Modern Carousel) */}
<header
  id="heroCarousel"
  className="carousel slide carousel-fade hero"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    {["logo.jpg", "logo.png", "logo.png"].map((img, index) => (
      <div
        className={`carousel-item ${index === 0 ? "active" : ""}`}
        key={index}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          position: "relative",
        }}
      >
        {/* Dark overlay */}
        <div className="overlay"></div>

        {/* Centered Glassmorphism caption */}
        <div
          className="carousel-caption"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            width: "100%",
            maxWidth: "700px",
          }}
        >
          <div className="caption-box text-center p-4 rounded-4 shadow-lg">
            <h1 className="display-4 fw-bold text-gold animate__animated animate__fadeInDown">
              Luxury in Every Drop
            </h1>
            <p className="lead text-light animate__animated animate__fadeInUp animate__delay-1s">
              Experience timeless elegance with our handcrafted collection
            </p>
            <a
              href="#collections"
              className="btn btn-gold btn-lg mt-3 animate__animated animate__fadeInUp animate__delay-2s"
            >
              View Collections
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</header>



{/* Collections Section */}
<section id="collections" className="py-5 bg-black text-light">
  <div className="container text-center">
    <h2 className="text-gold fw-bold mb-5 display-5">
      Our Exclusive Perfume Collection
    </h2>

    <div
      id="perfumeCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-touch="true"
      data-bs-interval="5000"
    >
      {/* Carousel Inner */}
      <div className="carousel-inner">
        {[
          { name: "Sauvage", price: "Ksh 120", image: "sauva.jpg" },
          { name: "Asad", price: "Ksh 95", image: "asad.jpg" },
          { name: "Sweet Vanilla", price: "Ksh 110", image: "vanilla.jpg" },
          { name: "Asad Noir", price: "Ksh 150", image: "asad2.jpg" },
          { name: "Bee Essence", price: "Ksh 100", image: "bee.jpg" },
          { name: "Black Opium", price: "Ksh 200", image: "blackopium.jpg" },
          { name: "Mystic Vanilla", price: "Ksh 150", image: "vanilla.jpg" },
        ].map((product, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div className="d-flex flex-column align-items-center">
              {/* Image frame */}
              <div
                className="bg-dark d-flex align-items-center justify-content-center w-100"
                style={{
                  maxWidth: "420px",
                  height: "500px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0px 10px 30px rgba(255,215,0,0.25)",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Text details */}
              <div className="mt-4">
                <h3 className="text-gold fw-bold mb-2 fs-3">
                  {product.name}
                </h3>
                <p className="fs-5 mb-3">{product.price}</p>
                <a href="#" className="btn btn-gold px-4 py-2 shadow-sm">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls only */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#perfumeCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon bg-dark rounded-circle p-3"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#perfumeCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon bg-dark rounded-circle p-3"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section>



{/* Why Espace Section */}
<section
  id="why-espace"
  className="py-5 text-light"
  style={{
    background: "linear-gradient(135deg, #000000, #1a1a1a)", // luxury black gradient
  }}
>
  <div className="container">
    <div className="row align-items-center">
      {/* Image */}
      <div className="col-md-6 mb-4 mb-md-0 text-center">
        <img
          src="logo.jpg"
          alt="Luxury fragrance bottle"
          className="img-fluid rounded-4 shadow-lg border border-2"
          style={{
            borderColor: "#d4af37", // metallic gold border
          }}
        />
      </div>

      {/* Text */}
      <div className="col-md-6">
        <h2
          className="mb-4 fw-bold"
          style={{
            color: "#d4af37", // gold text
            fontFamily: "'Playfair Display', serif", // luxury serif font
            fontSize: "2rem",
          }}
        >
          Why Choose Espace?
        </h2>
        <p
          style={{
            lineHeight: "1.8",
            fontSize: "1.05rem",
            color: "#f0f0f0",
          }}
        >
          At{" "}
          <span
            style={{
              color: "#d4af37",
              fontWeight: "600",
            }}
          >
            Espace Fragrance
          </span>
          , each scent is a masterpiece, blending rare ingredients to create
          timeless experiences. Our perfumes are not just fragrances — they are
          <strong> luxury statements</strong>, crafted for those who desire
          elegance and sophistication.
        </p>

        {/* Elegant list */}
        <ul
          className="list-unstyled mt-3"
          style={{ fontSize: "1rem", color: "#ddd" }}
        >
          <li className="mb-2">✨ Rare & Exotic Ingredients</li>
          <li className="mb-2">✨ Handcrafted Luxury</li>
          <li className="mb-2">✨ Long-lasting Scents</li>
          <li className="mb-2">✨ Exclusivity & Elegance</li>
        </ul>

        {/* CTA Button */}
        <a
          href="#shop-now"
          className="btn px-4 py-2 mt-3"
          style={{
            backgroundColor: "#d4af37",
            color: "#000",
            fontWeight: "600",
            borderRadius: "50px",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#b68c2d")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#d4af37")
          }
        >
          Discover More
        </a>
      </div>
    </div>
  </div>
</section>


{/* Contact Us Section */}
<section id="contact-us" className="py-5 bg-black text-light">
  <div className="container">
    <h2 className="text-gold text-center mb-4 fw-bold">Get in Touch</h2>
    <div className="row justify-content-center">
      <div className="col-md-7">
        <form className="p-4 rounded bg-black border border-gold shadow-lg">
          {/* Name */}
          <div className="mb-4">
            <label className="form-label text-gold fw-semibold">Full Name</label>
            <input
              type="text"
              className="form-control bg-black text-light border-0 border-bottom border-gold rounded-0"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="form-label text-gold fw-semibold">Email Address</label>
            <input
              type="email"
              className="form-control bg-black text-light border-0 border-bottom border-gold rounded-0"
              placeholder="Enter your email"
            />
          </div>

          {/* Subject */}
          <div className="mb-4">
            <label className="form-label text-gold fw-semibold">Subject</label>
            <input
              type="text"
              className="form-control bg-black text-light border-0 border-bottom border-gold rounded-0"
              placeholder="Enter subject"
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="form-label text-gold fw-semibold">Message</label>
            <textarea
              className="form-control bg-black text-light border-0 border-bottom border-gold rounded-0"
              rows="4"
              placeholder="Write your message"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="btn btn-gold w-100 py-2 fw-semibold rounded-pill shadow-sm"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="text-center mt-4">
          <p className="text-gold fw-semibold mb-1">📞 +254 712 345 678</p>
          <p className="text-gold fw-semibold">📧 info@espacefragrance.com</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="py-3 text-center bg-black text-light border-top border-gold">
  <p className="mb-0 text-gold fw-semibold">
    © {new Date().getFullYear()} Espace Fragrance. All Rights Reserved.
  </p>
</footer>

</div>
    );
    }