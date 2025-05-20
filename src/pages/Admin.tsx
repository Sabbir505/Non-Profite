import React, { useState } from 'react';
import { Download, Send, User, Calendar, X } from 'lucide-react';
import Button from '../components/ui/Button';
import Card, { CardHeader, CardBody } from '../components/ui/Card';
import Input from '../components/ui/Input';

// Mock data for demonstration
const mockSignups = [
  { id: '1', fullName: 'John Doe', phoneNumber: '(201) 555-1234', email: 'john@example.com', mealsNeeded: 2, createdAt: '2023-05-01T12:00:00Z' },
  { id: '2', fullName: 'Jane Smith', phoneNumber: '(973) 555-5678', email: 'jane@example.com', mealsNeeded: 4, createdAt: '2023-05-02T14:30:00Z' },
  { id: '3', fullName: 'Michael Johnson', phoneNumber: '(862) 555-9012', email: 'michael@example.com', mealsNeeded: 1, createdAt: '2023-05-03T09:15:00Z' },
  { id: '4', fullName: 'Emily Williams', phoneNumber: '(732) 555-3456', email: 'emily@example.com', mealsNeeded: 3, createdAt: '2023-05-03T16:45:00Z' },
  { id: '5', fullName: 'David Brown', phoneNumber: '(609) 555-7890', email: 'david@example.com', mealsNeeded: 2, createdAt: '2023-05-04T11:20:00Z' },
];

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'signups' | 'messages'>('signups');
  const [signups, setSignups] = useState(mockSignups);
  const [searchTerm, setSearchTerm] = useState('');
  const [messageSubject, setMessageSubject] = useState('');
  const [messageBody, setMessageBody] = useState('');
  const [messageType, setMessageType] = useState<'email' | 'sms' | 'both'>('both');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleTabChange = (tab: 'signups' | 'messages') => {
    setActiveTab(tab);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredSignups = signups.filter((signup) => 
    signup.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    signup.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    signup.phoneNumber.includes(searchTerm)
  );

  const handleDownloadCSV = () => {
    // In a real application, this would generate a CSV from the data
    console.log('Downloading CSV of signups:', signups);
    alert('CSV download started (mock functionality)');
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!messageBody.trim()) {
      alert('Please enter a message body');
      return;
    }
    
    // In a real application, this would send the message via email, SMS, or both
    console.log('Sending message:', {
      subject: messageSubject,
      body: messageBody,
      type: messageType,
      recipients: signups.length,
    });
    
    alert(`Message sent to ${signups.length} recipients (mock functionality)`);
    
    // Reset form
    setMessageSubject('');
    setMessageBody('');
  };

  const handleAuthenticate = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For this demo, we're using a simple hardcoded password
    // In a real application, you would use a proper authentication system
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setPasswordError('');
    } else {
      setPasswordError('Invalid password. Please try again.');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="bg-gray-50 min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <h1 className="text-2xl font-bold text-gray-800">Admin Login</h1>
                <p className="text-gray-600 text-sm mt-1">
                  Please enter your password to access the admin area
                </p>
              </CardHeader>
              
              <CardBody>
                <form onSubmit={handleAuthenticate}>
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      className={`w-full px-4 py-2 rounded-lg border ${
                        passwordError ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    {passwordError && <p className="mt-1 text-sm text-red-500">{passwordError}</p>}
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Log In
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsAuthenticated(false)}
              icon={<X className="h-4 w-4" />}
            >
              Log Out
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="flex border-b border-gray-200">
              <button
                className={`flex-1 py-4 text-center font-medium transition-colors ${
                  activeTab === 'signups'
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => handleTabChange('signups')}
              >
                <User className="inline-block h-5 w-5 mr-2" />
                Meal Sign-Ups
              </button>
              <button
                className={`flex-1 py-4 text-center font-medium transition-colors ${
                  activeTab === 'messages'
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => handleTabChange('messages')}
              >
                <Send className="inline-block h-5 w-5 mr-2" />
                Send Messages
              </button>
            </div>

            <div className="p-6">
              {activeTab === 'signups' ? (
                <div>
                  <div className="flex flex-wrap items-center justify-between mb-6">
                    <div className="w-full md:w-auto mb-4 md:mb-0">
                      <input
                        type="text"
                        placeholder="Search by name, email, or phone"
                        className="w-full md:w-80 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        value={searchTerm}
                        onChange={handleSearch}
                      />
                    </div>
                    <Button
                      variant="outline"
                      onClick={handleDownloadCSV}
                      icon={<Download className="h-5 w-5" />}
                    >
                      Download CSV
                    </Button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Contact
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Meals
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredSignups.length > 0 ? (
                          filteredSignups.map((signup) => (
                            <tr key={signup.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="font-medium text-gray-900">{signup.fullName}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-gray-900">{signup.phoneNumber}</div>
                                <div className="text-gray-500 text-sm">{signup.email}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-gray-900">{signup.mealsNeeded}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                                {formatDate(signup.createdAt)}
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                              No sign-ups found matching your search.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 text-gray-600 text-sm">
                    Total meals needed: {signups.reduce((total, signup) => total + signup.mealsNeeded, 0)}
                  </div>
                </div>
              ) : (
                <div>
                  <form onSubmit={handleSendMessage}>
                    <Input
                      id="messageSubject"
                      label="Message Subject"
                      value={messageSubject}
                      onChange={(e) => setMessageSubject(e.target.value)}
                      placeholder="E.g., Reminder: Meal Pickup This Saturday"
                    />
                    
                    <div className="mb-4">
                      <label htmlFor="messageBody" className="block text-sm font-medium text-gray-700 mb-1">
                        Message Body <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="messageBody"
                        rows={6}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Type your message here..."
                        value={messageBody}
                        onChange={(e) => setMessageBody(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Send Via
                      </label>
                      <div className="flex space-x-4">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            className="form-radio text-orange-500"
                            name="messageType"
                            value="email"
                            checked={messageType === 'email'}
                            onChange={() => setMessageType('email')}
                          />
                          <span className="ml-2">Email Only</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            className="form-radio text-orange-500"
                            name="messageType"
                            value="sms"
                            checked={messageType === 'sms'}
                            onChange={() => setMessageType('sms')}
                          />
                          <span className="ml-2">SMS Only</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            className="form-radio text-orange-500"
                            name="messageType"
                            value="both"
                            checked={messageType === 'both'}
                            onChange={() => setMessageType('both')}
                          />
                          <span className="ml-2">Both</span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-gray-600">
                        Recipients: {signups.length}
                      </div>
                      <Button
                        type="submit"
                        icon={<Send className="h-5 w-5" />}
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>

                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Message Templates</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button
                        className="text-left p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-sm transition-all"
                        onClick={() => {
                          setMessageSubject('Reminder: Meal Pickup Tomorrow');
                          setMessageBody('Hello,\n\nThis is a friendly reminder that meal pickup is tomorrow (Saturday) from 11 AM to 2 PM at 123 Main Street, Newark.\n\nWe look forward to seeing you!\n\nNewark Meals Team');
                        }}
                      >
                        <div className="flex items-center mb-2">
                          <Calendar className="h-5 w-5 text-orange-500 mr-2" />
                          <h4 className="font-medium">Weekly Reminder</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Remind recipients about tomorrow's meal pickup.
                        </p>
                      </button>
                      
                      <button
                        className="text-left p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-sm transition-all"
                        onClick={() => {
                          setMessageSubject('Important: Schedule Change');
                          setMessageBody('Hello,\n\nWe need to inform you about a change to our usual schedule.\n\nThis Saturday, meal pickup will be from 12 PM to 3 PM (one hour later than usual) due to a community event.\n\nWe apologize for any inconvenience.\n\nNewark Meals Team');
                        }}
                      >
                        <div className="flex items-center mb-2">
                          <Calendar className="h-5 w-5 text-orange-500 mr-2" />
                          <h4 className="font-medium">Schedule Change</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Notify recipients about a change in pickup schedule.
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;