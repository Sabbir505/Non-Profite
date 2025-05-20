import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card, { CardHeader, CardBody, CardFooter } from '../components/ui/Card';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    mealsNeeded: 1,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear the error for this field if it exists
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
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formData.mealsNeeded < 1) {
      newErrors.mealsNeeded = 'Please enter at least 1 meal';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // Here you would normally send data to your backend or Google Sheets
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          mealsNeeded: 1,
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Sign Up for Meals</h1>
            <p className="text-gray-600">
              Fill out this form to request meals for yourself or your family. 
              We'll prepare everything and have it ready for pickup on Saturday.
            </p>
          </div>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold text-gray-800">Meal Request Form</h2>
              <p className="text-sm text-gray-600 mt-1">
                All fields marked with * are required
              </p>
            </CardHeader>
            
            <CardBody>
              {isSuccess ? (
                <div className="text-center py-6">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Request Submitted!</h3>
                  <p className="text-gray-600">
                    Thank you for your meal request. We'll prepare {formData.mealsNeeded} meal(s) for pickup this Saturday.
                  </p>
                </div>
              ) : (
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
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    error={errors.phoneNumber}
                    placeholder="(201) 555-1234"
                  />
                  
                  <Input
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="you@example.com"
                  />
                  
                  <Input
                    id="mealsNeeded"
                    name="mealsNeeded"
                    label="Number of Meals Needed"
                    type="number"
                    value={formData.mealsNeeded}
                    onChange={handleChange}
                    required
                    error={errors.mealsNeeded}
                    min={1}
                    max={10}
                  />
                  
                  <div className="mt-6">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Sign Up for Meals'}
                    </Button>
                  </div>
                </form>
              )}
            </CardBody>
            
            <CardFooter>
              <p className="text-sm text-gray-600">
                By submitting this form, you'll be added to our meal recipient list. 
                We may contact you with updates about our program. Your information is kept confidential.
              </p>
            </CardFooter>
          </Card>
          
          <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Weekly Pickup Details</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>When:</strong> Every Saturday, 11 AM to 2 PM</li>
              <li><strong>Where:</strong> 123 Main Street, Newark, NJ</li>
              <li><strong>What to bring:</strong> Just yourself! We'll have your meals ready.</li>
              <li><strong>Questions?</strong> Call us at (201) 555-1234</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;