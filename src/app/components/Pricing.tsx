import { FiCheck } from 'react-icons/fi';

const pricingPlans = [
  {
    title: "UI/UX Design",
    price: 1500,
    period: "/month",
    features: [
      "User interface design",
      "User experience optimization",
      "2-3 weeks design completion",
      "Priority support",
      "Unlimited iterations"
    ],
    cta: "Start UI/UX Design",
    link: "https://flutterwave.com/pay/hn4ulqd03p1n"
  },
  {
    title: "Branding + UI/UX",
    price: 2000,
    period: "/month",
    features: [
      "Full branding package (Logo + Brand guidelines)",
      "UI/UX design",
      "2-3 weeks design completion",
      "Priority support",
      "Unlimited iterations"
    ],
    cta: "Get Branding + UI/UX",
    highlighted: true,
    link: "https://flutterwave.com/pay/ldxhqkazcyvw"
  },
  {
    title: "Full Design + Dev",
    price: 4500,
    period: "/month",
    features: [
      "Branding + UI/UX design",
      "Full-stack development",
      "2-3 weeks design completion",
      "Priority Support",
      "Unlimited iterations",
      "1 month of free support post launch"
    ],
    cta: "Get Product Launched",
    link: "https://flutterwave.com/pay/zlvmn34evkyq"
  }
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-gray-100" id='pricing'>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${plan.highlighted ? 'border-2 border-blue-500 scale-105' : ''}`}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-center">{plan.title}</h3>
                <div className="mb-6 text-center">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-gray-500 text-xl">{plan.period}</span>
                </div>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center">
                        <FiCheck className="text-white stroke-2" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={plan.link} className={`block w-full py-3 px-6 rounded-lg font-semibold text-lg text-center transition-colors duration-300 ${plan.highlighted ? 'bg-black text-white hover:bg-gray-800' : 'bg-blue-500 text-white hover:bg-blue-600'}`}>
                  {plan.cta}
                </a>
                <div className="text-center mt-4">
                  <a href="https://cal.com/danielbryte/15min" className="text-blue-500 hover:text-blue-600 font-medium underline">Book a call</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
