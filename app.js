// Application Data
const projectsData = {
  'lake-restoration': {
    title: 'AI-Driven Lake Restoration',
    category: 'Research',
    description: 'Predictive modeling for Sukhna Lake restoration using satellite data and AI techniques.',
    fullDescription: `This groundbreaking research project focuses on developing an AI-driven predictive model for lake restoration, specifically targeting Sukhna Lake in Chandigarh. The project combines advanced machine learning algorithms with satellite data analysis to create a comprehensive restoration framework.

    Key Features:
    • Integration of Landsat-7 ETM+ and ASTER satellite data for multi-temporal analysis
    • Development of water quality parameter prediction models using machine learning
    • Spatial-temporal analysis of lake ecosystem changes over the past decade
    • Predictive modeling for optimal restoration intervention timing
    • Cost-benefit analysis framework for restoration strategies

    Technical Implementation:
    The project utilizes Python-based machine learning libraries including scikit-learn, TensorFlow, and specialized remote sensing tools. The model processes multispectral satellite imagery to identify patterns in water quality degradation and predicts the effectiveness of various restoration interventions.

    Impact and Results:
    This research was presented at the Conference on Information Systems and Smart Cities (CISSC) 2025, where it received recognition for its innovative approach to environmental restoration. The model successfully predicted water quality improvements with 87% accuracy and provided actionable insights for policy makers.`,
    technologies: ['Python', 'Machine Learning', 'Remote Sensing', 'GIS', 'TensorFlow', 'Scikit-learn'],
    metrics: ['Presented at CISSC 2025', '87% Prediction Accuracy', 'Published Research'],
    githubLink: 'https://github.com/ayushChauhan485/lake-restoration-ai',
    status: 'Published Research'
  },
  'accident-prediction': {
    title: 'Accident Severity Prediction Model',
    category: 'Data Science',
    description: 'Machine learning model achieving 95.02% accuracy in predicting road accident severity.',
    fullDescription: `This comprehensive data science project develops a highly accurate machine learning model for predicting road accident severity using advanced ensemble methods and big data processing techniques.

    Project Overview:
    The model processes over 20,000 traffic accident records to identify patterns and predict accident severity levels. Using RandomForest algorithm optimized with Dask for distributed computing, the system achieves unprecedented accuracy in severity prediction.

    Key Features:
    • Processing of 20,000+ accident records with 25+ feature variables
    • Implementation of RandomForest with hyperparameter optimization
    • Distributed computing using Dask for faster processing
    • Feature engineering including weather, road conditions, and temporal factors
    • Real-time prediction capability for traffic management systems

    Technical Architecture:
    Built using Python ecosystem with Pandas for data manipulation, Dask for distributed computing, and scikit-learn for machine learning. The model incorporates weather data, road geometry, traffic volume, and historical accident data to make predictions.

    Performance Metrics:
    • 95.02% accuracy in severity prediction
    • 25% reduction in processing time compared to traditional methods
    • 92% precision and 94% recall for severe accident prediction
    • Real-time processing capability (< 100ms response time)

    Applications:
    The model has practical applications in emergency response planning, traffic management, and infrastructure safety assessment. It can help authorities allocate resources more effectively and implement preventive measures in high-risk areas.`,
    technologies: ['Python', 'RandomForest', 'Dask', 'Pandas', 'Scikit-learn', 'NumPy'],
    metrics: ['95.02% Accuracy', '25% Faster Processing', '20,000+ Records Processed'],
    githubLink: 'https://github.com/ayushChauhan485/accident-prediction-ml',
    status: 'Completed'
  },
  'bicycle-mobility': {
    title: 'Gender Differences in Bicycle Mobility',
    category: 'Research',
    description: 'AI model analyzing cycling patterns and gender-specific constraints in urban areas.',
    fullDescription: `This pioneering research investigates gender differences in bicycle mobility patterns using advanced AI modeling and comprehensive survey data from Chandigarh, India.

    Research Objective:
    To understand and quantify gender-based differences in cycling behavior, identify constraints faced by different genders, and provide data-driven recommendations for inclusive cycling infrastructure development.

    Methodology:
    The study employed a mixed-methods approach combining:
    • Large-scale survey of 1,801 cyclists across Chandigarh
    • AI-powered pattern recognition for mobility behavior analysis
    • Statistical modeling of cycling frequency, route preferences, and safety concerns
    • Machine learning clustering to identify distinct mobility patterns

    Key Findings:
    • Identified 5 distinct cycling behavior clusters with significant gender variations
    • Women cyclists show 40% higher safety concerns affecting route choices
    • Time-of-day preferences vary significantly between genders
    • Infrastructure preferences differ markedly, with women preferring separated bike lanes

    Technical Implementation:
    The analysis utilized Python for statistical computing, machine learning libraries for pattern recognition, and GIS tools for spatial analysis of cycling routes and infrastructure usage.

    Impact and Recognition:
    This research has been published in a Springer journal and has influenced cycling infrastructure policy discussions in several Indian cities. The findings provide evidence-based recommendations for gender-inclusive transportation planning.

    Policy Implications:
    The research provides actionable insights for urban planners and policymakers to design more inclusive cycling infrastructure that addresses gender-specific mobility needs and constraints.`,
    technologies: ['Python', 'Machine Learning', 'Statistical Analysis', 'GIS', 'Survey Research'],
    metrics: ['1,801 Cyclists Surveyed', 'Springer Publication', '5 Behavior Clusters Identified'],
    liveLink: 'https://link.springer.com/chapter/bicycle-mobility-gender',
    status: 'Published'
  }
};

