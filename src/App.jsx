import { useState } from "react";

function App() {
  // State for tracking the current step
  const [step, setStep] = useState(1);

  // State for storing user information
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sleep, setSleep] = useState("");
  const [water,setWater]= useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-lg">

        <h1 className="mb-4 text-2xl font-bold">
          My Wellness Tracker
        </h1>

        <p className="mb-4 text-sm text-gray-500">
          {step === 3 ? "Summary" : `Step ${step} of 2`}
        </p>

        {/* STEP 1: Personal Information */}
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              Personal Information
            </h2>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-lg border p-3"
            />

            <input
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(event) => setAge(event.target.value)}
              className="w-full rounded-lg border p-3"
            />

            <button
              onClick={() => setStep(2)}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white"
            >
              Next
            </button>
          </div>
        )}

        {/* STEP 2: Wellness Information */}
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              Wellness Information
            </h2>

            <label className="block">
              How many hours did you sleep?
            </label>

            <input
              type="number"
              placeholder="Hours of sleep"
              value={sleep}
              onChange={(event) => setSleep(event.target.value)}
              className="w-full rounded-lg border p-3"
            />
            <input
             type="number"
             placeholder="Glasses of water"
             value={water} 
             onChange={(event) => setWater(event.target.value)}
             className="w-full rounded-1g border p-3"
             />

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="rounded-lg bg-gray-600 px-4 py-2 text-white"
              >
                Back
              </button>

              <button
                onClick={() => setStep(3)}
                className="rounded-lg bg-green-600 px-4 py-2 text-white"
              >
                Finish
              </button>
            </div>
          </div>
        )}

        {/* SUMMARY SCREEN */}
        {step === 3 && (
          <div className="space-y-3">
            <h2 className="text-xl font-bold">
              Your Summary
            </h2>

            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Hours slept: {sleep}</p>
            <p>Water: {water} glasses</p>

            <button
              onClick={() => setStep(1)}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white"
            >
              Edit Details
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;