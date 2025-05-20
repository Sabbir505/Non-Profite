import React, { useState } from 'react';
import { ExternalLink, DollarSign, Gift, Check } from 'lucide-react';
import Button from '../components/ui/Button';
import Card, { CardBody, CardHeader } from '../components/ui/Card';
import Input from '../components/ui/Input';

const Donate: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'money' | 'items'>('money');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    items: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleTabChange = (tab: 'money' | 'items') => {
    setActiveTab(tab);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (activeTab === 'items' && !formData.items.trim()) {
      newErrors.items = 'Please describe what you would like to donate';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Donation form submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          fullName: '',
          email: '',
          items: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };

  const paymentOptions = [
    {
      name: 'PayPal',
      logo: '💰',
      url: 'https://paypal.me/newarkmeals',
    },
    {
      name: 'Venmo',
      logo: '📱',
      url: 'https://venmo.com/newarkmeals',
    },
    {
      name: 'CashApp',
      logo: '💵',
      url: 'https://cash.app/$newarkmeals',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Support Our Mission</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your generosity makes our program possible. Every contribution, no matter the size, 
              helps us provide nutritious meals to those in need in our community.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
            <div className="flex border-b border-gray-200">
              <button
                className={`flex-1 py-4 text-center font-medium transition-colors ${
                  activeTab === 'money'
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => handleTabChange('money')}
              >
                <DollarSign className="inline-block h-5 w-5 mr-2" />
                Donate Money
              </button>
              <button
                className={`flex-1 py-4 text-center font-medium transition-colors ${
                  activeTab === 'items'
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => handleTabChange('items')}
              >
                <Gift className="inline-block h-5 w-5 mr-2" />
                Donate Items
              </button>
            </div>

            <div className="p-6">
              {activeTab === 'money' ? (
                <div>
                  <p className="text-gray-600 mb-6">
                    Your financial contributions help us purchase food, supplies, and maintain our operations.
                    Choose your preferred payment method below.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {paymentOptions.map((option) => (
                      <a
                        key={option.name}
                        href={option.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block border border-gray-200 rounded-lg p-6 text-center hover:border-orange-500 hover:shadow-md transition-all"
                      >
                        <div className="text-3xl mb-3">{option.logo}</div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{option.name}</h3>
                        <p className="text-sm text-blue-600 flex items-center justify-center">
                          Donate <ExternalLink className="h-4 w-4 ml-1" />
                        </p>
                      </a>
                    ))}
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">How Your Donation Helps</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>$10 helps provide meals for one person for a week</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>$25 helps feed a family of four for one Saturday</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>$100 supports our operations for an entire Saturday</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div>
                  {isSuccess ? (
                    <div className="text-center py-6">
                      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <Check className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                      <p className="text-gray-600">
                        We appreciate your generous offer to donate items. We'll contact you soon with more details.
                      </p>
                    </div>
                  ) : (
                    <>
                      <p className="text-gray-600 mb-6">
                        We accept donations of non-perishable food items, utensils, and containers.
                        Please fill out the form below to let us know what you would like to donate.
                      </p>

                      <form onSubmit={handleSubmit}>
                        <Input
                          id="fullName"
                          name="fullName"
                          label="Full Name"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          error={errors.fullName}
                        />

                        <Input
                          id="email"
                          name="email"
                          label="Email Address"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          error={errors.email}
                        />

                        <div className="mb-4">
                          <label htmlFor="items" className="block text-sm font-medium text-gray-700 mb-1">
                            Items to Donate <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="items"
                            name="items"
                            rows={3}
                            className={`w-full px-4 py-2 rounded-lg border ${
                              errors.items ? 'border-red-500' : 'border-gray-300'
                            } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                            placeholder="Please describe what you would like to donate"
                            value={formData.items}
                            onChange={handleChange}
                            required
                          ></textarea>
                          {errors.items && <p className="mt-1 text-sm text-red-500">{errors.items}</p>}
                        </div>

                        <div className="mb-4">
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Additional Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={3}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            placeholder="Any additional information about your donation"
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Donation Offer'}
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-800">Our Impact</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 mb-4">
                  With your support, we've been able to make a significant difference in our community:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Served over 15,000 meals since 2020</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Support approximately 150 individuals each week</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Expanded from 20 to 150+ weekly recipients</span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-800">Other Ways to Help</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 mb-4">
                  Beyond donations, there are many ways you can support our mission:
                </p>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-medium text-gray-800">Volunteer Your Time</h4>
                    <p className="text-gray-600 text-sm">
                      Join our team of volunteers to help prepare and distribute meals.
                    </p>
                    <Button href="/volunteer" variant="text" className="mt-1 p-0">
                      Learn more
                    </Button>
                  </li>
                  <li>
                    <h4 className="font-medium text-gray-800">Spread the Word</h4>
                    <p className="text-gray-600 text-sm">
                      Follow us on social media and share our mission with your network.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-medium text-gray-800">Corporate Partnerships</h4>
                    <p className="text-gray-600 text-sm">
                      Explore partnership opportunities for your business or organization.
                    </p>
                    <Button href="/partnerships" variant="text" className="mt-1 p-0">
                      Contact us
                    </Button>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;