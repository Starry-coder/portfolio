import React, { useState } from 'react';
import './Contact.css';
import FuzzyText from '../../components/FuzzyText/FuzzyText';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="fuzzy-text-container">
          <FuzzyText 
            className="fuzzy-text-404"
            baseIntensity={0.15} 
            hoverIntensity={0.4} 
            enableHover={true}
            fontSize="clamp(1.25rem, 4vw, 2.5rem)"
            fontWeight={900}
          >
            portfolio/resume
          </FuzzyText>
          <FuzzyText 
            className="fuzzy-text-subtitle"
            baseIntensity={0.15} 
            hoverIntensity={0.3} 
            enableHover={true}
            fontSize="clamp(0.5rem, 1.25vw, 0.9rem)"
            fontWeight={600}
          >
            STATUS : 200 (OK)
          </FuzzyText>
        </div>
        
        <div className="page-content">
          <div className="resume-actions">
            <button className="resume-button view-button" onClick={() => setShowModal(true)}>
              View Resume
            </button>
            <a 
              href="/resume.pdf" 
              download="Aryan_Kumar_Resume.pdf"
              className="resume-button download-button"
            >
              Download Resume
            </a>
          </div>

          {showModal && (
            <div className="modal-overlay" onClick={() => setShowModal(false)}>
              <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={() => setShowModal(false)}>
                  ×
                </button>
                <div className="modal-body">
                  <embed
                    src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1&statusbar=0&messages=0&view=FitW"
                    type="application/pdf"
                    className="resume-pdf-modal"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
