import React, { useState } from "react";

const Slider: React.FC = () => {
  const slides = [
    {
      image:
        "https://img.freepik.com/premium-photo/portrait-young-woman-standing-against-yellow-background_1048944-15484848.jpg?w=1380&h=800",
      text: "Slide 1: Welcome to the slider!",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/beautiful-young-woman-holding-laptop-drinking-coffee_164357-4317.jpg?w=1380&h=800",
      text: "Slide 2: Enjoy the experience!",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/portrait-young-woman-standing-against-yellow-background_1048944-25779674.jpg?w=1380&h=800",
      text: "Slide 3: Give your suggestions!",
    },
    {
      image:
        "https://img.freepik.com/free-photo/waistup-shot-carefree-cheerful-friendly-redhead-gorgeous-female-freelancer-finished-it-school_1258-309943.jpg?w=1380&h=800",
      text: "Slide 4: Thank you for visiting!",
    },
  ];

  React.useEffect(() => {
    const images = document.querySelectorAll("img");
    const interval = setInterval(() => {
      images.forEach((img) => {
        if (img.src.includes("w=1380")) {
          img.style.transition = "opacity 0.5s ease-in-out";
          img.style.opacity = "0";
        }
      });
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        images.forEach((img) => {
          if (img.src.includes("w=1380")) {
            img.style.opacity = "1";
          }
        });
      }, 500);
    }, 2000);

    // Adjust the image styles for the specific condition
    images.forEach((img) => {
      if (img.src.includes("w=1380")) {
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
      }
    });

    return () => clearInterval(interval);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    };

  return (
    <div className="relative w-full max-w-10xl mx-auto mt-10 overflow-hidden rounded-lg shadow-lg">
      <div className="relative">
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-auto object-cover"
        />
        <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-3 text-lg">
          {slides[currentIndex].text}
        </p>
      </div>
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-black px-3 py-1 rounded-full shadow-md"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-black px-3 py-1 rounded-full shadow-md"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