const blogData = {
  'smart-infrastructure': {
    title: 'The Future of Smart Infrastructure',
    category: 'Technology',
    author: 'Ayush Chauhan',
    date: 'December 15, 2024',
    readTime: '5 min read',
    content: `
    <h2>Introduction</h2>
    <p>The convergence of artificial intelligence, Internet of Things (IoT), and traditional infrastructure is creating unprecedented opportunities for building smarter, more sustainable cities. As we stand at the threshold of a new era in urban development, it's crucial to understand how these technologies are reshaping the infrastructure landscape.</p>

    <h2>The Current State of Infrastructure</h2>
    <p>Traditional infrastructure systems were designed for a different era—one where data was scarce, connectivity was limited, and sustainability was an afterthought. Today's challenges demand a fundamental reimagining of how we design, build, and maintain our urban systems.</p>

    <p>Current infrastructure faces several critical challenges:</p>
    <ul>
      <li>Aging systems requiring constant maintenance and eventual replacement</li>
      <li>Inefficient resource utilization leading to waste and environmental degradation</li>
      <li>Limited adaptability to changing urban demands and climate conditions</li>
      <li>Reactive rather than predictive maintenance approaches</li>
    </ul>

    <h2>The Smart Infrastructure Revolution</h2>
    <p>Smart infrastructure represents a paradigm shift from reactive to predictive, from isolated to interconnected, and from resource-intensive to sustainable. By embedding sensors, connectivity, and intelligence into physical infrastructure, we create systems that can monitor themselves, optimize performance in real-time, and adapt to changing conditions.</p>

    <h3>Key Technologies Driving Change</h3>
    <p><strong>Artificial Intelligence and Machine Learning:</strong> These technologies enable infrastructure systems to learn from data, predict failures before they occur, and optimize operations automatically. For example, AI can analyze traffic patterns to optimize signal timing, reducing congestion and emissions.</p>

    <p><strong>IoT Sensors and Connectivity:</strong> Millions of sensors embedded in infrastructure collect real-time data on everything from structural health to environmental conditions. This data forms the foundation for intelligent decision-making.</p>

    <p><strong>Digital Twins:</strong> Virtual replicas of physical infrastructure allow engineers to simulate scenarios, test improvements, and optimize maintenance schedules without disrupting actual operations.</p>

    <h2>Real-World Applications</h2>
    <p>Smart infrastructure is already transforming cities around the world. In Singapore, smart water management systems use AI to predict and prevent pipe bursts, reducing water loss by 25%. Barcelona's smart street lighting adjusts brightness based on pedestrian and vehicle traffic, cutting energy consumption by 30%.</p>

    <h2>Challenges and Considerations</h2>
    <p>While the potential is enormous, implementing smart infrastructure faces several challenges:</p>
    <ul>
      <li><strong>Cybersecurity:</strong> Connected systems create new vulnerabilities that must be addressed</li>
      <li><strong>Interoperability:</strong> Different systems and vendors must work together seamlessly</li>
      <li><strong>Privacy:</strong> Balancing data collection benefits with citizen privacy rights</li>
      <li><strong>Investment:</strong> Significant upfront costs require long-term planning and commitment</li>
    </ul>

    <h2>The Road Ahead</h2>
    <p>The future of smart infrastructure lies in creating truly integrated, adaptive systems that serve citizens better while using resources more efficiently. This requires collaboration between engineers, data scientists, policymakers, and communities.</p>

    <p>As we move forward, the focus should be on:</p>
    <ul>
      <li>Developing standards for interoperability and data sharing</li>
      <li>Investing in cybersecurity and privacy protection</li>
      <li>Training the next generation of infrastructure professionals</li>
      <li>Ensuring equitable access to smart infrastructure benefits</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Smart infrastructure represents more than just a technological upgrade—it's a fundamental reimagining of how we build and maintain the systems that support modern life. By embracing these technologies thoughtfully and responsibly, we can create infrastructure that is not only more efficient and sustainable but also more responsive to the needs of the communities it serves.</p>

    <p>The future is smart, connected, and sustainable. The question is not whether we'll adopt these technologies, but how quickly and effectively we can implement them to create better cities for everyone.</p>
    `
  },
  'ml-transportation': {
    title: 'Machine Learning in Transportation Engineering',
    category: 'Research',
    author: 'Ayush Chauhan',
    date: 'November 28, 2024',
    readTime: '7 min read',
    content: `
    <h2>Introduction</h2>
    <p>Transportation engineering is experiencing a revolutionary transformation through the integration of machine learning technologies. From traffic optimization to predictive maintenance, ML algorithms are solving complex transportation challenges that were previously impossible to address effectively.</p>

    <h2>Traditional Challenges in Transportation</h2>
    <p>Transportation systems face numerous challenges that traditional engineering approaches struggle to address comprehensively:</p>
    <ul>
      <li>Traffic congestion and inefficient signal timing</li>
      <li>Unpredictable maintenance needs leading to costly failures</li>
      <li>Suboptimal route planning and resource allocation</li>
      <li>Limited ability to predict and respond to changing demand patterns</li>
    </ul>

    <h2>Machine Learning Applications</h2>

    <h3>Traffic Flow Optimization</h3>
    <p>Machine learning algorithms can analyze vast amounts of traffic data to optimize signal timing, predict congestion, and suggest alternative routes. Deep learning models process real-time traffic camera feeds, GPS data, and historical patterns to make intelligent decisions about traffic management.</p>

    <h3>Predictive Maintenance</h3>
    <p>ML models can predict when infrastructure components are likely to fail, allowing for proactive maintenance that reduces costs and prevents service disruptions. By analyzing sensor data from bridges, roads, and transit vehicles, these systems can identify patterns that precede failures.</p>

    <h3>Demand Forecasting</h3>
    <p>Transportation planners use machine learning to predict ridership, traffic volumes, and infrastructure usage patterns. This enables better resource allocation and long-term planning decisions.</p>

    <h2>Case Studies</h2>

    <h3>Smart Traffic Management in Urban Areas</h3>
    <p>A recent project in Chandigarh implemented ML-based traffic optimization, resulting in a 20% reduction in average travel times and 15% decrease in fuel consumption. The system continuously learns from traffic patterns and adjusts signal timing accordingly.</p>

    <h3>Predictive Maintenance for Bridge Infrastructure</h3>
    <p>Using sensor data and machine learning, engineers can now predict bridge maintenance needs with 85% accuracy, reducing emergency repairs by 40% and extending infrastructure lifespan.</p>

    <h2>Implementation Challenges</h2>
    <p>While the potential is enormous, implementing ML in transportation faces several challenges:</p>
    <ul>
      <li><strong>Data Quality:</strong> ML models require high-quality, consistent data</li>
      <li><strong>Integration:</strong> Connecting ML systems with existing infrastructure</li>
      <li><strong>Scalability:</strong> Ensuring solutions work across different scales and contexts</li>
      <li><strong>Interpretability:</strong> Understanding how ML models make decisions</li>
    </ul>

    <h2>Future Directions</h2>
    <p>The future of ML in transportation engineering includes:</p>
    <ul>
      <li>Autonomous vehicle integration with infrastructure systems</li>
      <li>Real-time adaptive traffic management</li>
      <li>Predictive safety systems that prevent accidents</li>
      <li>Sustainable transportation optimization</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Machine learning is transforming transportation engineering from reactive to predictive, from static to adaptive. As these technologies mature, we can expect even more sophisticated applications that will make transportation safer, more efficient, and more sustainable.</p>
    `
  },
  'sustainable-planning': {
    title: 'Sustainable Urban Planning with Data Science',
    category: 'Engineering',
    author: 'Ayush Chauhan',
    date: 'October 20, 2024',
    readTime: '6 min read',
    content: `
    <h2>Introduction</h2>
    <p>The intersection of data science and urban planning is creating new possibilities for sustainable city development. By leveraging big data, machine learning, and advanced analytics, planners can make more informed decisions that balance economic growth with environmental sustainability.</p>

    <h2>The Data-Driven Planning Revolution</h2>
    <p>Traditional urban planning relied heavily on surveys, census data, and expert judgment. While these remain important, data science adds new dimensions of understanding through:</p>
    <ul>
      <li>Real-time data from IoT sensors and mobile devices</li>
      <li>Satellite imagery analysis for land use monitoring</li>
      <li>Social media and mobility data for understanding citizen behavior</li>
      <li>Predictive modeling for future scenarios</li>
    </ul>

    <h2>Key Applications</h2>

    <h3>Environmental Impact Assessment</h3>
    <p>Data science enables more accurate and comprehensive environmental impact assessments. Machine learning models can predict air quality, noise levels, and urban heat island effects based on proposed development patterns.</p>

    <h3>Transportation and Mobility</h3>
    <p>GPS tracking data and transit usage patterns help planners design more efficient transportation networks. Data analysis reveals hidden mobility patterns and helps identify areas where sustainable transportation options are most needed.</p>

    <h3>Energy Planning</h3>
    <p>Smart grid data and building energy consumption patterns inform sustainable energy planning. Machine learning can predict energy demand and optimize renewable energy integration.</p>

    <h2>Tools and Technologies</h2>
    <p>Modern sustainable planning leverages various data science tools:</p>
    <ul>
      <li><strong>GIS and Remote Sensing:</strong> For spatial analysis and land use monitoring</li>
      <li><strong>Machine Learning:</strong> For pattern recognition and prediction</li>
      <li><strong>Big Data Analytics:</strong> For processing large datasets from multiple sources</li>
      <li><strong>Simulation and Modeling:</strong> For testing planning scenarios</li>
    </ul>

    <h2>Case Study: Sustainable Development in Chandigarh</h2>
    <p>A recent project used data science to analyze urban sprawl patterns in Chandigarh and recommend sustainable development strategies. The analysis included:</p>
    <ul>
      <li>Satellite imagery analysis to track land use changes over 20 years</li>
      <li>Traffic flow analysis to identify congestion hotspots</li>
      <li>Air quality modeling to predict pollution patterns</li>
      <li>Economic impact assessment of different development scenarios</li>
    </ul>

    <h2>Challenges and Limitations</h2>
    <p>Despite its potential, data-driven sustainable planning faces several challenges:</p>
    <ul>
      <li><strong>Data Privacy:</strong> Balancing insights with citizen privacy</li>
      <li><strong>Digital Divide:</strong> Ensuring data represents all populations</li>
      <li><strong>Technical Capacity:</strong> Building skills in planning organizations</li>
      <li><strong>Integration:</strong> Combining data science with traditional planning methods</li>
    </ul>

    <h2>Best Practices</h2>
    <p>Successful implementation of data science in sustainable planning requires:</p>
    <ul>
      <li>Strong collaboration between data scientists and planners</li>
      <li>Continuous validation of models with ground-truth data</li>
      <li>Transparent communication of methodology and limitations</li>
      <li>Regular updating of models as new data becomes available</li>
    </ul>

    <h2>Future Outlook</h2>
    <p>The future of sustainable urban planning will be increasingly data-driven, with AI and machine learning playing central roles in decision-making. We can expect to see:</p>
    <ul>
      <li>Real-time adaptive planning systems</li>
      <li>Citizen-centric planning platforms</li>
      <li>Integrated sustainability dashboards</li>
      <li>Predictive climate adaptation strategies</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Data science is not replacing traditional planning wisdom but enhancing it with new capabilities. By combining human expertise with data-driven insights, we can create more sustainable, livable, and resilient cities for the future.</p>
    `
  }
};

