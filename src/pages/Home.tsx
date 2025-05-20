import React from 'react';
import Hero from '../components/sections/Hero';
import MissionStatement from '../components/sections/MissionStatement';
import Card, { CardBody } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Calendar, Heart, Mail, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      <Hero
        title="Free Meals Every Saturday in Newark"
        subtitle="Join us for our weekly meal program. No questions asked, no registration required. Everyone is welcome."
        buttonText="Sign Up for Meals"
        buttonLink="/signup"
        secondaryButtonText="Donate Now"
        secondaryButtonLink="/donate"
      />

      <MissionStatement />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our meal program is designed to be simple, accessible, and dignified for everyone involved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardBody className="text-center p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Weekly Schedule</h3>
                <p className="text-gray-600">
                  We serve meals every Saturday from 11 AM to 2 PM at 123 Main Street, Newark.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="text-center p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Sign Up</h3>
                <p className="text-gray-600">
                  Sign up online or in person. Let us know how many meals you need for you or your family.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="text-center p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Stay Updated</h3>
                <p className="text-gray-600">
                  Receive reminders and updates about our program via email or text message.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="text-center p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Community</h3>
                <p className="text-gray-600">
                  Join our community of volunteers and recipients committed to fighting hunger together.
                </p>
              </CardBody>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button href="/signup" size="lg">
              Sign Up for Meals
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Want to Make a Difference?</h2>
            <p className="text-xl mb-8">
              Your donations and volunteer work help us provide free meals to those in need in our community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href="/donate" 
                variant="primary" 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Donate Now
              </Button>
              <Button 
                href="/volunteer" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Volunteer With Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;