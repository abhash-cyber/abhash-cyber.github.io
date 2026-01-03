import BrowserHeader from './BrowserHeader';

interface AppointmentSuccessProps {
  slot: string;
}

export default function AppointmentSuccess({ slot }: AppointmentSuccessProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <BrowserHeader url="https://koreanembassynepal.org/dashboard/appointment/success" />
      
      <div className="max-w-3xl mx-auto px-8 py-16">
        <div className="bg-white rounded-lg border border-gray-300 p-12">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-center font-bold text-2xl mb-3">Appointment Booked Successfully!</h1>
          <p className="text-center text-gray-600 mb-8">
            Your appointment has been confirmed. You will receive a confirmation email shortly.
          </p>

          {/* Appointment Details */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="font-bold mb-4">Appointment Details</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Service:</span>
                <span className="font-semibold">VISA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-semibold">March 14, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-semibold">{slot || '9:30 AM'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Location:</span>
                <span className="font-semibold">Embassy of the Republic of Korea</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Confirmation ID:</span>
                <span className="font-semibold font-mono">#APT-2025-001432</span>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Important Notes
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <span>•</span>
                <span>Please arrive 15 minutes before your scheduled appointment time</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Bring all required documents and your passport</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>A confirmation email has been sent to friendzf264@gmail.com</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>You can cancel or reschedule up to 24 hours before your appointment</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded hover:bg-blue-50 font-medium">
              Download Confirmation
            </button>
            <button className="flex-1 bg-blue-600 text-white py-3 rounded hover:bg-blue-700 font-medium">
              View My Appointments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
