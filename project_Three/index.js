document.addEventListener("DOMContentLoaded", () => {
    // Select all sections and navigation links
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navright a");

    // Initially show only the Home section
    sections.forEach((section) => {
        section.style.display = section.id === "Home" ? "block" : "none";
    });

    // Add click event to each navigation link
    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const targetSection = document.querySelector(link.getAttribute("href"));

            // Hide all sections except the selected one
            sections.forEach((section) => {
                section.style.display = "none";
            });
            targetSection.style.display = "block";

            // Update active link style
            navLinks.forEach((nav) => nav.classList.remove("active"));
            link.classList.add("active");
        });
    });
});
