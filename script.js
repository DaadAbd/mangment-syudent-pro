const projects = [
    { title: "Project Alpha", supervisor: "Dr. Smith", type: "Semester Project", specialization: "AI", description: "Exploring applications of artificial intelligence in healthcare." },
    { title: "Project Beta", supervisor: "Dr. Lee", type: "First Graduation", specialization: "Web Development", description: "Building a responsive e-commerce website." },
    { title: "Project Gamma", supervisor: "Dr. John", type: "Second Graduation", specialization: "Cybersecurity", description: "Developing a secure authentication system." },
    { title: "Project Delta", supervisor: "Dr. Emily", type: "Semester Project", specialization: "Data Science", description: "Analyzing big data trends in social media." },
    { title: "Project Epsilon", supervisor: "Dr. Brown", type: "First Graduation", specialization: "Machine Learning", description: "Creating a predictive model for stock prices." },
    { title: "Project Zeta", supervisor: "Dr. Taylor", type: "Second Graduation", specialization: "Blockchain", description: "Implementing a decentralized voting system." },
    { title: "Project Eta", supervisor: "Dr. Wilson", type: "Semester Project", specialization: "Robotics", description: "Designing an autonomous delivery robot." },
    { title: "Project Theta", supervisor: "Dr. Davis", type: "First Graduation", specialization: "Augmented Reality", description: "Developing an AR-based educational tool." },
    { title: "Project Iota", supervisor: "Dr. Moore", type: "Second Graduation", specialization: "Networking", description: "Building a scalable IoT network for smart homes." },
    { title: "Project Kappa", supervisor: "Dr. Clark", type: "Semester Project", specialization: "Mobile Apps", description: "Creating a cross-platform fitness tracking app." },
    { title: "Project Lambda", supervisor: "Dr. Harris", type: "First Graduation", specialization: "Game Development", description: "Developing a 2D multiplayer game." },
    { title: "Project Mu", supervisor: "Dr. Lewis", type: "Second Graduation", specialization: "Bioinformatics", description: "Analyzing DNA sequences using machine learning." }
  ];
  
  // Load projects dynamically
  const projectGrid = document.getElementById("projects-grid");
  projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>Type: ${project.type}</p>
      <button onclick="showDetails(${index})">Details</button>
    `;
    projectGrid.appendChild(card);
  });
  
  // Show dropdown details
  function showDetails(index) {
    const project = projects[index];
    const dropdown = document.createElement("div");
    dropdown.className = "project-dropdown";
    dropdown.innerHTML = `
      <h2>${project.title}</h2>
      <p><strong>Supervisor:</strong> ${project.supervisor}</p>
      <p><strong>Type:</strong> ${project.type}</p>
      <p><strong>Specialization:</strong> ${project.specialization}</p>
      <p><strong>Description:</strong> ${project.description}</p>
      <button onclick="this.parentElement.remove()">Close</button>
      <button class="select-btn" onclick="selectProject(${index})">Select Project</button>
    `;
    document.body.appendChild(dropdown);
  }
  
  // Function to handle selecting a project
  function selectProject(index) {
    const project = projects[index];
    alert(`Project "${project.title}" selected!`);
    document.querySelector('.project-dropdown').remove();
  }
  
  // Show the proposal form modal
  function showProposalForm() {
    document.getElementById("proposal-modal").classList.remove("hidden");
  }
  
  // Close the proposal form modal
  function closeProposalForm() {
    document.getElementById("proposal-modal").classList.add("hidden");
  }
  
  // Handle form submission
  document.getElementById("proposal-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Proposal submitted successfully!");
    closeProposalForm();
  });
  