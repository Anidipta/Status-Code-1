import { FaCalendarAlt as CalendarIcon, FaUser as UserIcon, FaChevronLeft as ChevronLeftIcon, FaChevronRight as ChevronRightIcon } from 'react-icons/fa';

const Patients = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200">
        <div className="p-4 text-xl font-bold text-gray-800">MediLab</div>
        <nav className="flex flex-col p-4 space-y-4">
          <a  href="#" className="flex items-center p-2 space-x-2 bg-gray-200 rounded-md text-gray-800 hover:bg-gray-300">
            <UserIcon className="w-5 h-5" />
            <span>Patient 1</span>
          </a>
          <a  href="#" className="flex items-center p-2 space-x-2 bg-gray-200 rounded-md text-gray-800 hover:bg-gray-300">
            <UserIcon className="w-5 h-5" />
            <span>Patient 2</span>
          </a>
          <a  href="#" className="flex items-center p-2 space-x-2 bg-gray-200 rounded-md text-gray-800 hover:bg-gray-300">
            <UserIcon className="w-5 h-5" />
            <span>Patient 3</span>
          </a>
          {/* Add more navigation items */}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50 text-gray-800" style={{ outerWidth: "1250px" }}>
        {/* Header */}
        <header className="flex items-center justify-between p-6 bg-white border-b border-gray-200 rounded-md shadow-sm">
          <h1 className="text-2xl font-semibold">Appointments</h1>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              <CalendarIcon className="w-5 h-5" />
              <span>New Appointment</span>
            </button>
            <div className="relative w-10 h-10">
              <img
                className="w-full h-full rounded-full object-cover"
                src="/placeholder-user.jpg"
                alt="Dr. Kawasaki"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold bg-gray-600 rounded-full">
                DK
              </div>
            </div>
          </div>
        </header>

        {/* Appointment Section */}
        <section className="p-6 mt-6 bg-white rounded-md shadow">
          <div className="flex justify-between items-center mb-4">
            <button className="p-2 bg-gray-200 rounded-full">
              <ChevronLeftIcon className="w-5 h-5 text-gray-800" />
            </button>
            <h2 className="text-lg font-semibold text-gray-800">August 2024</h2>
            <button className="p-2 bg-gray-200 rounded-full">
              <ChevronRightIcon className="w-5 h-5 text-gray-800" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-4 text-center">
            {/* Placeholder for calendar cells */}
            <div className="p-4 bg-gray-200 rounded-md">Mon</div>
            <div className="p-4 bg-gray-200 rounded-md">Tue</div>
            <div className="p-4 bg-gray-200 rounded-md">Wed</div>
            <div className="p-4 bg-gray-200 rounded-md">Thu</div>
            <div className="p-4 bg-gray-200 rounded-md">Fri</div>
            <div className="p-4 bg-gray-200 rounded-md">Sat</div>
            <div className="p-4 bg-gray-200 rounded-md">Sun</div>
            {/* Add more calendar cells */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Patients;
