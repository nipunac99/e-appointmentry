import { useState } from "react";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";

import Account from "./components/steps/Account";
import SubscriptionPlan from "./components/steps/SubscriptionPlan";
import Final from "./components/steps/Final";
import ServiceCategory from "./components/steps/ServiceCategory";
import { StepperContext } from "./contexts/StepperContext";
import Register from "./components/steps/Register";


function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);

  const steps = [
    "Account Information",
    "Your Plan",
    "Registrstion",
    "Service Category",
    "Complete",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <SubscriptionPlan />;
      case 3:
        return <Register />;
      case 4:
        return <ServiceCategory />;
      case 5:
        return <Final />;
      default:
    }
  };
  // ##### if you need and some steps or componets please try this.. #####
  /**
   * ^
   * |
   */

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    // #### if you need to change width you can change here and check other staff ####

    <div className="md:w-[70%] xl:w-[75%] mx-auto shadow-xl rounded-2xl pb-2 bg-none">
      {/* stepper */}
      <div className="container horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep} />

        {/* Display Components */}

        <div className="">
          <StepperContext.Provider
            value={{
              userData,
              setUserData,
              finalData,
              setFinalData,
            }}
          >
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>

      {/* Navigation controls */}
      {/* #### Hide buttons in last step #### */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>

    
  );
}



export default App;
