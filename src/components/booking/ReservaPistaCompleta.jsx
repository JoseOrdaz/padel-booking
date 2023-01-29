import {useState, useRef } from "react";
import {
    Input,
    Checkbox,
    Button,
    Select,
    Option
} from "@material-tailwind/react";

import Steps from "@/components/user-form/steps.jsx";

import CardsPistas from "@/components/booking/CardsPistas";

const getYearLimit = () => {
    const date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    const yy = date.getFullYear() - 18;

    if(dd < 10) dd = "0" + dd
    if(mm < 10) mm = "0" + mm

    return `${yy}-${mm}-${dd}`
}

export function ReservaPistaCompleta() {

    const [ step, setStep ] = useState( 0 );
    const [ formData, setFormData ] = useState({
       
        DiaReserva: { type: "date", label: "Selecciona día", value:"" , max: getYearLimit()},
        TipoPista: { type: "select", label: "Tipo de pista", options:[ "Individual", "Dobles", "Todas" ] , value:"" },
        HoraReserva: { 
            type: "select",
            label: "Selecciona la hora", 
            options:[
                "10:00", "11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00",
            
                ] , 
            value:""
        },  
        todoElDia: { type: "checkbox", label: "Ver todo el día", value: "" } ,

       
    })

    const stepHandler = (n)=>{
        // if(fieldsComplited[n] && fieldsComplited[n].checked)
             setStep(n)
     }
 
 

 

 
     const submitHandler = (e) => {
         e.preventDefault();
         if(step < maxStep){
             let st = step;
             setStep(++st);
             return
         }
         const data = {
            
         }
         
     }
 
     let start = step * 1;
     let end
     let formLength = Object.keys(formData).length;
     let maxStep = 3;
  
     if(step == maxStep){
         end = formLength;
     }else{
         end = step * 1 + 4
     }
     const fields = Object.keys(formData).slice(start, end);
 

    return (
        <>
            <Steps steps={maxStep} active={step} clicked={stepHandler}/>

            {step == 0 ? (
                <form className="flex flex-col gap-4 mt-8" onSubmit={submitHandler}>
                {
                    fields.map( (key, i) => {
                        if(formData[key].type == "checkbox"){
                            return (
                                <Checkbox 
                                    key={key}
                                    value={formData[key].value}
                                    label={formData[key].label} /> 
                            )
                        }else if(formData[key].type == "select"){
                            return (
                                <Select 
                                    key={key} 
                                    name={key} 
                                    label={formData[key].label}
                                    onChange={(val)=>selectHandler(val, key)}
                                    value={formData[key].value}
                                    >
                                    {
                                        formData[key].options.map( option => (
                                            <Option key={option} value={option}>{option}</Option>
                                        ))
                                    }
                                </Select>
                            )
                        }else{
                        console.log(formData[key].error)
                            return (
                                <Input
                                    key={key}
                                    name={key}
                                    type={formData[key].type}
                                    variant="standard"
                                    label={formData[key].label}
                                    size="lg"
                                    defaultValue={formData[key].value}
                                    min={formData[key].min}
                                    max={formData[key].max}
                                    minLength={formData[key].minLength}
                                    maxLength={formData[key].maxLength}
                                    error={formData[key].error}
                                    success={formData[key].success}
                                    required
                                />
                            )
                        }
                    })
                }      
                <div className="pt-4">
                    <button
                        type="submit"
                        className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full">{
                        start == 1 ? "Atras" : "Siguiente"
                    }</button>
                </div>
            </form> ) : <CardsPistas></CardsPistas>}

        </>

    );
}
export default ReservaPistaCompleta;
