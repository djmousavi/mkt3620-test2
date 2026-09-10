// Function to generate dynamic navigation across pages
document.addEventListener("DOMContentLoaded", function () {
  // Define site navigation links here
  const navItems = {
    primary: [
      { name: "Home", link: "index.html" },
      { name: "Education", link: "education.html" },
      { name: "Services", link: "services.html" },
      { name: "Contact", link: "contact.html" }
    ],
    secondary: [
      { name: "Announcements", link: "#" },
      { name: "Resources", link: "#" },
      { name: "Support", link: "#" }
    ],
    sidebar: [
      { name: "Dashboard", link: "#" },
      { name: "Profile", link: "#" },
      { name: "Settings", link: "#" },
      { name: "Help Center", link: "#" }
    ]
  };

  // Helper function to build <ul> HTML
  function buildNavList(items) {
    return `<ul>${items
      .map(item => `<li><a href="${item.link}">${item.name}</a></li>`)
      .join("")}</ul>`;
  }

  // Inject into containers if present
  const primaryNavContainer = document.getElementById("primary-nav-container");
  const secondaryNavContainer = document.getElementById("secondary-nav-container");
  const sidebarNavContainer = document.getElementById("sidebar-nav-container");

  if (primaryNavContainer) {
    primaryNavContainer.innerHTML = buildNavList(navItems.primary);
  }
  if (secondaryNavContainer) {
    secondaryNavContainer.innerHTML = buildNavList(navItems.secondary);
  }
  if (sidebarNavContainer) {
    sidebarNavContainer.innerHTML = buildNavList(navItems.sidebar);
  }
});
