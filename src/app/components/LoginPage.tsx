import { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import BrowserHeader from './BrowserHeader';

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');

  return (
    <div className="min-h-screen bg-gray-100">
      <BrowserHeader url="https://koreanembassynepal.org/login" />
      
      {/* Date/Time */}
      <div className="bg-white border-b border-gray-200 px-8 py-2">
        <p className="text-sm">March 8, 2025 at 11:21:24 AM</p>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Emblem_of_South_Korea.svg/200px-Emblem_of_South_Korea.svg.png" 
                alt="Embassy Logo" 
                className="w-16 h-16"
              />
              <div>
                <h1 className="font-bold">주네팔 대한민국 대사관</h1>
                <p className="text-sm">Embassy of the Republic of Korea in Nepal</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <select className="border border-gray-300 rounded px-3 py-1.5 text-sm">
                <option>us English</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-8 py-3">
            <button className="text-sm hover:text-blue-600">Register</button>
            <button className="text-sm border-b-2 border-blue-600">Login</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Panel - Basic Information */}
          <div className="bg-white rounded-lg border border-gray-300 p-8">
            <h2 className="font-bold mb-4">Basic Information</h2>
            
            <div className="space-y-4 text-sm">
              <p>
                Welcome to the Appointment Booking System of Embassy of the Republic of Korea in Nepal. Through this platform, you can schedule appointments for various embassy services. Kindly adhere to the following guidelines to ensure a smooth and efficient process.
              </p>

              <div>
                <p className="font-semibold">Account Registration:</p>
                <p>Applicants must register using their own email address and phone number. The use of someone else's contact information is strictly prohibited.</p>
              </div>

              <div>
                <p className="font-semibold">Appointment for underaged children or accompanied parents aged 65 or more:</p>
                <p>Once an appointment is made, please send an email to <span className="text-blue-600">nep_visa@mofa.go.kr</span> with a copy of relationship certificate and details of your group application. Otherwise, an appointment is required for each applicant. For example, if a couple apply for a visa at the same time, they need to make two appointments.</p>
              </div>

              <div>
                <p className="font-semibold">Recommended Browsers:</p>
                <p>For optimal performance, please use <span className="font-semibold">Chrome</span> or <span className="font-semibold">Edge</span>. Other browsers may not function properly, and some are blocked.</p>
              </div>

              <div>
                <p className="font-semibold">Incognito Mode:</p>
                <p>Accessing the application through incognito or private mode is not permitted.</p>
              </div>

              <div>
                <p className="font-semibold">Data Collection:</p>
                <p>The system collects user information such as IP addresses and other user data for analysis. Any attempt to bypass the system will blacklist the users.</p>
              </div>

              <div>
                <p className="font-semibold">Blacklisted Accounts:</p>
                <p>Accounts that are blacklisted will be prohibited from booking</p>
              </div>
            </div>
          </div>

          {/* Right Panel - Login Form */}
          <div className="bg-white rounded-lg border border-gray-300 p-8">
            <h2 className="font-bold mb-6">Login</h2>
            
            <div className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E.g. john.doe@example.com"
                    className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    <div className="w-4 h-0.5 bg-gray-400"></div>
                    <div className="w-4 h-4 border-2 border-gray-400 rounded-sm"></div>
                  </div>
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm"
                />
                <a href="#" className="text-sm text-blue-600 hover:underline mt-2 inline-block">
                  Forgot Password?
                </a>
              </div>

              {/* Captcha */}
              <div>
                <label className="block text-sm font-medium mb-2">Please Verify Captcha</label>
                <div className="flex items-center gap-3 mb-3">
                  {/* Captcha Image */}
                  <div className="flex-1 bg-white border-2 border-gray-300 rounded px-4 py-3 relative">
                    <svg viewBox="0 0 200 60" className="w-full h-12">
                      <text
                        x="10"
                        y="40"
                        className="fill-red-600"
                        style={{
                          fontSize: '32px',
                          fontFamily: 'cursive',
                          fontWeight: 'bold',
                          transform: 'rotate(-5deg)',
                          transformOrigin: 'center'
                        }}
                      >
                        hktth
                      </text>
                      <line x1="0" y1="30" x2="200" y2="35" stroke="#e53e3e" strokeWidth="2" />
                    </svg>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <RefreshCw className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex gap-3">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={captcha}
                      onChange={(e) => setCaptcha(e.target.value)}
                      placeholder="Enter Captcha"
                      className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm"
                    />
                  </div>
                  <div className="text-sm text-gray-600 flex items-center px-3 bg-gray-50 border border-gray-300 rounded">
                    ⏱️2:15
                  </div>
                  <button className="bg-blue-700 text-white px-6 py-2.5 rounded hover:bg-blue-800 text-sm font-medium">
                    Verify
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button
                onClick={onLogin}
                className="w-full bg-gray-400 text-white py-3 rounded hover:bg-gray-500 font-medium"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