// Theme Management
class ThemeManager {
  constructor() {
    this.theme = this.getStoredTheme() || 'light';
    this.themeToggle = document.getElementById('themeToggle');
    this.init();
  }

  init() {
    this.applyTheme();
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }
  }

  getStoredTheme() {
    try {
      return localStorage.getItem('theme');
    } catch (e) {
      return null;
    }
  }

  setStoredTheme(theme) {
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      console.warn('Unable to store theme preference');
    }
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme();
    this.setStoredTheme(this.theme);
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
    if (this.themeToggle) {
      const icon = this.themeToggle.querySelector('.theme-icon');
      if (icon) {
        icon.textContent = this.theme === 'light' ? '🌙' : '☀️';
      }
    }
  }
}

// Navigation Management
class NavigationManager {
  constructor() {
    this.currentPage = 'home';
    this.pages = document.querySelectorAll('.page');
    this.navLinks = document.querySelectorAll('[data-page]');
    this.navToggle = document.getElementById('navToggle');
    this.navMenu = document.getElementById('navMenu');
    this.init();
  }

  init() {
    // Navigation link handlers
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute('data-page');
        this.navigateToPage(targetPage);
        this.closeMobileMenu();
      });
    });

    // Mobile menu toggle
    if (this.navToggle) {
      this.navToggle.addEventListener('click', () => this.toggleMobileMenu());
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (this.navMenu && !this.navMenu.contains(e.target) && 
          this.navToggle && !this.navToggle.contains(e.target)) {
        this.closeMobileMenu();
      }
    });

    // Handle browser back/forward
    window.addEventListener('popstate', (e) => {
      const page = e.state?.page || 'home';
      this.navigateToPage(page, false);
    });

    // Set initial state
    history.replaceState({ page: 'home' }, '', '#home');
  }

  navigateToPage(targetPage, updateHistory = true) {
    // Hide all pages
    this.pages.forEach(page => page.classList.remove('active'));
    
    // Show target page
    const targetPageElement = document.getElementById(targetPage);
    if (targetPageElement) {
      targetPageElement.classList.add('active');
      this.currentPage = targetPage;
      
      // Update active nav link
      this.updateActiveNavLink(targetPage);
      
      // Update browser history
      if (updateHistory) {
        history.pushState({ page: targetPage }, '', `#${targetPage}`);
      }
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  updateActiveNavLink(activePage) {
    this.navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-page') === activePage) {
        link.classList.add('active');
      }
    });
  }

  toggleMobileMenu() {
    if (this.navMenu) {
      this.navMenu.classList.toggle('active');
    }
  }

  closeMobileMenu() {
    if (this.navMenu) {
      this.navMenu.classList.remove('active');
    }
  }
}

