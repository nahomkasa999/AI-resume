"use client";
import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const pricingTiers = [
    {
      name: "Free",
      price: {
        monthly: 0,
        annual: 0
      },
      description: "Perfect for getting started",
      features: [
        "1 resume template",
        "Basic customization",
        "Download as PDF",
        "14-day access",
        "Email support"
      ],
      buttonText: "Get Started",
      buttonStyle: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
    },
    {
      name: "Professional",
      price: {
        monthly: 15.99,
        annual: 9.99
      },
      description: "Everything you need to land your dream job",
      features: [
        "All resume templates",
        "Advanced customization",
        "Multiple download formats",
        "Unlimited access",
        "Priority support",
        "Cover letter builder",
        "AI content suggestions",
        "Multiple profiles"
      ],
      buttonText: "Start Free Trial",
      buttonStyle: "bg-blue-600 text-white hover:bg-blue-700",
      popular: true
    },
    {
      name: "Enterprise",
      price: {
        monthly: 29.99,
        annual: 19.99
      },
      description: "For teams and businesses",
      features: [
        "Everything in Professional",
        "Team collaboration",
        "Custom branding",
        "Analytics dashboard",
        "API access",
        "Dedicated account manager",
        "Custom templates",
        "Bulk generation"
      ],
      buttonText: "Contact Sales",
      buttonStyle: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id='pricing'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose the perfect plan for your needs
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-blue-600"
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
              <span className="ml-1.5 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                Save 40%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl bg-white p-8 shadow-lg ${
                tier.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {tier.popular && (
                <span className="absolute top-0 -translate-y-1/2 bg-blue-600 text-white px-3 py-0.5 text-sm font-semibold rounded-full">
                  Most Popular
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tier.name}</h3>
                <p className="text-gray-500 mb-6">{tier.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isAnnual ? tier.price.annual : tier.price.monthly}
                  </span>
                  <span className="ml-1 text-gray-500">/month</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-gray-500 mt-1">
                    Billed annually (${(isAnnual ? tier.price.annual : tier.price.monthly * 12).toFixed(2)}/year)
                  </p>
                )}
              </div>

              <button
                className={`w-full rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-200 ${tier.buttonStyle}`}
              >
                {tier.buttonText}
              </button>

              <ul className="mt-8 space-y-4">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            30-day money-back guarantee • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 