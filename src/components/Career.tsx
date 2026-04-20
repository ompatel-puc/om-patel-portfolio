import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>HUNEXTURE</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Creating intelligent data analytics projects using Python to uncover trends, build dashboards, and drive insights.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Developer</h4>
                <h5>HUNEXTURE</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Full Stack Developer (MERN) – Employee Management System

Radheyshyam Computer Center – Management System | Desktop Application
• Designed and developed a complete management system to handle student inquiries, admissions, fee collection, certificates, and course management.
• Built an intuitive admin dashboard displaying real-time insights such as total enrollments, revenue collected, and pending payments.
• Implemented structured navigation for seamless management of inquiries, admissions, fee records, courses, and reports.
• Developed secure authentication and role-based access to ensure data privacy and system reliability.
• Focused on user-friendly UI/UX to simplify daily operations and improve efficiency for the institute.            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>1 year · VADODARA </h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Developed a scalable Employee Management System using the MERN stack (MongoDB, Express.js, React, Node.js). Implemented CRUD operations, role-based authentication, and dynamic dashboards for managing employee records. Designed REST APIs and ensured seamless frontend-backend integration. Improved performance and user experience through optimized queries and responsive UI design. Conducted testing and debugging to ensure application stability.

              
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML</h4>
                <h5>IBM</h5>
              </div>
              <h3>2024-25</h3>
            </div>
            <p>
             Developed an AI-powered healthcare chatbot to provide real-time symptom guidance and basic medical 
insights through an interactive chat interface. Implemented community health analytics and data simulation features to track trends and enhance user 
engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