// Particle Animation
class ParticleSystem {
  constructor(container) {
    this.container = container;
    this.particles = [];
    this.isActive = true;
    this.init();
  }

  init() {
    if (!this.container) return;
    this.createParticles();
    this.animate();
  }

  createParticles() {
    const particleCount = window.innerWidth > 768 ? 50 : 25;
    for (let i = 0; i < particleCount; i++) {
      this.createParticle();
    }
  }

  createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 4 + 2;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    
    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      top: ${y}%;
      animation-duration: ${duration}s;
      animation-delay: ${Math.random() * 20}s;
    `;
    
    this.container.appendChild(particle);
    this.particles.push(particle);
  }

  animate() {
    if (!this.isActive) return;
    
    this.particles.forEach(particle => {
      const rect = particle.getBoundingClientRect();
      if (rect.top > window.innerHeight) {
        particle.style.top = '-10px';
        particle.style.left = Math.random() * 100 + '%';
      }
    });
    
    requestAnimationFrame(() => this.animate());
  }

  destroy() {
    this.isActive = false;
    this.particles.forEach(particle => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    });
    this.particles = [];
  }
}

// Dynamic Greeting
class GreetingManager {
  constructor() {
    this.greetingElement = document.getElementById('dynamicGreeting');
    if (this.greetingElement) {
      this.updateGreeting();
      // Update greeting every minute
      setInterval(() => this.updateGreeting(), 60000);
    }
  }

  updateGreeting() {
    const hour = new Date().getHours();
    let greeting;
    
    if (hour < 12) {
      greeting = 'Good Morning!';
    } else if (hour < 17) {
      greeting = 'Good Afternoon!';
    } else {
      greeting = 'Good Evening!';
    }
    
    if (this.greetingElement) {
      this.greetingElement.textContent = greeting;
    }
  }
}

// Project Detail Manager
class ProjectDetailManager {
  constructor() {
    this.projectButtons = document.querySelectorAll('[data-project]');
    this.projectDetailView = document.getElementById('projectDetail');
    this.projectDetailContent = document.getElementById('projectDetailContent');
    this.projectsGrid = document.getElementById('projectsGrid');
    this.backButton = document.getElementById('backToProjects');
    this.init();
  }

  init() {
    this.projectButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = button.getAttribute('data-project');
        this.showProjectDetail(projectId);
      });
    });

    if (this.backButton) {
      this.backButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.hideProjectDetail();
      });
    }
  }

  showProjectDetail(projectId) {
    const project = projectsData[projectId];
    if (!project || !this.projectDetailView || !this.projectDetailContent) return;

    const content = `
      <div class="project-header">
        <span class="project-category">${project.category}</span>
        <h1>${project.title}</h1>
        <p class="project-subtitle">${project.description}</p>
      </div>
      
