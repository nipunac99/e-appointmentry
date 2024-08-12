import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CompanyProfile from "../RegistrationPage/CompanyProfile";
import ProfilePage from "../RegistrationPage/ProfilePage";
import {
  FaAngleLeft,
  FaAngleRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import { FaBeer } from "react-icons/fa";
import { IconContext } from "react-icons";
import { BiChevronRight } from "react-icons/bi";

const steps = ["Select campaign settings", "Create an ad group"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    
    
    <div className="container mx-auto pl-3 pr-3 mt-5 md:mt-20 ">
       <h1 className="mx-auto text-2xl text-center font-bold md:hidden mt-5 mb-10 text-primary-color-500">Registration</h1>
      <div className="dark:bg-gray-900">
     
        <div className="flex justify-center">
          <div className="hidden bg-cover lg:block">
            {/* <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-4xl font-bold text-white">Brand</h2>

                <p className="max-w-xl mt-3 text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  autem ipsa, nulla laboriosam dolores, repellendus perferendis
                  libero suscipit nam temporibus molestiae
                </p>
              </div>
            </div> */}
          </div>

          <div className="flex items-center w-full max-w-screen mt-3">
            <div className="flex-1">
              <div>
                {/* <h2 className="text-4xl font-bold text-gray-700 dark:text-white mt-5 mb-7">
                  Brand
                </h2> */}

                <Box sx={{ width: "100%" }}>
                  <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                      const stepProps = {};
                      const labelProps = {};
                      if (isStepOptional(index)) {
                        labelProps.optional = (
                          <Typography sx={{ mt: 2, mb: 1 }} variant="caption">
                            {/* Optional */}
                          </Typography>
                        );
                      }
                      if (isStepSkipped(index)) {
                        stepProps.completed = false;
                      }
                      return (
                        <Step key={label} {...stepProps}>
                          <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                      );
                    })}
                  </Stepper>
                  {activeStep === steps.length ? (
                    <React.Fragment>
                      <Typography sx={{ mt: 2, mb: 1, b: 5 }}>
                        All steps completed - you&apos;re finished ✅
                      </Typography>
                      <Box
                        sx={{ display: "flex", flexDirection: "row", pt: 2 }}
                      >
                        <Box sx={{ flex: "1 1 auto" }} />
                        <Button onClick={handleReset}>Reset</Button>
                      </Box>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <Typography sx={{ mt: 2, mb: 1 }}>
                        {/* Step {activeStep + 1} */}

                        {/* ###### */}
                        {activeStep === 1 ? (
                          <ProfilePage />
                        ) : (
                          <CompanyProfile />
                        )}
                        {/* ###### */}
                      </Typography>
                      <Box
                        sx={{ display: "flex", flexDirection: "row", pt: 2 }}
                      >
                        <Button
                          color="inherit"
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          sx={{ mr: 1 }}
                        >
                          <IconContext.Provider
                            value={{ color: "blue", size: "25px",}}
                          >
                            <div>
                              <FaAngleLeft />
                            </div>
                          </IconContext.Provider>
                        </Button>
                        <Box sx={{ flex: "1 1 auto" }} />
                        {/* {isStepOptional(activeStep) && (
                          <Button
                            color="inherit"
                            onClick={handleSkip}
                            sx={{ mr: 1 }}
                          >
                            Skip
                          </Button>
                        )} */}

                        <Button onClick={handleNext}>
                          {activeStep === steps.length - 0 ? (
                            "Finish"
                          ) : (
                            <IconContext.Provider
                              value={{ color: "blue", size: "25px" }}
                            >
                              <div>
                                <FaAngleRight />
                              </div>
                            </IconContext.Provider>
                          )}
                        </Button>
                      </Box>
                    </React.Fragment>
                  )}
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
