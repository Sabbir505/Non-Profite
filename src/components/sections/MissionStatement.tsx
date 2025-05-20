import React from 'react';
import Card from '../ui/Card';

const MissionStatement: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 border-l-4 border-orange-500">
            <p className="text-xl text-gray-700 leading-relaxed italic">
              "At Newark Meals, we believe that everyone deserves access to nutritious food, regardless of their circumstances. 
              Our mission is to provide free, no-questions-asked meals every Saturday to anyone in need in the Newark community."
            </p>
            <p className="mt-6 text-gray-600">
              Since 2020, we've served over 15,000 meals to our neighbors in need. With your support, we can continue to fight food insecurity 
              and create a stronger, more resilient community where everyone has enough to eat.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-500">15,000+</p>
                <p className="text-gray-600">Meals Served</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-500">150+</p>
                <p className="text-gray-600">Weekly Recipients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-500">50+</p>
                <p className="text-gray-600">Volunteers</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;