import { useState } from 'react';

const tabsData = [
  {
    title: 'Description',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s...',
  },
  {
    title: 'Parameters and Compatibility',
    content: 'These are the specifications.',
  },
  {
    title: 'Questions and Answers',
    content: (
      <div className='content-products-details'>
     <h3>1. Information About Parts</h3>

<p><strong>Are the parts original?</strong><br />
Yes, all our used parts are original (OEM), sourced from dismantled vehicles and guaranteed.</p>

<p><strong>How can I check if a part is compatible with my car and find the OEM code I need?</strong><br />
To confirm compatibility, check the OEM reference number on the original part of your vehicle. You can remove the component to locate it or contact an official dealership to obtain the exact reference code.</p>

<p><strong>Do you only sell used parts?</strong><br />
Yes, we specialize exclusively in the sale of used car parts.</p>

<p><strong>Are the parts tested before being sold?</strong><br />
Every part undergoes functional testing prior to removal, ensuring quality and reliability.</p>

<p><strong>Are used parts guaranteed?</strong><br />
Yes, we provide a 30-day warranty from the date of purchase. During this period, the item can be replaced (if available) or refunded if defective. Please note that shipping costs are non-refundable.</p>

<p><strong>Do electronic components require programming?</strong><br />
Yes, electronic components may need specific programming to function, which should be carried out by a qualified workshop.</p>

<h3>2. Orders and Purchases</h3>

<p><strong>How can I place an order on the website?</strong><br />
Simply add the item to your cart, proceed to checkout, enter your shipping details, and select your preferred payment method. The process is straightforward and guided.</p>

<p><strong>Can I purchase without registering?</strong><br />
Yes, you can buy as a guest. You’ll receive all order details, the invoice, and tracking number directly to the email provided during payment.</p>

<p><strong>What payment methods do you accept?</strong><br />
We accept PayPal, debit and credit cards, and bank transfers. All transactions are secure and protected.</p>

<p><strong>Is cash on delivery available?</strong><br />
No, unfortunately, we do not offer cash on delivery due to the significant company costs incurred from uncollected orders.</p>

<p><strong>How can I modify or cancel an order?</strong><br />
You can request a modification or cancellation by emailing info@autoriven.com with your order number within 24 hours of purchase, provided you haven’t received a shipping confirmation. Once shipped, the order cannot be canceled.</p>

<p><strong>Can I request an invoice for my purchase?</strong><br />
Yes, an invoice is automatically sent via email for every shipped order, along with the tracking number.</p>

<p><strong>Can I reserve a part that’s currently unavailable?</strong><br />
Yes, please contact us at info@autoriven.com to check availability options. We update our catalog daily with new parts from our partner warehouses.</p>

<h3>3. Shipping and Delivery</h3>

<p><strong>What are the shipping times?</strong><br />
Delivery times vary by destination: from 24 hours to 6 working days within Europe, and up to 10 working days worldwide.</p>

<p><strong>Which couriers do you use for shipping?</strong><br />
We work with UPS, FedEx, DHL, DPD, GLS, and for larger parts, Raben, Hellmann, and Amberexpress.</p>

<p><strong>Can I track my order?</strong><br />
Yes, once shipped, you’ll receive an automated email with the tracking number and link.</p>

<p><strong>How much does shipping cost?</strong><br />
Shipping starts at €15 and varies based on package size, weight, and destination. Costs are calculated at checkout.</p>

<p><strong>Can I pick up the part in person?</strong><br />
Most parts are located in Poland. If you’re able to pick up in person, email us at info@autoriven.com with the item link, and we’ll provide the exact address.</p>

<p><strong>Can I use my own courier to pick up the part?</strong><br />
No, we only use our trusted couriers to ensure full control over potential loss or damage.</p>

<p><strong>Do you offer express delivery?</strong><br />
Yes, we provide FedEx Express delivery upon request. Contact us at info@autoriven.com for details.</p>

<p><strong>Do I need to pay customs duties for shipments outside the EU?</strong><br />
Yes, customs duties are not included in the price and are the recipient’s responsibility for non-EU shipments.</p>

<h3>4. Returns and Refunds</h3>

<p><strong>How does the return process work?</strong><br />
As our parts are used, returns are accepted within 14 days only if the item received is incorrect or defective. It will be collected and replaced (if available) or refunded. Returns due to customer purchase errors are not accepted. If unsure about compatibility, contact us at info@autoriven.com before ordering.</p>

<p><strong>What should I do if the package arrives damaged?</strong><br />
If the package is damaged, ask the courier to sign a control reservation and report it to info@autoriven.com within 24 hours, attaching the signed document to initiate a claim. If the courier refuses to provide a reservation, reject the delivery. Once accepted without reservation, claims cannot be processed.</p>

<p><strong>Is the refund full, or are there handling fees?</strong><br />
If eligible, the refund covers the full amount paid.</p>

<p><strong>How long does it take to receive a refund?</strong><br />
Once the return is received, our warehouse verifies it matches what was sent, and the refund is processed within 14 days.</p>

<h3>5. Assistance and Support</h3>

<p><strong>How can I contact customer support?</strong><br />
Visit <a href="https://autoriven.com/contact-us">autoriven.com/contact-us</a> and choose your preferred method to get assistance.</p>

<p><strong>What are your support hours?</strong><br />
We’re available Monday to Friday from 9:00 AM to 4:00 PM, excluding public holidays.</p>

<p><strong>Can I contact you via WhatsApp?</strong><br />
Yes, reach us at <a href="https://wa.me/48453094174">wa.me/48453094174</a> via chat, and the first available operator will respond as soon as possible.</p>

<p><strong>Where can I find my invoice?</strong><br />
The invoice is automatically emailed to you once the order is shipped and completed.</p>

<p><strong>What should I do if I receive a product with an unreported defect?</strong><br />
Report it to info@autoriven.com within 24 hours of receipt, and we’ll assist you promptly.</p>

<p><strong>Can I request a quote for multiple parts?</strong><br />
Yes, email us at info@autoriven.com with a complete list of required parts and their OEM codes, and we’ll provide the best quote based on availability.</p>

      </div>
    ),
  },
  {
    title: 'Delivery',
    content: (
      <div>
        <h3>Delivery</h3>

<p><strong>Company:</strong><br />
AUTOZ SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ<br />
Address: Bartycka 22B M21A, 00-716 Warsaw, Poland<br />
VAT ID: PL5213955814<br />
Email: info@autoriven.com<br />
Website: <a href="https://www.autoriven.com" target="_blank">www.autoriven.com</a><br />
Last Updated: March 11, 2025</p>

<h3>1. Introduction</h3>
<p><strong>How do you deliver auto parts?</strong><br />
At autoriven.com, we are committed to delivering your used auto parts quickly and reliably from our base in Poland to customers worldwide. We partner with trusted couriers to ensure your order reaches you in the shortest time possible.</p>

<h3>2. Shipping Process</h3>

<p><strong>How is the order prepared?</strong><br />
Once your payment is confirmed, we prepare your package within 48 hours (excluding weekends and public holidays in Poland). This includes picking, packing, and handing over your order to the selected courier.</p>

<p><strong>How are shipping costs calculated?</strong><br />
Costs are calculated automatically at checkout based on your destination and package size. In rare cases, we may contact you to request an additional fee if the calculated amount does not cover the actual shipping cost (see Terms and Conditions, Section 4).</p>

<p><strong>Will I receive a tracking number?</strong><br />
Yes, you’ll receive a tracking number via email once your package is dispatched, allowing you to monitor its progress.</p>

<h3>3. Delivery Within the European Union (EU)</h3>

<p><strong>Which couriers do you use?</strong><br />
We use the first available courier from the following trusted partners:<br />
FedEx, UPS, DPD, GLS, DHL, AmberExpress, Cargus, Hellmann, Raben</p>

<p><strong>What is the delivery time within the EU?</strong><br />
Typically 2 to 6 working days from dispatch, depending on your location within the EU. Delays may occur due to customs clearance, holidays, or unforeseen events.</p>

<p><strong>Is VAT included for EU orders?</strong><br />
Yes, prices include VAT for EU deliveries, as displayed at checkout.</p>

<h3>4. Delivery Outside the European Union (Non-EU)</h3>

<p><strong>Which couriers are used outside the EU?</strong><br />
For shipments outside the EU, we use only FedEx and UPS, shipping standard-sized packages to ensure consistency and reliability.</p>

<p><strong>Are oversized items shipped internationally?</strong><br />
No, we ship only standard-sized packages to non-EU destinations. Oversized or non-standard items may not be available for international shipping outside the EU.</p>

<p><strong>What is the delivery time outside the EU?</strong><br />
Typically 3 to 8 working days from dispatch, depending on the destination. Times may vary due to customs processing, local holidays, or unexpected delays.</p>

<p><strong>Will I pay customs or taxes?</strong><br />
VAT is deducted at checkout for non-EU orders. However, customs duties, taxes, or import fees may apply upon arrival, payable by you (the buyer). If you refuse to pay these fees, the package may be seized by customs, and no refund will be issued (see Terms and Conditions, Section 4).</p>

<h3>5. Delivery Times</h3>

<p><strong>How long is preparation time?</strong><br />
Up to 48 hours from payment confirmation.</p>

<p><strong>How long is transit time?</strong><br />
EU: 2–6 working days<br />
Non-EU: 3–8 working days (subject to customs clearance)</p>

<p><strong>Are these times guaranteed?</strong><br />
These are estimates only. Delivery may take longer due to factors beyond our control, such as weather, strikes, or customs delays. We’ll keep you informed if issues arise.</p>

<h3>6. Receiving Your Package</h3>

<p><strong>What if the package is damaged?</strong><br />
Check your package upon arrival. If it’s damaged, file a damage claim ("reserve of control") with the courier before accepting it, or refuse delivery and notify us within 24 hours (see Terms and Conditions, Section 7).</p>

<p><strong>Who do I contact for delivery issues?</strong><br />
Email us at info@autoriven.com with your order number and tracking details.</p>

<h3>7. Contact Us</h3>

<p><strong>Need help with delivery?</strong><br />
Email: info@autoriven.com<br />
Address: Bartycka 22B M21A, 00-716 Warsaw, Poland</p>

      </div>
    ),
  },
];

