'use client'

import { useState } from 'react'

const faqData = [
  {
    category: 'Platform & Access',
    questions: [
      {
        q: 'Who can use Navadrishti?',
        a: 'Navadrishti is designed for three stakeholders: NGOs managing operations and campaigns, Companies fulfilling CSR obligations, and Individuals contributing to social impact.'
      },
      {
        q: 'Is there a free trial available?',
        a: 'Yes, we offer a 30-day free trial for NGOs to explore all platform features including project management, AI assistance, and marketplace capabilities.'
      },
      {
        q: 'How do I get started?',
        a: 'Sign up with your organization details, complete the AI-powered e-KYC verification, and you can start creating projects, campaigns, and connecting with verified partners immediately.'
      }
    ]
  },
  {
    category: 'Features & Technology',
    questions: [
      {
        q: 'What makes Navadrishti different from donation platforms?',
        a: "We're not a donation platform. Navadrishti is a complete ERP+CRM+Marketplace system that handles operations, compliance, partnerships, and impact measurement - replacing 5-10 different tools NGOs currently use."
      },
      {
        q: 'Does it work offline?',
        a: 'Yes, our mobile app has offline-first capabilities with GPS tracking, allowing rural NGOs to track activities without internet and sync data when connectivity is available.'
      },
      {
        q: 'What languages are supported?',
        a: 'The platform supports 12+ Indian languages including Hindi, Bengali, Tamil, Telugu, Marathi, and more, making it accessible to NGOs across urban and rural India.'
      }
    ]
  },
  {
    category: 'Verification & Compliance',
    questions: [
      {
        q: 'How does NGO verification work?',
        a: 'We use AI-powered e-KYC that verifies NGO credentials, MCA registrations, and track records. Verified organizations receive badges and appear in the trusted network, ensuring 5x faster partner onboarding.'
      },
      {
        q: 'How is CSR compliance managed?',
        a: 'Automated MCA filings, Section 135 compliance tracking, unspent fund management, and complete audit trails ensure companies meet all regulatory requirements without manual paperwork.'
      },
      {
        q: 'Can I track fund utilization?',
        a: 'Yes, every rupee is traced with GPS surveillance and blockchain audit logs from approval to beneficiary impact, providing 90% fraud reduction and complete transparency.'
      }
    ]
  },
  {
    category: 'Pricing & Support',
    questions: [
      {
        q: 'What are the pricing plans?',
        a: 'We offer tiered subscriptions for NGOs based on size and features needed, CSR-as-a-Service packages for companies, and commission-based marketplace transactions. Contact us for custom enterprise pricing.'
      },
      {
        q: 'Is technical support available?',
        a: 'Yes, we provide dedicated support via chat, email, and phone. Premium plans include onboarding assistance, training sessions, and priority technical support.'
      },
      {
        q: 'Can I cancel my subscription anytime?',
        a: 'Yes, subscriptions are flexible with monthly or annual options. You can upgrade, downgrade, or cancel anytime with no long-term commitments required.'
      }
    ]
  }
]

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('Platform & Access')
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const activeFAQ = faqData.find(cat => cat.category === activeCategory)

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Everything you need to know about Navadrishti
          </p>
        </div>

        <div className="faq-content">
          <div className="faq-categories">
            {faqData.map((category) => (
              <button
                key={category.category}
                className={`faq-category-btn ${activeCategory === category.category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.category)}
              >
                {category.category}
              </button>
            ))}
          </div>

          <div className="faq-questions">
            {activeFAQ?.questions.map((item, index) => (
              <div key={index} className="faq-item">
                <button
                  className={`faq-question ${openQuestion === index ? 'active' : ''}`}
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                >
                  <span>{item.q}</span>
                  <svg
                    className={`faq-icon ${openQuestion === index ? 'rotate' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openQuestion === index && (
                  <div className="faq-answer">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
