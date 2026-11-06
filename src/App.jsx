import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    sleepHours: "",
    waterGlasses: "",
    exerciseMinutes: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const backStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    // 1. Background changed to #E8F6F3
    <div className="min-h-screen bg-[#E8F6F3] flex items-center justify-center p-4 font-sans">
      
      {/* White Card Container - Changed padding to p-6 for mobile fit */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8 min-h-[450px] flex flex-col">
        
        {/* Header */}
        <div className="mb-6">
          {/* 2. "Wellness Tracker" heading changed to #005B5C */}
          <h1 className="text-2xl font-bold text-[#005B5C] mb-1">
            Wellness Tracker
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            {step === 1 ? "Step 1 of 2" : step === 2 ? "Step 2 of 2" : "Summary"}
          </p>
        </div>

        {/* Content Area */}
        <div className="flex-grow">
          
          {/* STEP 1: Name and Age */}
          {step === 1 && (
            <div className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Joy"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#008B76]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="e.g. 23"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#008B76]"
                />
              </div>
            </div>
          )}

          {/* STEP 2: Habits */}
          {step === 2 && (
            <div className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Hours of sleep
                </label>
                <input
                  type="number"
                  name="sleepHours"
                  value={formData.sleepHours}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#008B76]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Glasses of water
                </label>
                <input
                  type="number"
                  name="waterGlasses"
                  value={formData.waterGlasses}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#008B76]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Daily exercise minutes
                </label>
                <input
                  type="number"
                  name="exerciseMinutes"
                  value={formData.exerciseMinutes}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#008B76]"
                />
              </div>
            </div>
          )}

          {/* STEP 3: Summary */}
          {step === 3 && (
            <div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="flex justify-between px-4 py-3 border-b border-gray-200">
                  <span className="text-gray-600">Name</span>
                  <span className="font-bold text-gray-900 uppercase">
                    {formData.name || "—"}
                  </span>
                </div>
                <div className="flex justify-between px-4 py-3 border-b border-gray-200">
                  <span className="text-gray-600">Age</span>
                  <span className="font-bold text-gray-900">
                    {formData.age || "—"}
                  </span>
                </div>
                <div className="flex justify-between px-4 py-3 border-b border-gray-200">
                  <span className="text-gray-600">Hours of sleep</span>
                  <span className="font-bold text-gray-900">
                    {formData.sleepHours || "—"}
                  </span>
                </div>
                <div className="flex justify-between px-4 py-3 border-b border-gray-200">
                  <span className="text-gray-600">Glasses of water</span>
                  <span className="font-bold text-gray-900">
                    {formData.waterGlasses || "—"}
                  </span>
                </div>
                <div className="flex justify-between px-4 py-3">
                  <span className="text-gray-600">Daily exercise minutes</span>
                  <span className="font-bold text-gray-900">
                    {formData.exerciseMinutes || "—"}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8 pt-4">
          {step > 1 ? (
            <button
              onClick={backStep}
              className="px-5 py-2 border border-gray-200 rounded-lg text-gray-600 font-medium hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
          ) : (
            <div></div> 
          )}

          {step < 3 && (
            <button
              onClick={nextStep}
              // 3. "Next" button changed to #008B76
              className="px-6 py-2 bg-[#008B76] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Next
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;