document.addEventListener("DOMContentLoaded", () => {
    const caseStudies = [
      {
        title: "Cross-Cultural E-commerce UX",
        description: "Increased international user engagement by 40% through culturally adaptive design",
        challenge: "Adapting an e-commerce platform for both Western and Eastern markets",
        outcome: "40% increase in international user engagement",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        slug: "project1",
        skills: ["User Interviews", "A/B Testing", "Localization Strategy"],
      },
      {
        title: "Bilingual Mobile Banking App",
        description:
          "Improved usability for both English and Chinese users, resulting in a 30% increase in daily active users",
        challenge: "Creating a seamless bilingual experience for a diverse user base",
        outcome: "30% increase in daily active users",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        slug: "project2",
        skills: ["Bilingual User Interviews", "Usability Testing", "Localization Strategy"],
      },
      {
        title: "Global Travel Platform Localization",
        description:
          "Successfully adapted the booking process for multiple markets, leading to a 25% increase in bookings from Chinese users",
        challenge: "Localizing a travel booking platform for the Chinese market",
        outcome: "25% increase in bookings from Chinese users",
        image:
          "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        slug: "project3",
        skills: ["Contextual Inquiry", "Journey Mapping", "Competitive Analysis"],
      },
    ];
  
    const caseStudiesContainer = document.getElementById("case-studies");
  
    if (caseStudiesContainer) {
      caseStudies.forEach((study) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <a href="${study.slug}.html">
              <img src="${study.image}" alt="${study.title}" class="card-image">
              <div class="card-content">
                  <h3 class="card-title">${study.title}</h3>
                  <p class="card-description">${study.description}</p>
                  <div class="skill-tags">
                      ${study.skills.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
                  </div>
              </div>
          </a>
        `;
        caseStudiesContainer.appendChild(card);
      });
    }
  
    // Skills for the About page
    const skills = [
      {
        name: "Bilingual User Interviews",
        description: "Conduct interviews in English and Mandarin to gather deep user insights across cultures.",
      },
      {
        name: "Cross-Cultural Usability Testing",
        description: "Design and execute usability tests that account for cultural differences in user behavior.",
      },
      {
        name: "Localization Strategy",
        description:
          "Develop strategies to adapt products for specific cultural markets while maintaining core functionality.",
      },
      {
        name: "International Persona Creation",
        description: "Create user personas that accurately represent diverse international user bases.",
      },
      {
        name: "Cultural Journey Mapping",
        description: "Map user journeys with consideration for cultural touchpoints and expectations.",
      },
      {
        name: "Multilingual A/B Testing",
        description: "Design and analyze A/B tests across multiple languages to optimize user experiences.",
      },
    ];
  
    const skillsContainer = document.getElementById("skills-container");
    const skillDescription = document.getElementById("skill-description");
  
    if (skillsContainer && skillDescription) {
      skills.forEach((skill) => {
        const badge = document.createElement("button");
        badge.className = "btn btn-outline text-sm py-2 px-4 cursor-pointer transition-colors";
        badge.textContent = skill.name;
        badge.addEventListener("click", () => {
          const isActive = badge.classList.contains("bg-primary");
          document.querySelectorAll("#skills-container button").forEach((btn) => {
            btn.classList.remove("bg-primary", "text-primary-foreground");
          });
          if (!isActive) {
            badge.classList.add("bg-primary", "text-primary-foreground");
            skillDescription.classList.remove("hidden");
            skillDescription.querySelector("p").textContent = skill.description;
          } else {
            skillDescription.classList.add("hidden");
          }
        });
        skillsContainer.appendChild(badge);
      });
    }
  });