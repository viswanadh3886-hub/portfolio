const Index = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="nav-glass">
        <div className="nav-container">
          <a href="#hero" className="nav-logo">VRN</a>
          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="glitch" data-text="Viswanadh Reddy">Viswanadh Reddy</span>
          </h1>
          <h2 className="hero-subtitle">Software Developer</h2>
          <p className="hero-tagline">Architecting scalable solutions for the digital future</p>
          <a href="#projects" className="cta-button">
            <span>View My Work</span>
            <div className="button-glow"></div>
          </a>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text glass-card">
              <p>Software Engineer with 3+ years of experience designing and implementing scalable full-stack applications, cloud-based solutions, and enterprise-grade systems across finance, healthcare, and technology domains.</p>
              <p>Currently working at BNY Mellon, I specialize in building high-performance systems that handle millions of transactions while maintaining strict security and compliance standards.</p>
            </div>
            
            <div className="skills-grid">
              <div className="skill-category glass-card">
                <h3>Languages</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">GO</span>
                </div>
              </div>
              
              <div className="skill-category glass-card">
                <h3>Frontend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Angular</span>
                  <span className="skill-tag">Redux</span>
                  <span className="skill-tag">HTML/CSS</span>
                  <span className="skill-tag">jQuery</span>
                </div>
              </div>
              
              <div className="skill-category glass-card">
                <h3>Backend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Spring Boot</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Flask</span>
                  <span className="skill-tag">Express.js</span>
                  <span className="skill-tag">RESTful APIs</span>
                </div>
              </div>
              
              <div className="skill-category glass-card">
                <h3>Cloud & DevOps</h3>
                <div className="skill-tags">
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Azure</span>
                  <span className="skill-tag">Kubernetes</span>
                  <span className="skill-tag">Jenkins</span>
                  <span className="skill-tag">Docker</span>
                </div>
              </div>
            </div>

            <div className="experience-timeline">
              <h3>Experience</h3>
              <div className="timeline">
                <div className="timeline-item glass-card">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>Software Engineer - BNY Mellon</h4>
                    <span className="timeline-date">Jun 2025 - Current</span>
                    <p>Leading cross-functional teams in modernizing legacy financial systems, improving transaction throughput by 15% and reducing processing latency by 35%.</p>
                  </div>
                </div>
                
                <div className="timeline-item glass-card">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>Software Engineer - McKesson</h4>
                    <span className="timeline-date">Feb 2025 - May 2025</span>
                    <p>Developed healthcare dashboards and modernized pharmacy management systems, improving data visibility by 25% and reducing processing time by 30%.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card glass-card">
              <div className="project-header">
                <h3>CryptoFlow Analytics</h3>
                <div className="project-status live"></div>
              </div>
              <p className="project-description">Real-time cryptocurrency trading platform with advanced analytics, portfolio management, and AI-powered market predictions.</p>
              <div className="tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">WebSocket</span>
                <span className="tech-tag">Redis</span>
                <span className="tech-tag">TensorFlow</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">Live Demo</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>

            <div className="project-card glass-card">
              <div className="project-header">
                <h3>CodeSentry AI</h3>
                <div className="project-status development"></div>
              </div>
              <p className="project-description">Intelligent code review system using machine learning to detect vulnerabilities, suggest optimizations, and enforce coding standards.</p>
              <div className="tech-stack">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">FastAPI</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">OpenAI API</span>
                <span className="tech-tag">Docker</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">GitHub</a>
                <a href="#" className="project-link">Documentation</a>
              </div>
            </div>

            <div className="project-card glass-card">
              <div className="project-header">
                <h3>CloudOrchestrator Pro</h3>
                <div className="project-status live"></div>
              </div>
              <p className="project-description">Multi-cloud infrastructure management platform with automated scaling, cost optimization, and performance monitoring.</p>
              <div className="tech-stack">
                <span className="tech-tag">Go</span>
                <span className="tech-tag">Kubernetes</span>
                <span className="tech-tag">AWS</span>
                <span className="tech-tag">Terraform</span>
                <span className="tech-tag">Prometheus</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">Live Demo</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>

            <div className="project-card glass-card">
              <div className="project-header">
                <h3>MicroGrid Framework</h3>
                <div className="project-status live"></div>
              </div>
              <p className="project-description">High-performance microservices framework with built-in service discovery, load balancing, and distributed tracing.</p>
              <div className="tech-stack">
                <span className="tech-tag">Java</span>
                <span className="tech-tag">Spring Boot</span>
                <span className="tech-tag">Apache Kafka</span>
                <span className="tech-tag">Consul</span>
                <span className="tech-tag">Jaeger</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">Documentation</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>

            <div className="project-card glass-card">
              <div className="project-header">
                <h3>ChainTrace Logistics</h3>
                <div className="project-status development"></div>
              </div>
              <p className="project-description">Blockchain-based supply chain transparency platform with smart contracts for automated compliance and real-time tracking.</p>
              <div className="tech-stack">
                <span className="tech-tag">Solidity</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">Web3.js</span>
                <span className="tech-tag">IPFS</span>
                <span className="tech-tag">Ethereum</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">Demo</a>
                <a href="#" className="project-link">Whitepaper</a>
              </div>
            </div>

            <div className="project-card glass-card">
              <div className="project-header">
                <h3>NeuroOptimizer</h3>
                <div className="project-status live"></div>
              </div>
              <p className="project-description">Advanced neural network architecture optimization platform using evolutionary algorithms and automated hyperparameter tuning.</p>
              <div className="tech-stack">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">PyTorch</span>
                <span className="tech-tag">CUDA</span>
                <span className="tech-tag">Ray</span>
                <span className="tech-tag">MLflow</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">Research Paper</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="resume">
        <div className="container">
          <h2 className="section-title">Resume</h2>
          <div className="resume-content">
            <div className="resume-download glass-card">
              <h3>Download Resume</h3>
              <p>Get the complete overview of my experience and achievements</p>
              <a href="#" className="download-btn">
                <span>Download PDF</span>
                <div className="download-icon">⬇</div>
              </a>
            </div>
            
            <div className="resume-highlights">
              <div className="highlight-card glass-card">
                <h4>Key Achievements</h4>
                <ul>
                  <li>Led cross-functional team of 10 engineers in Agile environment</li>
                  <li>Improved transaction throughput by 15% at BNY Mellon</li>
                  <li>Reduced deployment time by 40% with optimized CI/CD pipelines</li>
                  <li>Built 20+ RESTful APIs handling 50,000+ users</li>
                  <li>Automated workflows reducing manual effort by 60%</li>
                </ul>
              </div>
              
              <div className="highlight-card glass-card">
                <h4>Technical Expertise</h4>
                <ul>
                  <li>Full-stack development with modern frameworks</li>
                  <li>Cloud architecture on AWS and Azure</li>
                  <li>Microservices and distributed systems</li>
                  <li>DevOps and CI/CD implementation</li>
                  <li>Database design and optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info glass-card">
              <h3>Let's Connect</h3>
              <p>I'm always interested in discussing new opportunities, innovative projects, and collaborative ventures.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>vnune.official@gmail.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+1 (323) 897-9426</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Wichita, KS</span>
                </div>
              </div>
              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">Twitter</a>
              </div>
            </div>
            
            <form className="contact-form glass-card">
              <h3>Send Message</h3>
              <div className="form-group">
                <input type="text" id="name" name="name" required />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" required />
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-group">
                <textarea id="message" name="message" required></textarea>
                <label htmlFor="message">Message</label>
              </div>
              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <div className="button-glow"></div>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>Viswanadh Reddy Nune</h3>
              <p>Building the future, one line of code at a time.</p>
            </div>
            <div className="footer-social">
              <a href="#" className="social-icon">LinkedIn</a>
              <a href="#" className="social-icon">GitHub</a>
              <a href="#" className="social-icon">Twitter</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Viswanadh Reddy Nune. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
