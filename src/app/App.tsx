import { useState } from 'react';
import LoginPage from './components/LoginPage';
import AppointmentCalendar from './components/AppointmentCalendar';
import AppointmentForm from './components/AppointmentForm';
import TimeSlotSelection from './components/TimeSlotSelection';
import AppointmentSuccess from './components/AppointmentSuccess';

type Page = 'login' | 'calendar' | 'form' | 'timeslots' | 'success';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [selectedSlot, setSelectedSlot] = useState('');

  return (
    <div className="min-h-screen bg-white">
      {currentPage === 'login' && (
        <LoginPage onLogin={() => setCurrentPage('calendar')} />
      )}
      {currentPage === 'calendar' && (
        <AppointmentCalendar onSelectDate={() => setCurrentPage('timeslots')} onBack={() => setCurrentPage('login')} />
      )}
      {currentPage === 'timeslots' && (
        // <AppointmentForm onBack={() => setCurrentPage('timeslots')} onComplete={() => setCurrentPage('success')} />
        <TimeSlotSelection 
          onSelectSlot={(slot) => {
            setSelectedSlot(slot);
            setCurrentPage('form');
          }} 
          onBack={() => setCurrentPage('calendar')} 
        />
      )}
      {currentPage === 'form' && (
        <AppointmentForm onBack={() => setCurrentPage('timeslots')} onComplete={() => setCurrentPage('success')} onSelectSlot={function (slot: string): void {
          throw new Error('Function not implemented.');
        } } />
      )}
      {currentPage === 'success' && (
        <AppointmentSuccess slot={selectedSlot} />
      )}
    </div>
  );
}