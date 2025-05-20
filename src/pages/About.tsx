import React from 'react';
import Card, { CardBody } from '../components/ui/Card';
import { Users, Calendar, Heart, Coffee } from 'lucide-react';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Director',
      bio: 'Sarah founded Newark Meals in 2020 after witnessing food insecurity in her community during the pandemic.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Marcus Williams',
      role: 'Operations Manager',
      bio: 'Marcus oversees our weekly meal preparation and distribution, ensuring everything runs smoothly.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Volunteer Coordinator',
      bio: 'Elena manages our amazing volunteer team and helps new community members get involved.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">About Newark Meals</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn more about our mission, our team, and how we're working together to fight food insecurity in Newark.
            </p>
          </div>

          <section className="mb-16">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img
                    src="https://images.pexels.com/photos/6646907/pexels-photo-6646907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Volunteers preparing meals"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
                  <p className="text-gray-600 mb-4">
                    Newark Meals was founded in 2020 in response to the growing food insecurity in our community during the COVID-19 pandemic. 
                    What started as a small group of neighbors cooking meals for families in need has grown into a community-wide effort.
                  </p>
                  <p className="text-gray-600">
                    Today, we serve over 150 individuals every Saturday, providing nutritious, prepared meals to anyone who needs them—no questions asked. 
                    Our belief is simple: everyone deserves access to good food, and communities are stronger when we support each other.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardBody className="p-6">
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                      <Heart className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Dignity & Respect</h3>
                      <p className="text-gray-600">
                        We believe in treating everyone with dignity and respect. There are no complex eligibility requirements or intrusive questions—just good food for anyone who needs it.
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody className="p-6">
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                      <Users className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Community First</h3>
                      <p className="text-gray-600">
                        We're neighbors helping neighbors. Our program is run by the community, for the community, creating connections that go beyond just providing food.
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody className="p-6">
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                      <Calendar className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Reliability</h3>
                      <p className="text-gray-600">
                        We commit to being there every Saturday, rain or shine. Our community members know they can count on us for consistent support.
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody className="p-6">
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                      <Coffee className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality & Nutrition</h3>
                      <p className="text-gray-600">
                        We focus on providing balanced, nutritious meals. Food insecurity isn't just about hunger—it's about access to healthy, nourishing food.
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center mb-16">
            <div className="bg-orange-50 rounded-lg p-8 border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Our Mission</h2>
              <p className="text-gray-600 mb-6">
                We're always looking for passionate volunteers and donors to help us continue our work. 
                Whether you can spare a few hours or want to contribute financially, every bit helps.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/volunteer" variant="primary">
                  Volunteer With Us
                </Button>
                <Button href="/donate" variant="outline">
                  Support Our Work
                </Button>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-800 hover:text-orange-500">
                    Who can receive meals?
                    <span className="transition group-open:rotate-180">⌄</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    <p>
                      Anyone! Our program is open to all residents of Newark and surrounding areas, regardless of age, income, or status. 
                      We don't require any proof of need or documentation.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-800 hover:text-orange-500">
                    How many meals can I request?
                    <span className="transition group-open:rotate-180">⌄</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    <p>
                      You can request as many meals as your household needs. When signing up, simply indicate the number of meals required, 
                      and we'll have them ready for you.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-800 hover:text-orange-500">
                    What if I can't pick up my meals?
                    <span className="transition group-open:rotate-180">⌄</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    <p>
                      If you're unable to pick up your meals, please let us know as soon as possible. In some cases, we may be able to arrange 
                      delivery for those with mobility issues or other significant barriers to pickup.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-800 hover:text-orange-500">
                    How can I volunteer?
                    <span className="transition group-open:rotate-180">⌄</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    <p>
                      We welcome volunteers for meal preparation, distribution, delivery, and administrative support. Check our Volunteer page 
                      to see current opportunities and sign up for a shift.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;