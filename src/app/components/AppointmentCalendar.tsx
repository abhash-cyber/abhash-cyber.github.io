import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import BrowserHeader from './BrowserHeader';

interface AppointmentCalendarProps {
  onSelectDate: () => void;
  onBack: () => void;
}

export default function AppointmentCalendar({ onSelectDate, onBack }: AppointmentCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

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
      <BrowserHeader url="https://koreanembassynepal.org/dashboard/appointment" />
      
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <div className="w-80">
            <div className="bg-white rounded-lg border border-gray-300 p-6">
              {/* Service Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Select<br />Service
                </label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
                  <option>VISA</option>
                </select>
              </div>

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
                      <button
                        className={getDayClass(day)}
                        onClick={() => {
                          if (day.type === 'available') {
                            setSelectedDate(day.day);
                            onSelectDate();
                          }
                        }}
                      >
                        {day.day}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-2">
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
            </div>
          </div>

          {/* Main Content - Empty State */}
          <div className="flex-1">
            <div className="bg-white rounded-lg border border-gray-300 p-8">
              <div className="flex items-center gap-3 mb-8">
                <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <h2 className="text-xl font-bold">Timeslots for Mar 8, 2025</h2>
              </div>

              {/* Empty State Illustration */}
              <div className="flex items-center justify-center py-16">
                <div className="text-center">
                  <div className="relative w-96 h-80 mx-auto mb-4">
                    {/* Cloud shapes */}
                    <svg viewBox="0 0 400 300" className="w-full h-full">
                      {/* Background cloud - light blue */}
                      <ellipse cx="320" cy="100" rx="80" ry="60" fill="#dbeafe" opacity="0.6" />
                      
                      {/* Main cloud - larger */}
                      <ellipse cx="280" cy="140" rx="120" ry="80" fill="#bfdbfe" opacity="0.8" />
                      <ellipse cx="220" cy="160" rx="90" ry="70" fill="#bfdbfe" opacity="0.8" />
                      
                      {/* Dashed circles */}
                      <circle cx="120" cy="100" r="30" fill="none" stroke="#93c5fd" strokeWidth="2" strokeDasharray="5,5" />
                      <circle cx="340" cy="80" r="20" fill="none" stroke="#93c5fd" strokeWidth="2" strokeDasharray="5,5" />
                      
                      {/* Calendar icon */}
                      <g transform="translate(150, 120)">
                        {/* Calendar base */}
                        <rect x="0" y="30" width="100" height="80" rx="5" fill="#3b82f6" />
                        
                        {/* Calendar rings */}
                        <rect x="15" y="20" width="8" height="20" rx="4" fill="#6b7280" />
                        <rect x="38" y="20" width="8" height="20" rx="4" fill="#6b7280" />
                        <rect x="61" y="20" width="8" height="20" rx="4" fill="#6b7280" />
                        <rect x="84" y="20" width="8" height="20" rx="4" fill="#6b7280" />
                        
                        {/* Calendar grid */}
                        <rect x="10" y="45" width="12" height="10" rx="2" fill="white" opacity="0.3" />
                        <rect x="26" y="45" width="12" height="10" rx="2" fill="white" opacity="0.3" />
                        <rect x="42" y="45" width="12" height="10" rx="2" fill="white" opacity="0.3" />
                        <rect x="58" y="45" width="12" height="10" rx="2" fill="white" opacity="0.3" />
                        <rect x="74" y="45" width="12" height="10" rx="2" fill="white" opacity="0.3" />
                        
                        <rect x="10" y="60" width="12" height="10" rx="2" fill="white" opacity="0.3" />
                        <rect x="26" y="60" width="12" height="10" rx="2" fill="white" opacity="0.3" />
                        <rect x="42" y="60" width="12" height="10" rx="2" fill="white" opacity="0.3" />
                        <rect x="58" y="60" width="12" height="10" rx="2" fill="white" opacity="0.3" />
                        <rect x="74" y="60" width="12" height="10" rx="2" fill="white" opacity="0.3" />
                        
                        <rect x="10" y="75" width="12" height="10" rx="2" fill="white" opacity="0.3" />
                        <rect x="26" y="75" width="12" height="10" rx="2" fill="white" opacity="0.3" />
                        <rect x="42" y="75" width="12" height="10" rx="2" fill="white" opacity="0.3" />
                        <rect x="58" y="75" width="12" height="10" rx="2" fill="white" opacity="0.3" />
                        <rect x="74" y="75" width="12" height="10" rx="2" fill="white" opacity="0.3" />
                        
                        <rect x="10" y="90" width="12" height="10" rx="2" fill="white" opacity="0.3" />
                        <rect x="26" y="90" width="12" height="10" rx="2" fill="white" opacity="0.3" />
                        <rect x="42" y="90" width="12" height="10" rx="2" fill="white" opacity="0.3" />
                      </g>
                      
                      {/* X mark circle */}
                      <circle cx="320" cy="180" r="35" fill="white" stroke="#3b82f6" strokeWidth="3" />
                      <g transform="translate(320, 180)">
                        <line x1="-15" y1="-15" x2="15" y2="15" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
                        <line x1="15" y1="-15" x2="-15" y2="15" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
                      </g>
                      
                      {/* Person illustration */}
                      <g transform="translate(60, 200)">
                        {/* Head */}
                        <circle cx="0" cy="-20" r="15" fill="#ef4444" />
                        {/* Hair */}
                        <path d="M -12,-25 Q -15,-30 -10,-32 Q -5,-35 0,-33 Q 5,-35 10,-32 Q 15,-30 12,-25" fill="#991b1b" />
                        
                        {/* Body */}
                        <ellipse cx="0" cy="10" rx="25" ry="30" fill="#ef4444" />
                        
                        {/* Arms */}
                        <path d="M -20,0 Q -35,5 -40,15" stroke="#ef4444" strokeWidth="8" fill="none" strokeLinecap="round" />
                        <path d="M 20,0 Q 35,5 40,15" stroke="#ef4444" strokeWidth="8" fill="none" strokeLinecap="round" />
                        
                        {/* Hands */}
                        <ellipse cx="-40" cy="15" rx="6" ry="8" fill="#fca5a5" />
                        <ellipse cx="40" cy="15" rx="6" ry="8" fill="#fca5a5" />
                        
                        {/* Skirt/Legs */}
                        <path d="M -25,35 L -20,60 M 25,35 L 20,60" stroke="#1e40af" strokeWidth="10" strokeLinecap="round" />
                        <polygon points="-25,35 25,35 30,50 -30,50" fill="#1e40af" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
