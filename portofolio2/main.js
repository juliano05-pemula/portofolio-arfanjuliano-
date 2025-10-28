particlesJS("particles-js", {
  particles: {
    number: {
      value: 120, // jumlah partikel (banyak kayak bintang)
      density: { enable: true, value_area: 800 },
    },
    color: { value: "#00f7ff" }, // warna neon biru
    shape: { type: "circle" }, // bentuk bulat kayak bintang
    opacity: {
      value: 0.7, // transparansi partikel
      random: true, // bikin opacity random biar kedip-kedip
    },
    size: {
      value: 3,
      random: true, // ukuran random biar kayak bintang
    },
    line_linked: {
      enable: true, // partikel bisa nyambung pake garis
      distance: 150,
      color: "#00f7ff", // garis juga neon biru
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.5, // kecepatan gerak
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" }, // partikel menjauh kalau mouse deket
      onclick: { enable: true, mode: "push" }, // kalau diklik, munculin partikel baru
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});

alert("hiiii selamat dsatang di portofolio ku!");



