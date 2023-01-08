import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicDatePicker from "/src/components/booking/DataPicker";
import GridForHours from "/src/components/booking/GridForHours";
import CardsPistas from "@/components/booking/CardsPistas";

const steps = [
  {
    label: "Seleccionar día",
    component: <BasicDatePicker></BasicDatePicker>,
  },
  {
    label: "Seleccionar hora",
    component: <GridForHours></GridForHours>,
  },
  {
    label: "Seleccionar pista",
    component: <CardsPistas></CardsPistas>,
  },
];

export function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const StepIcon = {
    color: "var(--color-main)",
  };

  return (
    <div className="m-auto mt-10 max-w-[500px]">
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              style={StepIcon}
              optional={
                index === 2 ? (
                  <Typography variant="caption">Último paso</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <div className="m-5">{step.component}</div>
              <div>
                <div>
                  {index - 2 ? (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {" "}
                      Continuar
                    </Button>
                  ) : null}

                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Atrás
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default VerticalLinearStepper;
