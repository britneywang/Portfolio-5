document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  const currentYearElements = document.querySelectorAll("#current-year")
  currentYearElements.forEach((element) => {
    element.textContent = new Date().getFullYear()
  })

  // Case studies data
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
      title: "Global Travel Platform Localization",
      description:
        "Successfully adapted the booking process for multiple markets, leading to a 25% increase in bookings from Chinese users",
      image: "img/thumbnails/proj-sprint1.png",
      slug: "project3",
      skills: ["Contextual Inquiry", "Journey Mapping", "Competitive Analysis"],
    },
    // {
    //   title: "Aire",
    //   description: "How can we help students studying abroad overcome the common challenges they face when planning solo or group trips to other destinations?",
    //   image: "img/thumbnails/proj-aire1.png",
    //   slug: "project4",
    //   skills: ["Design Thinking", "UX Research"],

    // }
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

