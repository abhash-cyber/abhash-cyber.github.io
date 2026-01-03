import { useState } from 'react';
import { ChevronLeft, ChevronRight, RefreshCw, Info } from 'lucide-react';
import BrowserHeader from './BrowserHeader';

interface AppointmentFormProps {
  onBack: () => void;
  onComplete: () => void;
  onSelectSlot: (slot: string) => void;
}

export default function AppointmentForm({ onBack, onComplete, onSelectSlot }: AppointmentFormProps) {
  const [email, setEmail] = useState('friendzf264@gmail.com');
  const [phone, setPhone] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState({ date: '', startTime: '', endTime: '' });
  const [captchaInput, setCaptchaInput] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [step, setStep] = useState(1);
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [passportExpiry, setPassportExpiry] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2025);
  
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const daysInMonth = [
    { day: 1, type: 'weekend' },
    { day: 2, type: 'regular' },
    { day: 3, type: 'available' },
    { day: 4, type: 'available' },
    { day: 5, type: 'available' },
    { day: 6, type: 'available' },
    { day: 7, type: 'available' },
    { day: 8, type: 'available' },
    { day: 9, type: 'regular' },
    { day: 10, type: 'available' },
    { day: 11, type: 'available' },
    { day: 12, type: 'available' },
    { day: 13, type: 'holiday' },
    { day: 14, type: 'available' },
    { day: 15, type: 'weekend' },
    { day: 16, type: 'regular' },
    { day: 17, type: 'available' },
    { day: 18, type: 'available' },
    { day: 19, type: 'available' },
    { day: 20, type: 'available' },
    { day: 21, type: 'available' },
    { day: 22, type: 'weekend' },
    { day: 23, type: 'regular' },
    { day: 24, type: 'available' },
    { day: 25, type: 'available' },
    { day: 26, type: 'available' },
    { day: 27, type: 'available' },
    { day: 28, type: 'available' },
    { day: 29, type: 'weekend' },
    { day: 30, type: 'regular' },
    { day: 31, type: 'holiday' },
  ];

  const handleBookAppointment = () => {
    setShowModal(false);
    onComplete()
  };

  const handleConfirmVerify = () => {
    setShowConfirmModal(false);
    handleSlotClick('', '', '');
  };

  const handleSlotClick = (date: string, startTime: string, endTime: string) => {
    setSelectedSlot({ date, startTime, endTime });
    setShowModal(true);
    onSelectSlot(selectedSlot.startTime); 
  };

  const getDayClass = (day: typeof daysInMonth[0]) => {
    const baseClass = 'w-10 h-10 flex items-center justify-center rounded text-sm font-medium';
    
    if (day.type === 'weekend') {
      return `${baseClass} bg-red-200 text-red-800`;
    }
    if (day.type === 'holiday') {
      return `${baseClass} bg-red-800 text-white`;
    }
    if (day.type === 'available') {
      return `${baseClass} border-2 border-blue-600 text-blue-600 cursor-pointer hover:bg-blue-50`;
    }
    return `${baseClass} text-gray-400`;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <BrowserHeader url="https://koreanembassynepal.org/dashboard/appointment?date=2025-03-14&calendar-month=2025-03-08" />
      
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <div className="w-80">
            <div className="bg-white rounded-lg border border-gray-300 p-6">
              {/* Calendar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold">March 2025</h3>
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {daysOfWeek.map((day) => (
                    <div key={day} className="text-center text-xs font-semibold text-gray-600 py-1">
                      {day}
                    </div>
                  ))}
                  {daysInMonth.map((day, idx) => (
                    <div key={idx} className="flex justify-center">
                      <button className={getDayClass(day)}>
                        {day.day}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-blue-600 rounded"></div>
                  <span className="text-xs">Today</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-200 rounded"></div>
                  <span className="text-xs">Appointment Slots</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-800 rounded"></div>
                  <span className="text-xs">Holidays</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-200 rounded"></div>
                  <span className="text-xs">Weekend Days</span>
                </div>
              </div>

              {/* Instagram Badge */}
              {step >= 2 && (
                <div className="mt-6">
                  <div className="relative bg-white rounded-lg shadow-lg p-3 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center">
                        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 px-2 py-0.5 rounded-full inline-block mb-1">
                          FOLLOW ME
                        </div>
                        <div className="font-bold">unique_kura</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content - Form */}
          <div className="flex-1">
            <div className="bg-white rounded-lg border border-gray-300">
              {/* Success Message */}
              {step >= 2 && (
                <div className="bg-green-50 border-b border-green-200 p-3 flex items-center justify-between">
                  <div></div>
                  <div className="flex items-center gap-2 text-green-700">
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold text-sm">
                      {step === 2 ? 'Email verified successfully' : 'Phone verified successfully'}
                    </span>
                  </div>
                  <div></div>
                </div>
              )}

              {/* Info Banner */}
              <div className="bg-blue-50 border-b border-blue-200 p-4 flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-900">
                  Please verify the following details to make an appointment
                </p>
              </div>

              {/* Steps */}
              <div className="border-b border-gray-200 px-8 py-6">
                <div className="flex items-center justify-center gap-8">
                  {/* Step 1 */}
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                      step >= 1 ? 'bg-green-500 text-white' : 'bg-gray-300 text-white'
                    }`}>
                      {step > 1 ? '✓' : '1'}
                    </div>
                    <span className={step >= 1 ? 'font-semibold' : 'text-gray-400'}>Email</span>
                  </div>

                  <div className={`w-16 h-0.5 ${step >= 2 ? 'bg-green-500' : 'bg-gray-300'}`}></div>

                  {/* Step 2 */}
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                      step >= 2 ? 'bg-green-500 text-white' : 'bg-gray-300 text-white'
                    }`}>
                      {step > 2 ? '✓' : '2'}
                    </div>
                    <span className={step >= 2 ? 'font-semibold' : 'text-gray-400'}>Phone</span>
                  </div>

                  <div className={`w-16 h-0.5 ${step >= 3 ? 'bg-green-500' : 'bg-gray-300'}`}></div>

                  {/* Step 3 */}
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                      step >= 3 ? 'bg-gray-400 text-white' : 'bg-gray-300 text-white'
                    }`}>
                      3
                    </div>
                    <span className={step >= 3 ? 'font-semibold' : 'text-gray-400'}>Details</span>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8 space-y-6">
                {/* Step 1: Email */}
                {step === 1 && (
                  <>
                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm bg-gray-50"
                        readOnly
                      />
                    </div>

                    {/* Captcha Section */}
                    <div>
                      <label className="block text-sm font-semibold mb-3">Please Verify Captcha</label>
                      
                      <div className="flex items-center gap-3 mb-3">
                        {/* Captcha Image */}
                        <div className="flex-1 bg-white border-2 border-gray-300 rounded px-4 py-3">
                          <svg viewBox="0 0 200 60" className="w-full h-12">
                            <text
                              x="10"
                              y="40"
                              className="fill-green-600"
                              style={{
                                fontSize: '32px',
                                fontFamily: 'cursive',
                                fontWeight: 'bold',
                                transform: 'rotate(-3deg)',
                                transformOrigin: 'center'
                              }}
                            >
                              nkkib
                            </text>
                            <line x1="0" y1="28" x2="200" y2="32" stroke="#16a34a" strokeWidth="2" />
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
                        <button className="bg-blue-700 text-white px-6 py-2.5 rounded hover:bg-blue-800 text-sm font-medium whitespace-nowrap">
                          Verify & Request OTP
                        </button>
                      </div>
                    </div>

                    {/* Verify Button */}
                    <div className="pt-4">
                      <button 
                        onClick={() => setStep(2)}
                        className="w-full bg-blue-400 text-white py-3 rounded hover:bg-blue-500 font-medium"
                      >
                        Verify
                      </button>
                    </div>
                  </>
                )}

                {/* Step 2: Phone */}
                {step === 2 && (
                  <>
                    {/* Phone Field */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone</label>
                      <input
                        type="tel"
                        value={phone || '9803228478'}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm"
                      />
                    </div>

                    {/* Captcha Section */}
                    <div>
                      <label className="block text-sm font-semibold mb-3">Please Verify Captcha</label>
                      
                      <div className="flex items-center gap-3 mb-3">
                        {/* Captcha Image */}
                        <div className="flex-1 bg-white border-2 border-gray-300 rounded px-4 py-3">
                          <svg viewBox="0 0 200 60" className="w-full h-12">
                            <text
                              x="10"
                              y="40"
                              className="fill-blue-600"
                              style={{
                                fontSize: '32px',
                                fontFamily: 'cursive',
                                fontWeight: 'bold',
                                transform: 'rotate(-2deg)',
                                transformOrigin: 'center'
                              }}
                            >
                              jkbr
                            </text>
                            <line x1="0" y1="28" x2="200" y2="32" stroke="#2563eb" strokeWidth="2" />
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
                            placeholder="Enter Captcha"
                            className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm"
                          />
                        </div>
                        <div className="text-sm text-gray-600 flex items-center px-3 bg-gray-50 border border-gray-300 rounded whitespace-nowrap">
                          ⏱️02:19
                        </div>
                        <button className="bg-blue-700 text-white px-6 py-2.5 rounded hover:bg-blue-800 text-sm font-medium whitespace-nowrap">
                          Verify & Request OTP
                        </button>
                      </div>
                    </div>

                    {/* Verify Button */}
                    <div className="pt-4">
                      <button 
                        onClick={() => setStep(3)}
                        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 font-medium"
                      >
                        Verify
                      </button>
                    </div>
                  </>
                )}

                {/* Step 3: Details */}
                {step === 3 && (
                  <>
                    {/* Date of Birth */}
                    <div className="relative">
                      <label className="block text-sm font-semibold mb-2">Date of Birth</label>
                      <input
                        type="text"
                        value={dateOfBirth}
                        onClick={() => setShowDatePicker(!showDatePicker)}
                        placeholder="Date of Birth"
                        className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm cursor-pointer"
                        readOnly
                      />
                      
                      {/* Date Picker Popup */}
                      {showDatePicker && (
                        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-xl z-50 p-4 w-80">
                          <div className="flex items-center justify-between mb-4">
                            <select 
                              value={selectedYear}
                              onChange={(e) => setSelectedYear(Number(e.target.value))}
                              className="border border-gray-300 rounded px-2 py-1 text-sm"
                            >
                              {Array.from({ length: 15 }, (_, i) => 2025 - i).map(year => (
                                <option key={year} value={year}>{year}</option>
                              ))}
                            </select>
                            <select className="border border-gray-300 rounded px-2 py-1 text-sm ml-2">
                              <option>March</option>
                            </select>
                            <div className="flex gap-1 ml-auto">
                              <button className="p-1 hover:bg-gray-100 rounded">
                                <ChevronLeft className="w-4 h-4" />
                              </button>
                              <button className="p-1 hover:bg-gray-100 rounded">
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-7 gap-1">
                            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                              <div key={day} className="text-center text-xs font-semibold py-1">{day}</div>
                            ))}
                            {[23, 24, 25, 26, 27, 28].map(day => (
                              <button key={`prev-${day}`} className="text-gray-400 text-sm p-2 hover:bg-gray-100 rounded">
                                {day}
                              </button>
                            ))}
                            {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                              <button 
                                key={day}
                                onClick={() => {
                                  setDateOfBirth(`March ${day}, ${selectedYear}`);
                                  setShowDatePicker(false);
                                }}
                                className="text-sm p-2 hover:bg-blue-100 rounded"
                              >
                                {day}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Passport Number */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Passport Number</label>
                      <input
                        type="text"
                        value={passportNumber}
                        onChange={(e) => setPassportNumber(e.target.value)}
                        placeholder="Passport Number"
                        className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm"
                      />
                    </div>

                    {/* Passport Expiry */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Passport Expiry</label>
                      <input
                        type="text"
                        value={passportExpiry}
                        onChange={(e) => setPassportExpiry(e.target.value)}
                        placeholder="Passport Expiry"
                        className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm"
                      />
                    </div>

                    {/* Verify Button */}
                    <div className="pt-4">
                      <button 
                        onClick={handleConfirmVerify}
                        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 font-medium"
                      >
                        Verify
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    
                {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full mx-4">
            <h2 className="font-bold mb-2">Are you Sure?</h2>
            <p className="text-sm text-gray-600 mb-6">
              Do you want to book the appointment for the following slot
            </p>

            {/* Appointment Details */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="space-y-1">
                <div className="flex gap-2">
                  <span className="font-semibold">Date:</span>
                  <span>{selectedSlot.date}</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold">Start Time:</span>
                  <span>{selectedSlot.startTime}</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold">End Time:</span>
                  <span>{selectedSlot.endTime}</span>
                </div>
              </div>
            </div>

            {/* Captcha Verified Badge */}
            <div className="mb-4">
              <div className="flex items-center gap-2 text-green-600 mb-3">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Captcha Verified</span>
              </div>

              {/* Captcha Input */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-1 bg-white border-2 border-gray-300 rounded px-4 py-2">
                  <svg viewBox="0 0 150 50" className="w-full h-10">
                    <text
                      x="10"
                      y="32"
                      className="fill-green-600"
                      style={{
                        fontSize: '24px',
                        fontFamily: 'cursive',
                        fontWeight: 'bold',
                        fontStyle: 'italic'
                      }}
                    >
                      aaor
                    </text>
                    <line x1="0" y1="20" x2="150" y2="28" stroke="#16a34a" strokeWidth="1.5" />
                  </svg>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded">
                  <RefreshCw className="w-5 h-5" />
                </button>
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  className="flex-1 border border-gray-300 rounded px-4 py-2 text-sm"
                />
                <div className="text-sm text-gray-600 flex items-center px-3 bg-gray-50 border border-gray-300 rounded">
                  04:00
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 text-sm font-medium">
                  Verify
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-3 rounded hover:bg-gray-50 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleBookAppointment}
                className="flex-1 bg-blue-600 text-white py-3 rounded hover:bg-blue-700 font-medium"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  
  );
}