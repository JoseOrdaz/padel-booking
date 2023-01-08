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
            {ref: repeatEmailRef, name: "email-repeat", type: "email", label: "Confirmar email"},
        ],
        [
            {ref: firstNameRef, name: "name", type: "text", label: "Nombre"},
            {ref: secondNameRef, name: "second-name", type: "text", label: "Apellidos"},
            {ref: dateRef, name: "birthday", type: "date", label: "Fecha de nacimiento"},
            {ref: genderRef, name: "gender", type: "text", label: "Género"},
        ],
        [
            {ref: levelPlayerRef, name: "level", type: "text", label: "Nivel"},
            {ref: sidePlayerRef, name: "side-player", type: "text", label: "Posición"},
        ],
        [
            {ref: pswRef, name: "password",  type: "password", label: "Contraseña"},
            {ref: pswRepeatRef, name: "password-repeat",  type: "password", label: "Repitir contraseña"},
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
                            <Checkbox inputRef={termsRef} className="checked:bg-[var(--color-main)] checked:border-0 focus:border-[var(--color-main)]" onInput={termsHandler} label="Acepto los Términos y Condiciones" />
                        </div>
                    )
                    : null
                }
                <div className="pt-4">
                    {
                        step == formFields.length - 1 
                        ? <Button className="bg-[var(--color-main)] hover:bg-[var(--color-second)] shadow-gray-500 hover:shadow-gray-300" type="button" onClick={submitHandler} fullWidth>Registrarse</Button>
                        : <Button className="bg-[var(--color-main)] hover:bg-[var(--color-second)] shadow-gray-500 hover:shadow-gray-300" type="button" onClick={checkFieldsHandler} fullWidth>Siguiente</Button> 
                    } 
                </div>
            </form>
        </>
    );
}

UserForm.displayName = "/src/components/user-form/form.jsx";