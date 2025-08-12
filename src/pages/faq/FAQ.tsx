import WorldwideShipping from '../../components/WorldwideShipping';
import search from '../../assets/icons/search.svg';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const faqData = [
  { id:'Information-About-Parts',
    category: 'Information About Parts',
    items: [
      {
        question: 'Are the parts original?',
        answer: 'Yes, all our used parts are original (OEM), sourced from dismantled vehicles and guaranteed.',
      },
      {
        question: 'How Can I Check If A Part Is Compatible With My Car And Find The OEM Code I Need?',
        answer:
          'To confirm compatibility, check the OEM reference number on the original part of your vehicle. You can remove the component to locate it or contact an official dealership to obtain the exact reference code.',
      },
      {
        question: 'Do You Only Sell Used Parts?',
        answer: 'Yes, we specialize exclusively in the sale of used car parts.',
      },
      {
        question: 'Do Electronic Components Require Programming?',
        answer: 'Yes, electronic components may need specific programming to function, which should be carried out by a qualified workshop.',
      },
      {
        question: 'Are The Parts Tested Before Being Sold?',
        answer: 'Every part undergoes functional testing prior to removal, ensuring quality and reliability.',
      },
      {
        question: 'Are Used Parts Guaranteed?',
        answer: 'Yes, we provide a 30-day warranty from the date of purchase. During this period, the item can be replaced (if available) or refunded if defective. Please note that shipping costs are non-refundable.',
      },
    ],
  },
  { id:'Orders-and-Purchases',
    category: 'Orders And Purchases id',
    items: [
      {
        question: 'How Can I Place An Order On The Website?',
        answer: 'Simply add the item to your cart, proceed to checkout, enter your shipping details, and select your preferred payment method. The process is straightforward and guided.',
      },
      {
        question: 'Can I Purchase Without Registering?',
        answer:
          'Yes, you can buy as a guest. You’ll receive all order details, the invoice, and tracking number directly to the email provided during payment.',
      },
      {
        question: 'What Payment Methods Do You Accept?',
        answer: 'We accept PayPal, debit and credit cards, and bank transfers. All transactions are secure and protected.',
      },
      {
        question: 'Can I Reserve A Part That’s Currently Unavailable?',
        answer: 'Yes, please contact us at info@autoriven.com to check availability options. We update our catalog daily with new parts from our partner dismantlers.',
      },
      {
        question: 'Is Cash On Delivery Available?',
        answer: 'No, unfortunately, we do not offer cash on delivery due to the significant company costs incurred from uncollected orders.',
      },
      {
        question: 'How Can I Modify Or Cancel An Order?',
        answer: 'You can request a modification or cancellation by emailing info@autoriven.com with your order number within 24 hours of purchase, provided you haven’t received a shipping confirmation. Once shipped, the order cannot be canceled.',
      },
      {
        question: 'Can I Request An Invoice For My Purchase?',
        answer: 'Yes, an invoice is automatically sent via email for every shipped order, along with the tracking number.',
      },
    ],
  },
  { id:'Shipping-and-Delivery',
    category: 'Shipping and Delivery',
    items: [
      {
        question: 'What are the shipping times?',
        answer: 'Delivery times vary by destination: from 24 hours to 6 working days within Europe, and up to 10 working days worldwide.',
      },
      {
        question: 'Which couriers do you use for shipping?',
        answer:
          'We work with UPS, FedEx, DHL, DPD, GLS, and for larger parts, Raben, Hellmann, and Amberexpress.',
      },
      {
        question: 'Can I track my order?',
        answer: 'Yes, once shipped, you’ll receive an automated email with the tracking number and link.',
      },
      {
        question: 'How much does shipping cost?',
        answer: 'Shipping starts at €15 and varies based on package size, weight, and destination. Costs are calculated at checkout.',
      },
      {
        question: 'Can I pick up the part in person?',
        answer: 'Most parts are located in Poland. If you’re able to pick up in person, email us at info@autoriven.com with the item link, and we’ll provide the exact address.',
      },
      {
        question: 'Can I use my own courier to pick up the part?',
        answer: 'No, we only use our trusted couriers to ensure full control over potential loss or damage.',
      },
      {
        question: 'Do you offer express delivery?',
        answer: 'Yes, we provide FedEx Express delivery upon request. Contact us at info@autoriven.com for details.',
      },
      {
        question: 'Do I need to pay customs duties for shipments outside the EU?',
        answer: 'Yes, customs duties are not included in the price and are the recipient’s responsibility for non-EU shipments.',
      },
    ],
  },
  {id:'Returns-and-Refunds',
    category: 'Returns-and-Refunds',
    items: [
      {
        question: 'How does the return process work?',
        answer: 'As our parts are used, returns are accepted within 14 days only if the item received is incorrect or defective. It will be collected and replaced (if available) or refunded. Returns due to customer purchase errors are not accepted. If unsure about compatibility, contact us at info@autoriven.com before ordering.',
      },
      {
        question: 'What should I do if the package arrives damaged?',
        answer:
          'If the package is damaged, ask the courier to sign a control reservation and report it to info@autoriven.com within 24 hours, attaching the signed document to initiate a claim. If the courier refuses to provide a reservation, reject the delivery. Once accepted without reservation, claims cannot be processed.',
      },
      {
        question: 'Is the refund full, or are there handling fees?',
        answer: 'If eligible, the refund covers the full amount paid.',
      },
      {
        question: 'How long does it take to receive a refund?',
        answer: 'Once the return is received, our warehouse verifies it matches what was sent, and the refund is processed within 14 days.',
      },
    ],
  },
  {id:'Assistance-and-Support',
    category: 'Assistance-and-Support',
    items: [
      {
        question: 'How can I contact customer support?',
        answer: 'Visit autoriven.com/contact-us and choose your preferred method to get assistance.',
      },
      {
        question: 'What are your support hours?',
        answer:
          'We’re available Monday to Friday from 9:00 AM to 4:00 PM, excluding public holidays.',
      },
      {
        question: 'Can I contact you via WhatsApp?',
        answer: 'Yes, reach us at wa.me/48453094174 via chat, and the first available operator will respond as soon as possible.',
      },
      {
        question: 'Where can I find my invoice?',
        answer: 'The invoice is automatically emailed to you once the order is shipped and completed.',
      },
      {
        question: 'What should I do if I receive a product with an unreported defect?',
        answer: 'Report it to info@autoriven.com within 24 hours of receipt, and we’ll assist you promptly.',
      },
      {
        question: 'Can I request a quote for multiple parts?',
        answer: 'Yes, email us at info@autoriven.com with a complete list of required parts and their OEM codes, and we’ll provide the best quote based on availability.',
      },
    ],
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<{ [key: number]: number | null }>({});
  const location = useLocation();

  // Auto scroll to correct section on load
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 200); // Delay ensures DOM is ready
      }
    }
  }, [location]);

  const toggle = (catIndex: number, itemIndex: number) => {
    setOpenIndex((prev) => ({
      ...prev,
      [catIndex]: prev[catIndex] === itemIndex ? null : itemIndex,
    }));
  };

  return (
    <section className="faq-section">
      <div className="container w-layout-blockcontainer">
        {/* Search */}
        <div className="form-block form-block-black w-form w-form-faq">
          <form className="form">
            <input
              className="text-field text-field-black w-input"
              placeholder="Search common topics (e.g., 'warranty', 'shipping')"
              type="text"
            />
            <img
              src={search}
              alt="search"
              style={{ filter: 'invert(50%)' }}
              className="image"
            />
          </form>
        </div>

        {faqData.map((category, catIndex) => (
          <div
            key={catIndex}
            className="faq-category"
            id={category.id} // Use real ID
          >
            <h2 className="heading-2 heading-2-left heading-2-left-mobile">
              {catIndex + 1}. {category.category}
            </h2>
            <div className="faq-grid">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`faq-item ${openIndex[catIndex] === itemIndex ? 'open' : ''}`}
                  onClick={() => toggle(catIndex, itemIndex)}
                >
                  <div className="faq-question faq-question-mobile">
                    <span>{item.question}</span>
                    <span className="faq-toggle">
                      {openIndex[catIndex] === itemIndex ? '−' : '+'}
                    </span>
                  </div>
                  {openIndex[catIndex] === itemIndex && (
                    <div className="faq-answer">{item.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Contact Form */}
        <div
          className="w-layout-vflex w-layout-vflex-col"
          style={{ maxWidth: '1000px', margin: '3rem auto' }}
        >
          <h2 className="heading-2 heading-2-left-mobile" style={{ margin: 'auto' }}>
            Still stuck? Ask directly
          </h2>
          <div className="form-block-5 w-form form-block-5 w-form-1-tb">
            <form className="w-form w-form-mobile-faq">
              <div className="w-layout-hflex flex-block-34">
                <input
                  className="text-field-5 w-input text-field-5-faq"
                  maxLength={256}
                  name="Name"
                  placeholder="Name"
                  type="text"
                  required
                />
                <input
                  className="text-field-5 w-input text-field-5-faq"
                  maxLength={256}
                  name="Email"
                  placeholder="Email"
                  type="email"
                />
              </div>
              <input
                className="text-field-5 w-input text-field-5-faq"
                maxLength={256}
                name="Subject"
                placeholder="Subject"
                type="text"
                required
              />
              <textarea
                placeholder="Message!"
                maxLength={5000}
                name="Message"
                className="text-field-5 text-field-5-text-area w-input"
              />
              <input
                type="submit"
                className="submit-button w-button submit-button-tb-mb-faq submit-button-tb"
                value="Submit Now"
              />
            </form>
          </div>
        </div>
      </div>

      <WorldwideShipping />
    </section>
  );
};

export default FAQ;