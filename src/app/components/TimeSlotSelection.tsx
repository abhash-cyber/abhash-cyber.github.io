import { useState } from 'react';
import { ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';
import BrowserHeader from './BrowserHeader';

interface TimeSlotSelectionProps {
  onSelectSlot: (slot: string) => void;
  onBack: () => void;
}

export default function TimeSlotSelection({ onSelectSlot, onBack }: TimeSlotSelectionProps) {
  const [showModal, setShowModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState({ date: '', startTime: '', endTime: '' });
  

  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const daysInMonth = [
    { day: 1, type: 'available', isToday: false },
    { day: 2, type: 'weekend', isToday: false },
    { day: 3, type: 'available', isToday: false },
    { day: 4, type: 'available', isToday: false },
    { day: 5, type: 'available', isToday: true },
    { day: 6, type: 'available', isToday: false },
    { day: 7, type: 'available', isToday: false },
    { day: 8, type: 'available', isToday: false },
    { day: 9, type: 'weekend', isToday: false },
    { day: 10, type: 'available', isToday: false },
    { day: 11, type: 'available', isToday: false },
    { day: 12, type: 'available', isToday: false },
    { day: 13, type: 'holiday', isToday: false },
    { day: 14, type: 'available', isToday: false },
    { day: 15, type: 'weekend', isToday: false },
    { day: 16, type: 'weekend', isToday: false },
    { day: 17, type: 'available', isToday: false },
    { day: 18, type: 'available', isToday: false },
    { day: 19, type: 'available', isToday: false },
    { day: 20, type: 'available', isToday: false },
    { day: 21, type: 'available', isToday: false },
    { day: 22, type: 'weekend', isToday: false },
    { day: 23, type: 'weekend', isToday: false },
    { day: 24, type: 'available', isToday: false },
    { day: 25, type: 'available', isToday: false },
    { day: 26, type: 'available', isToday: false },
    { day: 27, type: 'available', isToday: false },
    { day: 28, type: 'available', isToday: false },
    { day: 29, type: 'weekend', isToday: false },
    { day: 30, type: 'weekend', isToday: false },
    { day: 31, type: 'holiday', isToday: false },
  ];

  const getDayClass = (day: typeof daysInMonth[0]) => {
    const baseClass = 'w-10 h-10 flex items-center justify-center rounded text-sm font-medium';
    
    if (day.isToday) {
      return `${baseClass} border-2 border-blue-600 bg-blue-600 text-white font-bold`;
    }
    if (day.type === 'weekend') {
      return `${baseClass} bg-red-200 text-red-800`;
    }
    if (day.type === 'holiday') {
      return `${baseClass} bg-red-800 text-white`;
    }
    if (day.type === 'available') {
      return `${baseClass} border border-blue-400 text-blue-600 cursor-pointer hover:bg-blue-50`;
    }
    return `${baseClass} text-gray-400`;
  };

  const handleSlotClick = (date: string, startTime: string, endTime: string) => {
    setSelectedSlot({ date, startTime, endTime });
    setShowModal(true);
    onSelectSlot(selectedSlot.startTime); 
  };

  const handleBookAppointment = () => {
    setShowModal(false);
    onSelectSlot(selectedSlot.startTime);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <BrowserHeader url="https://koreanembassynepal.org/dashboard/appointment?date=2025-03-14&calendar-month=2025-03-08" />
      
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
                <div className="relative">
                  <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm appearance-none">
                    <option>VISA</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
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
                      <button className={getDayClass(day)}>
                        {day.day}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-blue-600 bg-blue-600 rounded"></div>
                  <span className="text-xs">Today</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border border-blue-400 rounded"></div>
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

          {/* Main Content - Time Slots */}
          <div className="flex-1">
            <div className="bg-white rounded-lg border border-gray-300 p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold">Timeslots for Mar 14, 2025</h2>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm">Closed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Open</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                      <span className="text-sm">All Booked</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slot Opening Time */}
              <div className="flex items-center gap-3 mb-8 bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <div>
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    Slot Opening Time
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="font-semibold">10:00 AM Mar 5, 2025</div>
                </div>
                <button className="ml-auto p-2 hover:bg-gray-100 rounded-full">
                  <RefreshCw className="w-5 h-5" />
                </button>
              </div>

              {/* Time Slots */}
              <div className="space-y-6">
                {/* 9:30 AM Slots */}
                <div>
                  <h3 className="font-semibold mb-3">Slots for 9:30 AM</h3>
                  <div className="grid grid-cols-4 gap-3">
                    {[1, 2, 3, 4].map((slot) => (
                      <button
                        key={`930-${slot}`}
                        onClick={() => handleSlotClick('February 3rd, 2025', '9:30 AM', '10:00 AM')}
                        className="border border-gray-300 rounded px-4 py-3 text-sm hover:border-blue-500 hover:bg-blue-50 transition-colors"
                      >
                        9:30 AM
                      </button>
                    ))}
                  </div>
                </div>

                {/* 10:00 AM Slots */}
                <div>
                  <h3 className="font-semibold mb-3">Slots for 10:00 AM</h3>
                  <div className="grid grid-cols-4 gap-3">
                    {[1, 2, 3, 4].map((slot) => (
                      <button
                        key={`1000-${slot}`}
                        onClick={() => handleSlotClick('February 3rd, 2025', '10:00 AM', '10:30 AM')}
                        className="border border-gray-300 rounded px-4 py-3 text-sm hover:border-blue-500 hover:bg-blue-50 transition-colors"
                      >
                        10:00 AM
                      </button>
                    ))}
                  </div>
                </div>

                {/* 10:30 AM Slots */}
                <div>
                  <h3 className="font-semibold mb-3">Slots for 10:30 AM</h3>
                  <div className="grid grid-cols-4 gap-3">
                    {[1, 2, 3, 4].map((slot) => (
                      <button
                        key={`1030-${slot}`}
                        onClick={() => handleSlotClick('February 3rd, 2025', '10:30 AM', '11:00 AM')}
                        className="border border-gray-300 rounded px-4 py-3 text-sm hover:border-blue-500 hover:bg-blue-50 transition-colors"
                      >
                        10:30 AM
                      </button>
                    ))}
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
