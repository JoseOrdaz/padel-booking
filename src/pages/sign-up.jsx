import { Link } from "react-router-dom";
import {useState, useRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
  Radio
} from "@material-tailwind/react";
import { ClockIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { SimpleFooter } from "@/widgets/layout";



export function SignUp() {
  const [ terms, setTerms ] = useState( true );
  const [ step, setStep ] = useState( 0 );
  const [ fieldsComplited, setFieldsComplited ] = useState([]);

  const firstNameRef = useRef(); 
  const secondNameRef = useRef(); 
  const emailRef = useRef(); 
  const repeatEmailRef = useRef(); 
  const pswRef = useRef();
  const pswRepeatRef = useRef();
  const dateRef = useRef();
  const genderRef = useRef();
  const levelPlayerRef = useRef();
  const sidePlayerRef = useRef();
  const termsRef = useRef();

  const clickHandler = (e) => {
    if(step < formFields.length - 1) {
      let tab = step;
      let formFields = fieldsComplited;
      formFields[tab] = {}
      formFields[tab].complited = true;
      setFieldsComplited(formFields)
      setStep(++tab);
      return
    }

    let data = {
      name: firstNameRef.current.value,
      email: emailRef.current.value,
      psw: pswRef.current.value,
    }
    console.log(data);
  }

  const termsHandler = (e) =>{
    setTerms(!termsRef.current.checked)
  }

  const stepHandler = (n)=>{
    if(fieldsComplited[n] && fieldsComplited[n].complited)
      setStep(n)
  }

  const formFields = [
    [
      {ref: emailRef, name: "email", type: "email", label: "Email"},
      {ref: repeatEmailRef, name: "email-repeat", type: "email", label: "Email Repeat"},
    ],
    [
      {ref: firstNameRef, name: "name", type: "text", label: "Name"},
      {ref: secondNameRef, name: "second-name", type: "text", label: "Second name"},
      {ref: dateRef, name: "birthday", type: "date", label: "Birthday"},
      {ref: genderRef, name: "gender", type: "text", label: "Gender"},
    ],
    [
      {ref: levelPlayerRef, name: "level", type: "text", label: "Name"},
      {ref: sidePlayerRef, name: "side-player", type: "text", label: "Second name"},
    ],
    [
      {ref: pswRef, name: "password",  type: "password", label: "Password"},
      {ref: pswRepeatRef, name: "password-repeat",  type: "password", label: "Password repeat"},
    ] 
  ]

  return (
    <>
      <img
        src="/img/background-2.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader variant="gradient"  color="blue" className="mb-4 grid h-28 place-items-center">
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <div className="flex flex-row justify-between gap-4">
              {
                formFields.map( (el, i) => {
                  const classes = i == step ? "bg-blue-400" : "bg-gray-300";
                  let checked;
                  let icon;
                  if( fieldsComplited[i] && fieldsComplited[i].complited){
                    icon = (
                      <CheckCircleIcon color="green" />
                    )
                  }else{
                    icon = (
                      <span className="absolute top-2/4 left-2/4 text-xs translate-y-[-40%] translate-x-[-50%] text-white font-semibold">{i + 1} </span>
                    )
                  }

                  return (
                    <div key={i} className={`cursor-pointer rounded-full aspect-square w-[30px] relative ${classes}`} onClick={()=>stepHandler(i)}>
                      {icon}
                    </div>
                  )
                })
              }
            </div>
            {
              formFields[step].map( item => (
                <Input inputRef={item.ref} key={item.name}  type={item.type} variant="standard" label={item.label} size="lg" />
              ))  
            }
            {
              step ==  formFields.length - 1 
              ? (
                <div className="-ml-2.5">
                  <Checkbox inputRef={termsRef} onInput={termsHandler} label="I agree the Terms and Conditions" />
                </div>
              )
              : null
            }
            
          </CardBody>
          <CardFooter className="pt-0">

            <Button variant="gradient" onClick={clickHandler} fullWidth>
              {
                step == formFields.length - 1 ? "Sign Up" : "Next"
              }
            </Button>
          
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default SignUp;