      <div class="project-content">
        <div class="project-description">
          ${project.fullDescription.split('\n').map(p => p.trim() ? `<p>${p.trim()}</p>` : '').join('')}
        </div>
        
        <div class="project-meta">
          <div class="project-tech">
            <h3>Technologies Used</h3>
            <div class="tech-tags">
              ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
          </div>
          
          <div class="project-metrics">
            <h3>Key Metrics</h3>
            <ul>
              ${project.metrics.map(metric => `<li>${metric}</li>`).join('')}
            </ul>
          </div>
          
          <div class="project-links">
            <h3>Links</h3>
            ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" class="btn btn--outline btn--sm">View on GitHub</a>` : ''}
            ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" class="btn btn--primary btn--sm">View Publication</a>` : ''}
          </div>
          
          <div class="project-status">
            <h3>Status</h3>
            <span class="status status--success">${project.status}</span>
          </div>
        </div>
      </div>
    `;

    this.projectDetailContent.innerHTML = content;
    
    if (this.projectsGrid) {
      this.projectsGrid.style.display = 'none';
    }
    this.projectDetailView.style.display = 'block';
    
    // Scroll to top of detail view
    this.projectDetailView.scrollIntoView({ behavior: 'smooth' });
  }

  hideProjectDetail() {
    if (this.projectDetailView) {
      this.projectDetailView.style.display = 'none';
    }
    if (this.projectsGrid) {
      this.projectsGrid.style.display = 'grid';
    }
  }
}

// Blog Post Manager
class BlogPostManager {
  constructor() {
    this.blogButtons = document.querySelectorAll('[data-blog]');
    this.blogPostView = document.getElementById('blogPostView');
    this.blogPostContent = document.getElementById('blogPostContent');
    this.blogListing = document.getElementById('blogListing');
    this.backButton = document.getElementById('backToBlog');
    this.init();
  }

  init() {
    this.blogButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const blogId = button.getAttribute('data-blog');
        this.showBlogPost(blogId);
      });
    });

    if (this.backButton) {
      this.backButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.hideBlogPost();
      });
    }
  }

  showBlogPost(blogId) {
    const post = blogData[blogId];
    if (!post || !this.blogPostView || !this.blogPostContent) return;

    const content = `
      <article class="blog-article">
        <header class="blog-header">
          <span class="blog-category">${post.category}</span>
          <h1>${post.title}</h1>
          <div class="blog-meta">
            <span class="blog-author">By ${post.author}</span>
            <span class="blog-date">${post.date}</span>
            <span class="blog-read-time">${post.readTime}</span>
          </div>
        </header>
        
