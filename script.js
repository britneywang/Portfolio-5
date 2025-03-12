document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  const currentYearElements = document.querySelectorAll("#current-year")
  currentYearElements.forEach((element) => {
    element.textContent = new Date().getFullYear()
  })

  // Case studies data
  const caseStudies = [
    {
      title: "NSF REU: The University of Michigan-Flint",
      description:
        "How is computer-mediated consent in online to-person dating environments exchanged among aurally and visually disabled populations?",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      slug: "project1",
      skills: ["User Research"],
    },
    {
      title: "CAS251: Major Match",
      description: "How can students experience majors of interests prior to declaring a major?",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      slug: "project2",
      skills: ["Bilingual User Interviews", "Usability Testing", "Localization Strategy"],
    },
    {
      title: "Global Travel Platform Localization",
      description:
        "Successfully adapted the booking process for multiple markets, leading to a 25% increase in bookings from Chinese users",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      slug: "project3",
      skills: ["Contextual Inquiry", "Journey Mapping", "Competitive Analysis"],
    },
  ]

  // Render case studies on the home page
  const caseStudiesContainer = document.getElementById("case-studies")
  if (caseStudiesContainer) {
    caseStudies.forEach((study) => {
      const card = document.createElement("div")
      card.className = `rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 bg-${study.slug}`

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
      `

      caseStudiesContainer.appendChild(card)
    })
  }
})

