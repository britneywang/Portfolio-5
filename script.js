document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  const currentYearElements = document.querySelectorAll("#current-year");
  currentYearElements.forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  // Toggle functionality for accordion sections
  const toggles = document.querySelectorAll('.section-toggle');
  toggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const sectionId = this.getAttribute('data-section');
      const content = document.getElementById(sectionId);
      
      // Toggle active class on the toggle button
      this.classList.toggle('active');
      
      // Toggle active class on the content
      content.classList.toggle('active');
    });
  });
  
  // Sidebar navigation functionality
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebarNav = document.getElementById('sidebar-nav');
  const sidebarLinks = document.querySelectorAll('.sidebar-nav-link');
  
  // Toggle sidebar on mobile
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
      if (sidebarNav.style.display === 'block') {
        sidebarNav.style.display = 'none';
      } else {
        sidebarNav.style.display = 'block';
      }
    });
  }
  
  // Smooth scrolling for sidebar links
  if (sidebarLinks.length > 0) {
    sidebarLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the target section
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          // Scroll to the section
          window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Hide sidebar on mobile after clicking
          if (window.innerWidth < 1200) {
            sidebarNav.style.display = 'none';
          }
          
          // Update active link
          sidebarLinks.forEach(link => link.classList.remove('active'));
          this.classList.add('active');
        }
      });
    });
  }
  
  // Update active link on scroll
  if (sidebarLinks.length > 0) {
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      
      // Find the current section
      document.querySelectorAll('section[id], div[id]').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Update active link
          sidebarLinks.forEach(link => {
            if (link.getAttribute('href') === `#${sectionId}` || 
                link.getAttribute('data-section') === sectionId) {
              link.classList.add('active');
            } else if (
              // Special handling for involvement and awards sections
              (sectionId === 'involvement' || sectionId === 'awards') && 
              (link.getAttribute('href') === '#involvement' || link.getAttribute('href') === '#awards')
            ) {
              // Keep both links active when either section is in view
              if (document.querySelector('.involvement-awards-section') && 
                  document.querySelector('.involvement-awards-section').contains(section)) {
                link.classList.add('active');
              }
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    });
  }

  // Case studies data for the home page
  const caseStudiesContainer = document.getElementById("case-studies");
  if (caseStudiesContainer) {
    const caseStudies = [
      {
        title: "The University of Michigan-Flint",
        description:
          "How is computer-mediated consent in online to-person dating settings exchanged among aurally and visually disabled populations?",
        image: "img/thumbnails/proj-umich1.png",
        slug: "project1",
        skills: ["User Research"],
      },
      {
        title: "Major Match",
        description: "How can students effectively explore and experience potential majors before making the critical decision to declare?",
        image: "img/thumbnails/proj-majorMatch2.png",
        slug: "project2",
        skills: ["Design Thinking", "Lean Startup", "User Research"],
      },
      {
        title: "Task Prioritization",
        description:
          "",
        image: "img/thumbnails/proj-sprint1.png",
        slug: "project3",
        skills: [""],
      }
    ];

    caseStudies.forEach((study) => {
      const card = document.createElement("div");
      card.className = `rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 bg-${study.slug}`;

      card.innerHTML = `
        <a href="${study.slug}.html">
          <div class="relative">
            <img src="${study.image}" alt="${study.title}" class="card-image">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 text-card-foreground">${study.title}</h3>
            <p class="text-muted-foreground mb-4">${study.description}</p>
            <div class="flex flex-wrap gap-2">
              ${study.skills
                .map(
                  (skill) => `
                <span class="skill-tag">${skill}</span>
              `,
                )
                .join("")}
            </div>
          </div>
        </a>
      `;

      caseStudiesContainer.appendChild(card);
    });
  }
});