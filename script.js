// Mobile Navigation Toggle
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 80 // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Animate skill bars when they come into view
const animateSkillBars = () => {
  const skillBars = document.querySelectorAll(".skill-progress")

  skillBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0

    if (isVisible && !bar.classList.contains("animated")) {
      const width = bar.getAttribute("data-width")
      bar.style.width = width + "%"
      bar.classList.add("animated")
    }
  })
}

// Scroll animations
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".animate-on-scroll")

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight - 100

    if (isVisible) {
      element.classList.add("animated")
    }
  })
}

// Add scroll event listeners
window.addEventListener("scroll", () => {
  animateSkillBars()
  animateOnScroll()
})

// Initial check for elements already in view
document.addEventListener("DOMContentLoaded", () => {
  animateSkillBars()
  animateOnScroll()

  // Add animate-on-scroll class to elements
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    section.classList.add("animate-on-scroll")
  })
})

// Contact form handling
const contactForm = document.getElementById("contact-form")

contactForm.addEventListener("submit", function (e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(this)
  const formObject = {}
  formData.forEach((value, key) => {
    formObject[key] = value
  })

  // Simulate form submission
  const submitButton = this.querySelector('button[type="submit"]')
  const originalText = submitButton.textContent

  submitButton.textContent = "Enviando..."
  submitButton.disabled = true

  // Simulate API call
  setTimeout(() => {
    alert("¡Mensaje enviado correctamente! Te contactaré pronto.")
    this.reset()
    submitButton.textContent = originalText
    submitButton.disabled = false
  }, 2000)
})

// Add hover effects to project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })
})

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.95)"
  } else {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
  }
})

// Add typing effect to hero title (optional)
const typeWriter = (element, text, speed = 100) => {
  let i = 0
  element.innerHTML = ""

  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
    } else {
      clearInterval(timer)
    }
  }, speed)
}

// Uncomment to enable typing effect
// document.addEventListener('DOMContentLoaded', () => {
//     const heroTitle = document.querySelector('.hero-title');
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 80);
// });

// Parallax effect for background (optional)
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallax = document.querySelector(".background-pattern")
  const speed = scrolled * 0.5

  if (parallax) {
    parallax.style.transform = `translateY(${speed}px)`
  }
})

// Add intersection observer for better performance
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up")
    }
  })
}, observerOptions)

// Observe all sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    observer.observe(section)
  })
})
