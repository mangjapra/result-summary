import "./App.css";
import { Memory, Reaction, Verbal, Visual } from "./assets";

const jsonData = [
  {
    title: "Reaction",
    icon: Reaction,
    number1: 80,
    number2: 100,
  },
  {
    title: "Memory",
    icon: Memory,
    number1: 92,
    number2: 100,
  },
  {
    title: "Verbal",
    icon: Verbal,
    number1: 61,
    number2: 100,
  },
  {
    title: "Visual",
    icon: Visual,
    number1: 73,
    number2: 100,
  },
];

function App() {
  return (
    <>
      <div 
        className="container mx-auto grid sm:flex bg-slate-50"
        style={{
          borderRadius: '25px 25px 25px 25px'
        }}
      >
        {/* left-side */}
        <div 
        className="bg-gradient-to-t from-indigo-800 to-indigo-500 p-5"
        style={{
          borderRadius: '25px'
        }}
        >
          <div className="mx-14">
            <h1 className="text-2xl text-slate-300 font-semibold mb-5">Your Result</h1>
            <div 
              className="bg-gradient-to-b from-indigo-700 p-5 mx-auto"
              style={{
                borderRadius: '50%',
                width: '100px'
              }}
            >
              <p className="text-3xl font-bold">76</p>
              <p className="text-xs text-slate-400 font-bold mt-3">of 100</p>
            </div>
            <p className="mt-5 font-bold text-2xl">Great</p>
            <p className="text-sm font-semibold text-slate-300 w-48 mx-auto mt-5">
              Your performance exceed 65% of the people conducting the test
              here!
            </p>
          </div>
        </div>

        
        {/* right-side */}
        <div className="p-4">
          <h1 className="text-2xl text-blue-950 font-bold text-left">
            Summary
          </h1>
          
          {/* card */}
          {jsonData.map((res, index) => {
            return (
              <>
                <div
                  className={
                    res.title === "Reaction"
                        ? "flex justify-between m-5 p-3 bg-red-50  rounded-lg sm:w-64"
                        : res.title === "Memory"
                        ? "flex justify-between m-5 p-3 bg-yellow-50  rounded-lg sm:w-64"
                        : res.title === "Verbal"
                        ? "flex justify-between m-5 p-3 bg-green-50  rounded-lg sm:w-64"
                        : res.title === "Visual"
                        ? "flex justify-between m-5 p-3 bg-blue-50  rounded-lg sm:w-64"
                        : ""
                  }
                >
                  <div className="flex">
                    <img src={res.icon} alt={res.title} />
                    <p
                      className="ml-5 font-semibold"
                      style={{
                        color:
                          res.title === "Reaction"
                            ? "#FF5555"
                            : res.title === "Memory"
                            ? "#FFB21E"
                            : res.title === "Verbal"
                            ? "#00BB8F"
                            : res.title === "Visual"
                            ? "#1125D6"
                            : "",
                      }}
                    >
                      {res.title}
                    </p>
                  </div>
                  <div className="flex mx-5 justify-end">
                    <p className="font-semibold text-blue-950">{res.number1}</p>
                    <p className="text-slate-400 font-semibold mx-1">/</p>
                    <p className="text-slate-400 font-semibold">
                      {res.number2}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
          
          <button className="rounded-full w-full bg-slate-700 text-white font-semibold hover:bg-gradient-to-t hover:from-indigo-800 hover:to-indigo-500" >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
