import { CheckCircleIcon } from "@heroicons/react/24/outline";
export default function Steps({steps, active, clicked}){

    const clickHandler = (n) => {
        if(typeof clicked == "function") clicked(n)
    }
    return (
        <div className="flex flex-row justify-between gap-4 items-center">
            {
                Array(steps).fill(1).map(( _, i) => {
                    let classes, content;
                    if( i < active){
                        classes = "bg-green-400 w-[24px] h-[24px]"
                        content = <CheckCircleIcon color="white" size={24} />
                    }else{
                        classes = i == active ? "bg-blue-400 w-[30px] h-[30px]" : "bg-gray-300 w-[24px] h-[24px]";
                        content = <span className="absolute top-2/4 left-2/4 text-xs translate-y-[-40%] translate-x-[-50%] text-white font-semibold">{i + 1} </span>
                    }

                    return (
                        <div key={i} className={`cursor-pointer rounded-full aspect-square relative ${classes}`} onClick={()=>clickHandler(i)}>
                            {content}
                        </div>
                    )
                })
            }
        </div>
    )
}

Steps.displayName = "/src/components/user-form/steps.jsx";