const ProductsDetail = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Desktop tab
  const [openAccordion, setOpenAccordion] = useState<number | null>(0); // Mobile accordion

  const handleAccordionToggle = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="tabs-section">
      <div className="container w-layout-blockcontainer">
        <div className="tabs-wrapper">

          {/* Desktop Tab View */}
          <div className="tabs-desktop">
            <div className="tab-buttons">
              {tabsData.map((tab, idx) => (
                <button
                  key={idx}
                  className={`tab-btn ${activeIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="tab-content text-block-7">
              {typeof tabsData[activeIndex].content === 'string' ? (
                <p>{tabsData[activeIndex].content}</p>
              ) : (
                tabsData[activeIndex].content
              )}
            </div>
          </div>

          {/* Mobile Accordion View */}
          <div className="tabs-mobile">
            {tabsData.map((tab, idx) => (
              <div key={idx} className="accordion-item">
                <div
                  className="accordion-header"
                  onClick={() => handleAccordionToggle(idx)}
                >
                  <h4>{tab.title}</h4>
                  <span>{openAccordion === idx ? '-' : '+'}</span>
                </div>
                {openAccordion === idx && (
                  <div className="accordion-body">
                    {typeof tab.content === 'string' ? (
                      <p>{tab.content}</p>
                    ) : (
                      tab.content
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductsDetail;
