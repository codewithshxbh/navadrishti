'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const faqData = [
  {
    category: 'Platform Overview',
    questions: [
      {
        q: 'What is Navadrishti?',
        a: 'Navadrishti is a comprehensive digital platform designed to streamline social impact operations for NGOs, companies executing CSR initiatives, and individuals looking to contribute to social causes.',
      },
      {
        q: 'Who can benefit from this platform?',
        a: 'Three main stakeholders: NGOs seeking efficient project management and donor engagement, Companies managing CSR compliance and partnerships, and Individuals wanting to discover verified causes and track their contributions.',
      },
      {
        q: 'What problem does Navadrishti solve?',
        a: 'It replaces scattered Excel sheets, manual processes, and multiple tools with one unified system for managing social impact work - from project planning to impact measurement and compliance reporting.',
      },
    ],
  },
  {
    category: 'Features & Capabilities',
    questions: [
      {
        q: 'What core features does the platform include?',
        a: 'Project management tools, volunteer coordination, campaign creation, partner verification system, impact tracking and analytics, compliance reporting, and a marketplace for connecting stakeholders.',
      },
      {
        q: 'How does the verification system work?',
        a: 'Organizations undergo a digital verification process that validates credentials, registrations, and track records to create a trusted network of verified NGOs and CSR partners.',
      },
      {
        q: 'Is there mobile accessibility?',
        a: 'Yes, the platform includes mobile-responsive design and features for field work, allowing teams to update projects, track activities, and manage operations from anywhere.',
      },
    ],
  },
  {
    category: 'Technical Details',
    questions: [
      {
        q: 'What technologies power the platform?',
        a: 'Built with modern web technologies including Next.js, React, TypeScript, and includes AI-powered features for documentation assistance and automated reporting.',
      },
      {
        q: 'Is data security ensured?',
        a: 'The platform follows industry-standard security practices with encrypted data transmission, secure authentication, and regular security audits to protect sensitive information.',
      },
      {
        q: 'Can it integrate with existing tools?',
        a: 'Designed with integration capabilities to work with common business tools, accounting software, and reporting systems that organizations may already be using.',
      },
    ],
  },
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'How can I explore the platform?',
        a: "This portfolio showcases the platform's design and key features. For a full demonstration or to discuss implementation for your organization, you can reach out through the contact information provided.",
      },
      {
        q: 'What information is needed to get started?',
        a: 'Basic organization details, type of social impact work, current challenges with existing processes, and specific requirements for project management and compliance needs.',
      },
      {
        q: 'Is training provided?',
        a: 'Yes, comprehensive onboarding and training would be provided to ensure teams can effectively utilize all platform features and maximize their social impact operations.',
      },
    ],
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('Platform Overview');
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const { ref: sectionRef, isIntersecting: sectionVisible } =
    useIntersectionObserver({
      threshold: 0.1,
    });

  const activeFAQ = faqData.find((cat) => cat.category === activeCategory);

  return (
    <motion.section
      id="faq"
      className="faq-section"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={sectionVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={
            sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Everything you need to know about Navadrishti
          </p>
        </motion.div>

        <motion.div
          className="faq-content"
          initial={{ opacity: 0, y: 30 }}
          animate={
            sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="faq-categories">
            {faqData.map((category, index) => (
              <motion.button
                key={category.category}
                className={`faq-category-btn ${activeCategory === category.category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.category)}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {category.category}
              </motion.button>
            ))}
          </div>

          <motion.div
            className="faq-questions"
            initial={{ opacity: 0, y: 20 }}
            animate={
              sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AnimatePresence>
              {activeFAQ?.questions.map((item, index) => (
                <motion.div
                  key={`${activeCategory}-${index}`}
                  className="faq-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <button
                    className={`faq-question ${openQuestion === index ? 'active' : ''}`}
                    onClick={() =>
                      setOpenQuestion(openQuestion === index ? null : index)
                    }
                  >
                    <span>{item.q}</span>
                    <motion.svg
                      className={`faq-icon ${openQuestion === index ? 'rotate' : ''}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      animate={{ rotate: openQuestion === index ? 180 : 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <AnimatePresence initial={false}>
                    {openQuestion === index && (
                      <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                          transition: {
                            height: {
                              duration: 0.3,
                              ease: [0.4, 0, 0.2, 1],
                            },
                            opacity: {
                              duration: 0.25,
                              ease: 'easeOut',
                              delay: 0.1,
                            },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: {
                              duration: 0.3,
                              ease: [0.4, 0, 0.2, 1],
                            },
                            opacity: {
                              duration: 0.15,
                              ease: 'easeIn',
                            },
                          },
                        }}
                        style={{ overflow: 'hidden' }}
                      >
                        {item.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
