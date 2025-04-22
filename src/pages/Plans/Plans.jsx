export default function Plans() {
  return (
    <>
      <section className="py-12">
        <div className="lg:px-8 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl text-gray-100 font-bold mb-4">
              Choose Your Gym Plan
            </h2>
            <p className="text-gray-100 text-xl">
              Achieve your fitness goals with the perfect plan for you.
            </p>
          </div>
          {/* Plans Grid */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Basic Plan */}
            <div className="relative flex flex-col bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold rounded-full w-10 h-10 flex items-center justify-center">
                20%
              </div>
              <h3 className="text-3xl text-indigo-600 font-bold mb-5">
                Basic Plan
              </h3>
              <div className="flex items-center mb-6">
                <span className="text-6xl text-amber-300 font-bold mr-2">
                  $30
                </span>
                <span className="text-gray-500 text-xl">/ month</span>
              </div>
              <ul className="text-gray-700 text-lg mb-8 space-y-4">
                <li className="flex gap-3 items-center">
                  <i className="text-indigo-600 text-xl fa-dumbbell fas"></i>
                  Full Gym Access
                </li>
                <li className="flex gap-3 items-center">
                  <i className="text-indigo-600 text-xl fa-clock far"></i>
                  Flexible Hours
                </li>
                <li className="flex gap-3 items-center">
                  <i className="text-indigo-600 text-xl fa-users fas"></i>
                  Group Workouts
                </li>
              </ul>
              <a
                href="#"
                className="bg-indigo-600 rounded-lg text-center text-lg text-white w-full font-semibold hover:bg-indigo-700 py-3 transition"
              >
                Get Started
              </a>
            </div>

            {/* Pro Plan */}
            <div className="relative flex flex-col bg-indigo-50 border-2 border-indigo-600 p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold rounded-full w-10 h-10 flex items-center justify-center">
                20%
              </div>
              <div className="bg-indigo-600 p-3 rounded-t-2xl text-center text-white font-bold uppercase">
                Most Popular
              </div>
              <h3 className="text-3xl text-indigo-600 font-bold mb-5 mt-4">
                Pro Plan
              </h3>
              <div className="flex items-center mb-6">
                <span className="text-6xl text-amber-300 font-bold mr-2">
                  $60
                </span>
                <span className="text-gray-500 text-xl">/ month</span>
              </div>
              <ul className="text-gray-700 text-lg mb-8 space-y-4">
                <li className="flex gap-3 items-center">
                  <i className="text-indigo-600 text-xl fa-dumbbell fas"></i>
                  Everything in Basic Plan
                </li>
                <li className="flex gap-3 items-center">
                  <i className="text-indigo-600 text-xl fa-user-shield fas"></i>
                  Personal Trainer Support
                </li>
                <li className="flex gap-3 items-center">
                  <i className="text-indigo-600 text-xl fa-star fas"></i>
                  Customized Workout Plan
                </li>
              </ul>
              <a
                href="#"
                className="bg-indigo-600 rounded-lg text-center text-lg text-white w-full font-semibold hover:bg-indigo-700 py-3 transition"
              >
                Get Started
              </a>
            </div>

                       {/* Elite Plan */}
                       <div className="relative flex flex-col bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold rounded-full w-10 h-10 flex items-center justify-center">
                20%
              </div>
              <h3 className="text-3xl text-indigo-600 font-bold mb-5">
                Elite Plan
              </h3>
              <div className="flex items-center mb-6">
                <span className="text-6xl text-amber-300 font-bold mr-2">
                  $100
                </span>
                <span className="text-gray-500 text-xl">/ month</span>
              </div>
              <ul className="text-gray-700 text-lg mb-8 space-y-4">
                <li className="flex gap-3 items-center">
                  <i className="text-indigo-600 text-xl fa-dumbbell fas"></i>
                  Everything in Pro Plan
                </li>
                <li className="flex gap-3 items-center">
                  <i className="text-indigo-600 text-xl fa-crown fas"></i>
                  VIP Gym Access 24/7
                </li>
                <li className="flex gap-3 items-center">
                  <i className="text-indigo-600 text-xl fa-utensils fas"></i>
                  Nutrition & Meal Plan
                </li>
              </ul>
              <a
                href="#"
                className="bg-indigo-600 rounded-lg text-center text-lg text-white w-full font-semibold hover:bg-indigo-700 py-3 transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}