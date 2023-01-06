import {useState, useRef } from "react";
import {
  Input,
  Checkbox,
  Button
} from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function UserForm() {
  const [ terms, setTerms ] = useState( true );
  const [ step, setStep ] = useState( 0 );
  const [ fieldsComplited, setFieldsComplited ] = useState([]);
  const [ userData, setUserData ] = useState([]);

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
      {ref: levelPlayerRef, name: "level", type: "text", label: "Level"},
      {ref: sidePlayerRef, name: "side-player", type: "text", label: "Position"},
    ],
    [
      {ref: pswRef, name: "password",  type: "password", label: "Password"},
      {ref: pswRepeatRef, name: "password-repeat",  type: "password", label: "Password repeat"},
    ] 
  ]

  const checkFieldsHandler = (e) => {
      let tab = step;
      let data = userData;

      let fields = fieldsComplited;
      fields[tab] = {}
      fields[tab].checked = true;


      formFields[step].map( item => {
        const {value} = item.ref.current

        if(value.length > 0)
          data[item.name] = item.ref.current.value
    
          
      })
      console.log(data)

      setUserData(data)
      setFieldsComplited(fields)
      setStep(++tab);  
  }

  const submitHandler = () => {
    //send data to db
    console.log(userData);
  }

  const termsHandler = (e) =>{
    setTerms(!termsRef.current.checked)
  }

  const stepHandler = (n)=>{
    if(fieldsComplited[n] && fieldsComplited[n].checked)
      setStep(n)
  }

  return (
    <>
        <div className="flex flex-row justify-between gap-4 items-center">
            {
            formFields.map( ( _, i ) => {
                let classes, content;

                if( fieldsComplited[i] && fieldsComplited[i].checked){
                classes = "bg-green-400 w-[24px] h-[24px]"
                content = <CheckCircleIcon color="white" size={24} />
                }else{
                classes = i == step ? "bg-blue-400 w-[30px] h-[30px]" : "bg-gray-300 w-[24px] h-[24px]";
                content = (
                    <span className="absolute top-2/4 left-2/4 text-xs translate-y-[-40%] translate-x-[-50%] text-white font-semibold">{i + 1} </span>
                )
                }

                return (
                <div key={i} className={`cursor-pointer rounded-full aspect-square relative ${classes}`} onClick={()=>stepHandler(i)}>
                    {content}
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
        <div className="pt-4">
            {
                step == formFields.length - 1 
                ? <Button variant="gradient" onClick={submitHandler} fullWidth>Sign Up</Button>
                : <Button variant="gradient" onClick={checkFieldsHandler} fullWidth>Next</Button> 
            } 
        </div>
    </>
  );
}

UserForm.displayName = "/src/components/user-form.jsx";