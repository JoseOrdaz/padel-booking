import {useState, useRef } from "react";
import {
    Input,
    Checkbox,
    Button
} from "@material-tailwind/react";

import Steps from "./steps";

export default function UserForm() {
    const [ terms, setTerms ] = useState( true );
    const [ step, setStep ] = useState( 0 );
    const [ fieldsComplited, setFieldsComplited ] = useState([]);
    const [ userData, setUserData ] = useState({});

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
            console.log(value)
            if(value.length > 0)
                data[item.name] = item.ref.current.value
        })
        console.log(data)

        setUserData(data)
        setFieldsComplited(fields)
        setStep(++tab);  
    }

    const submitHandler = (e) => {
        e.preventDefault()

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
            <Steps steps={formFields.length} active={step} clicked={stepHandler}/>
            <form className="flex flex-col gap-4 mt-4">
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
                        ? <Button variant="gradient" type="button" onClick={submitHandler} fullWidth>Sign Up</Button>
                        : <Button variant="gradient" type="button" onClick={checkFieldsHandler} fullWidth>Next</Button> 
                    } 
                </div>
            </form>
        </>
    );
}

UserForm.displayName = "/src/components/user-form/form.jsx";