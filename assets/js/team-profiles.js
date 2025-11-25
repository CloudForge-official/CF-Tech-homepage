// Team Profiles Module
// Handles dynamic rendering of team members, filtering, searching, and modal interactions

(function() {
  'use strict';

  // TEAM DATA - Replace with real data from backend
  const teamMembers = [
    {
      id: 1,
      name: 'Michael Chen',
      role: 'Senior Developer',
      bio: 'Full-stack developer specializing in modern web technologies.',
      image: 'assets/img/placeholder-avatar.jpg',
      department: 'Engineering',
      location: 'San Francisco, CA',
      email: 'michael.chen@company.com',
      phone: '+1-555-0101',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com'
      },
      achievements: [
        { title: 'Led API Modernization', description: 'Migrated legacy APIs to modern architecture' },
        { title: 'Performance Optimization', description: 'Improved app performance by 40%' }
      ]
    },
    {
      id: 2,
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      bio: 'Creating intuitive and beautiful user experiences.',
      image: 'assets/img/placeholder-avatar.jpg',
      department: 'Design',
      location: 'New York, NY',
      email: 'emily.rodriguez@company.com',
      phone: '+1-555-0102',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com'
      },
      achievements: [
        { title: 'Design System Creation', description: 'Built comprehensive design system' },
        { title: 'User Research Lead', description: 'Conducted 50+ user interviews' }
      ]
    },
    {
      id: 3,
      name: 'David Kim',
      role: 'Product Manager',
      bio: 'Bridging the gap between users and technical teams.',
      image: 'assets/img/placeholder-avatar.jpg',
      department: 'Product',
      location: 'Austin, TX',
      email: 'david.kim@company.com',
      phone: '+1-555-0103',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com'
      },
      achievements: [
        { title: 'Product Launch Success', description: 'Launched 3 major products' },
        { title: 'Revenue Growth', description: 'Increased revenue by 25%' }
      ]
    },
    {
      id: 4,
      name: 'Lisa Anderson',
      role: 'Marketing Lead',
      bio: 'Crafting compelling stories and building brand awareness.',
      image: 'assets/img/placeholder-avatar.jpg',
      department: 'Marketing',
      location: 'Seattle, WA',
      email: 'lisa.anderson@company.com',
      phone: '+1-555-0104',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com'
      },
      achievements: [
        { title: 'Brand Campaign', description: 'Won industry award for campaign' },
        { title: 'Social Growth', description: 'Grew followers by 150%' }
      ]
    },
    {
      id: 5,
      name: 'James Wilson',
      role: 'DevOps Engineer',
      bio: 'Ensuring smooth deployments and reliable infrastructure.',
      image: 'assets/img/placeholder-avatar.jpg',
      department: 'Engineering',
      location: 'San Francisco, CA',
      email: 'james.wilson@company.com',
      phone: '+1-555-0105',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com'
      },
      achievements: [
        { title: 'Infrastructure Upgrade', description: 'Improved uptime to 99.99%' },
        { title: 'Cost Optimization', description: 'Reduced cloud costs by 30%' }
      ]
    },
    {
      id: 6,
      name: 'Maria Garcia',
      role: 'Data Analyst',
      bio: 'Turning data into actionable insights and strategies.',
      image: 'assets/img/placeholder-avatar.jpg',
      department: 'Analytics',
      location: 'Austin, TX',
      email: 'maria.garcia@company.com',
      phone: '+1-555-0106',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com'
      },
      achievements: [
        { title: 'Analytics Platform', description: 'Built real-time analytics dashboard' },
        { title: 'Data Insights', description: 'Identified key business opportunities' }
      ]
    },
    {
      id: 7,
      name: 'Alex Thompson',
      role: 'Frontend Developer',
      bio: 'Building responsive and accessible web interfaces.',
      image: 'assets/img/placeholder-avatar.jpg',
      department: 'Engineering',
      location: 'New York, NY',
      email: 'alex.thompson@company.com',
      phone: '+1-555-0107',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com'
      },
      achievements: [
        { title: 'Accessibility Initiative', description: 'Achieved WCAG 2.1 AAA compliance' },
        { title: 'Performance', description: 'Optimized bundle size by 50%' }
      ]
    },
    {
      id: 8,
      name: 'Rachel Lee',
      role: 'QA Engineer',
      bio: 'Ensuring quality and reliability in every release.',
      image: 'assets/img/placeholder-avatar.jpg',
      department: 'Quality',
      location: 'Seattle, WA',
      email: 'rachel.lee@company.com',
      phone: '+1-555-0108',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com'
      },
      achievements: [
        { title: 'Test Automation', description: 'Achieved 85% test coverage' },
        { title: 'Bug Reduction', description: 'Reduced production bugs by 60%' }
      ]
    }
  ];

  // Initialize team profiles
  function init() {
    const container = document.getElementById('team-members-container');
    if (!container) return;

    setupFilters();
    renderTeamMembers(teamMembers);
    setupModalHandlers();
  }

  // Render team member cards
  function renderTeamMembers(members) {
    const container = document.getElementById('team-members-container');
    if (!container) return;

    if (members.length === 0) {
      container.innerHTML = '<div class="empty-state"><p>No team members found matching your filters.</p></div>';
      return;
    }

    container.innerHTML = members.map(member => `
      <article class="card profile-card team-member-card" data-member-id="${member.id}" tabindex="0" role="button">
        <img src="${member.image}" alt="${member.name}" loading="lazy">
        <h5 class="profile-name">${member.name}</h5>
        <p class="profile-role">${member.role}</p>
        <p class="profile-bio">${member.bio}</p>
        <div class="profile-meta">
          <span class="profile-badge" data-department="${member.department}">${member.department}</span>
          <span class="profile-badge" data-location="${member.location}">${member.location}</span>
        </div>
      </article>
    `).join('');

    // Add click handlers for cards
    container.querySelectorAll('.team-member-card').forEach(card => {
      card.addEventListener('click', () => openMemberModal(getMemberById(parseInt(card.dataset.memberId))));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openMemberModal(getMemberById(parseInt(card.dataset.memberId)));
        }
      });
    });
  }

  // Setup filter controls
  function setupFilters() {
    const departmentFilter = document.getElementById('department-filter');
    const locationFilter = document.getElementById('location-filter');
    const searchInput = document.getElementById('search-input');
    const resetBtn = document.getElementById('reset-filters-btn');

    if (departmentFilter) {
      departmentFilter.addEventListener('change', applyFilters);
    }

    if (locationFilter) {
      locationFilter.addEventListener('change', applyFilters);
    }

    if (searchInput) {
      searchInput.addEventListener('input', applyFilters);
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', resetFilters);
    }

    // Populate filter options
    populateFilterOptions();
  }

  // Populate filter dropdowns
  function populateFilterOptions() {
    const departments = [...new Set(teamMembers.map(m => m.department))].sort();
    const locations = [...new Set(teamMembers.map(m => m.location))].sort();

    const departmentFilter = document.getElementById('department-filter');
    const locationFilter = document.getElementById('location-filter');

    if (departmentFilter) {
      departmentFilter.innerHTML = '<option value="">All Departments</option>' +
        departments.map(dept => `<option value="${dept}">${dept}</option>`).join('');
    }

    if (locationFilter) {
      locationFilter.innerHTML = '<option value="">All Locations</option>' +
        locations.map(loc => `<option value="${loc}">${loc}</option>`).join('');
    }
  }

  // Apply filters
  function applyFilters() {
    const departmentFilter = document.getElementById('department-filter');
    const locationFilter = document.getElementById('location-filter');
    const searchInput = document.getElementById('search-input');

    const department = departmentFilter?.value || '';
    const location = locationFilter?.value || '';
    const searchTerm = searchInput?.value.toLowerCase() || '';

    const filtered = teamMembers.filter(member => {
      const matchesDept = !department || member.department === department;
      const matchesLoc = !location || member.location === location;
      const matchesSearch = !searchTerm ||
        member.name.toLowerCase().includes(searchTerm) ||
        member.role.toLowerCase().includes(searchTerm) ||
        member.bio.toLowerCase().includes(searchTerm);

      return matchesDept && matchesLoc && matchesSearch;
    });

    renderTeamMembers(filtered);
  }

  // Reset all filters
  function resetFilters() {
    const departmentFilter = document.getElementById('department-filter');
    const locationFilter = document.getElementById('location-filter');
    const searchInput = document.getElementById('search-input');

    if (departmentFilter) departmentFilter.value = '';
    if (locationFilter) locationFilter.value = '';
    if (searchInput) searchInput.value = '';

    renderTeamMembers(teamMembers);
  }

  // Get member by ID
  function getMemberById(id) {
    return teamMembers.find(m => m.id === id);
  }

  // Open member modal
  function openMemberModal(member) {
    if (!member) return;

    const modal = document.getElementById('member-modal');
    if (!modal) return;

    // Update modal content
    document.getElementById('modal-member-image').src = member.image;
    document.getElementById('modal-member-image').alt = member.name;
    document.getElementById('modal-member-name').textContent = member.name;
    document.getElementById('modal-member-role').textContent = member.role;
    document.getElementById('modal-member-email').href = `mailto:${member.email}`;
    document.getElementById('modal-member-email').textContent = member.email;
    document.getElementById('modal-member-phone').href = `tel:${member.phone}`;
    document.getElementById('modal-member-phone').textContent = member.phone;
    document.getElementById('modal-member-bio').textContent = member.bio;

    // Update department and location badges
    const badgesContainer = document.getElementById('modal-member-badges');
    badgesContainer.innerHTML = `
      <span class="profile-badge" data-department="${member.department}">${member.department}</span>
      <span class="profile-badge" data-location="${member.location}">${member.location}</span>
    `;

    // Update social links
    const socialContainer = document.getElementById('modal-member-social');
    if (member.social) {
      socialContainer.innerHTML = Object.entries(member.social)
        .map(([platform, url]) => `
          <a href="${url}" class="social-link" aria-label="${platform}" target="_blank" rel="noopener noreferrer">
            <span>${platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
          </a>
        `).join('');
    }

    // Update achievements carousel
    updateAchievementsCarousel(member.achievements);

    // Show modal
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    trapFocus(modal);
  }

  // Close member modal
  function closeMemberModal() {
    const modal = document.getElementById('member-modal');
    if (!modal) return;

    modal.setAttribute('aria-hidden', 'true');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    restoreFocus();
  }

  // Update achievements carousel
  function updateAchievementsCarousel(achievements) {
    const carousel = document.getElementById('achievements-carousel');
    const dotsContainer = document.getElementById('carousel-dots');

    if (!carousel || !achievements || achievements.length === 0) {
      if (carousel) carousel.innerHTML = '<p>No achievements to display.</p>';
      if (dotsContainer) dotsContainer.innerHTML = '';
      return;
    }

    carousel.innerHTML = achievements.map((achievement, index) => `
      <div class="carousel-item${index === 0 ? ' active' : ''}" role="tabpanel" aria-label="Achievement ${index + 1}">
        <h4>${achievement.title}</h4>
        <p>${achievement.description}</p>
      </div>
    `).join('');

    dotsContainer.innerHTML = achievements.map((_, index) => `
      <button class="carousel-dot${index === 0 ? ' active' : ''}" aria-label="Go to achievement ${index + 1}" data-index="${index}"></button>
    `).join('');

    // Add dot click handlers
    dotsContainer.querySelectorAll('.carousel-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.dataset.index);
        goToCarouselSlide(index);
      });
    });
  }

  // Go to carousel slide
  function goToCarouselSlide(index) {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-dot');

    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    if (items[index]) {
      items[index].classList.add('active');
    }
    if (dots[index]) {
      dots[index].classList.add('active');
    }
  }

  // Focus trapping in modal
  let previousActiveElement = null;

  function trapFocus(modal) {
    previousActiveElement = document.activeElement;

    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (firstElement) {
      firstElement.focus();
    }

    modal.addEventListener('keydown', handleModalKeydown);

    function handleModalKeydown(e) {
      if (e.key === 'Escape') {
        closeMemberModal();
        return;
      }

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    }
  }

  // Restore focus to previous element
  function restoreFocus() {
    const modal = document.getElementById('member-modal');
    if (modal) {
      modal.removeEventListener('keydown', handleModalKeydown);
    }
    if (previousActiveElement && previousActiveElement.focus) {
      previousActiveElement.focus();
    }
  }

  // Setup modal close handlers
  function setupModalHandlers() {
    const modal = document.getElementById('member-modal');
    const closeBtn = document.getElementById('modal-close-btn');

    if (closeBtn) {
      closeBtn.addEventListener('click', closeMemberModal);
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeMemberModal();
        }
      });
    }
  }

  // Initialize when DOM is ready
  function initOnReady() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }

  // Run initialization
  initOnReady();

  // Export for external use
  window.TeamProfiles = {
    init: init,
    renderTeamMembers: renderTeamMembers,
    applyFilters: applyFilters,
    resetFilters: resetFilters
  };
})();