        <div class="blog-content">
          ${post.content}
        </div>
        
        <footer class="blog-footer">
          <div class="blog-share">
            <h4>Share this post</h4>
            <div class="share-buttons">
              <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}" target="_blank" class="btn btn--outline btn--sm">Twitter</a>
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}" target="_blank" class="btn btn--outline btn--sm">LinkedIn</a>
            </div>
          </div>
        </footer>
      </article>
    `;

    this.blogPostContent.innerHTML = content;
    
    if (this.blogListing) {
      this.blogListing.style.display = 'none';
    }
    this.blogPostView.style.display = 'block';
    
    // Scroll to top of post
    this.blogPostView.scrollIntoView({ behavior: 'smooth' });
  }

  hideBlogPost() {
    if (this.blogPostView) {
      this.blogPostView.style.display = 'none';
    }
    if (this.blogListing) {
      this.blogListing.style.display = 'block';
    }
  }
}

// Filter Manager
class FilterManager {
  constructor() {
    this.projectFilters = document.querySelectorAll('.filter-btn');
    this.blogCategories = document.querySelectorAll('.category-btn');
    this.projectCards = document.querySelectorAll('.project-card');
    this.blogPosts = document.querySelectorAll('.blog-post');
    this.init();
  }

  init() {
    // Project filters
    this.projectFilters.forEach(filter => {
      filter.addEventListener('click', (e) => {
        e.preventDefault();
        const category = filter.getAttribute('data-filter');
        this.filterProjects(category);
        this.updateActiveFilter(this.projectFilters, filter);
      });
    });

    // Blog categories
    this.blogCategories.forEach(category => {
      category.addEventListener('click', (e) => {
        e.preventDefault();
        const categoryName = category.getAttribute('data-category');
        this.filterBlogPosts(categoryName);
        this.updateActiveFilter(this.blogCategories, category);
      });
    });
  }

  filterProjects(category) {
    this.projectCards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterBlogPosts(category) {
    this.blogPosts.forEach(post => {
      if (category === 'all' || post.getAttribute('data-category') === category) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });
  }

  updateActiveFilter(filters, activeFilter) {
    filters.forEach(filter => filter.classList.remove('active'));
    activeFilter.classList.add('active');
  }
}

// Contact Form Manager
class ContactFormManager {
  constructor() {
    this.form = document.getElementById('contactForm');
    this.successMessage = document.getElementById('formSuccess');
    this.init();
  }

  init() {
    if (this.form) {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
      
      // Real-time validation
      const inputs = this.form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.addEventListener('blur', () => this.validateField(input));
        input.addEventListener('input', () => this.clearErrors(input));
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const isValid = this.validateForm();
    if (isValid) {
      this.simulateFormSubmission();
    }
  }

  validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    let isValid = true;
    
    if (name) isValid = this.validateField(name) && isValid;
    if (email) isValid = this.validateField(email) && isValid;
    if (subject) isValid = this.validateField(subject) && isValid;
    if (message) isValid = this.validateField(message) && isValid;
    
    return isValid;
  }

  validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';

    // Clear previous errors
    this.clearErrors(field);

    switch (fieldName) {
      case 'name':
        if (value.length < 2) {
          errorMessage = 'Name must be at least 2 characters long';
          isValid = false;
        }
        break;
      
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          errorMessage = 'Please enter a valid email address';
          isValid = false;
        }
        break;
      
      case 'subject':
        if (value === '') {
          errorMessage = 'Please select a subject';
          isValid = false;
        }
        break;
      
      case 'message':
        if (value.length < 10) {
          errorMessage = 'Message must be at least 10 characters long';
          isValid = false;
        }
        break;
    }

    if (!isValid) {
      this.showError(field, errorMessage);
    }

    return isValid;
  }

  showError(field, message) {
    const errorElement = document.getElementById(field.name + 'Error');
    if (errorElement) {
      errorElement.textContent = message;
      field.classList.add('error');
    }
  }

  clearErrors(field) {
    const errorElement = document.getElementById(field.name + 'Error');
    if (errorElement) {
      errorElement.textContent = '';
      field.classList.remove('error');
    }
  }

  simulateFormSubmission() {
    // Simulate form submission delay
    const submitButton = this.form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    setTimeout(() => {
      if (this.form && this.successMessage) {
        this.form.style.display = 'none';
        this.successMessage.style.display = 'block';
        
        // Reset form after success
        setTimeout(() => {
          this.form.reset();
          this.form.style.display = 'block';
          this.successMessage.style.display = 'none';
          submitButton.textContent = originalText;
          submitButton.disabled = false;
        }, 5000);
      }
    }, 2000);
  }
}

// Scroll Animation Manager
class ScrollAnimationManager {
  constructor() {
    this.animatedElements = document.querySelectorAll('.fade-in');
    this.backToTopButton = document.getElementById('backToTop');
    this.init();
  }

  init() {
    this.setupIntersectionObserver();
    this.setupBackToTop();
    window.addEventListener('scroll', () => this.handleScroll());
  }

  setupIntersectionObserver() {
    if (!('IntersectionObserver' in window)) {
      // Fallback for browsers without IntersectionObserver
      this.animatedElements.forEach(element => {
        element.classList.add('visible');
      });
      return;
    }

    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    this.animatedElements.forEach(element => {
      observer.observe(element);
    });
  }

  setupBackToTop() {
    if (this.backToTopButton) {
      this.backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Show/hide back to top button
    if (this.backToTopButton) {
      if (scrollTop > 300) {
        this.backToTopButton.classList.add('visible');
      } else {
        this.backToTopButton.classList.remove('visible');
      }
    }
  }
}

// Loading Manager
class LoadingManager {
  constructor() {
    this.loadingScreen = document.getElementById('loadingScreen');
    this.init();
  }

  init() {
    // Hide loading screen once everything is ready
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.hideLoading();
      }, 1000);
    });
    
    // Fallback in case load event doesn't fire
    setTimeout(() => {
      this.hideLoading();
    }, 3000);
  }

  hideLoading() {
    if (this.loadingScreen) {
      this.loadingScreen.classList.add('hidden');
      setTimeout(() => {
        this.loadingScreen.style.display = 'none';
      }, 300);
    }
  }
}

// Application Initialization
class Portfolio {
  constructor() {
    this.managers = {};
    this.init();
  }

  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeApp());
    } else {
      this.initializeApp();
    }
  }

  initializeApp() {
    try {
      // Initialize all managers
      this.managers.loading = new LoadingManager();
      this.managers.theme = new ThemeManager();
      this.managers.navigation = new NavigationManager();
      this.managers.greeting = new GreetingManager();
      this.managers.projectDetail = new ProjectDetailManager();
      this.managers.blogPost = new BlogPostManager();
      this.managers.filter = new FilterManager();
      this.managers.contactForm = new ContactFormManager();
      this.managers.scrollAnimation = new ScrollAnimationManager();
      
      // Initialize particle system
      const particlesContainer = document.getElementById('particles');
      if (particlesContainer) {
        this.managers.particles = new ParticleSystem(particlesContainer);
      }

      // Add fade-in class to elements for animation
      this.addFadeInClasses();
      
      console.log('Portfolio initialized successfully');
    } catch (error) {
      console.error('Error initializing portfolio:', error);
    }
  }

  addFadeInClasses() {
    const elements = document.querySelectorAll('.section-header, .project-card, .blog-card, .service-card, .about-preview__content, .hero__content');
    elements.forEach(element => {
      element.classList.add('fade-in');
    });
  }
}

// Initialize the application
const portfolio = new Portfolio();