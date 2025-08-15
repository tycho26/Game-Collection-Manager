import * as React from "react";
import { Input } from "../shadcn/ui/input";

function FormInput(props) {

    const {valError, type, name, placeholder, required, max} = props

    return (
        <div className="flex flex-col mt-3">
            <span className="text-red-500">{valError}</span>
            <Input required={required} className="grow" max={max} type={type} name={name} placeholder={placeholder}></Input>
        </div>
    )
}

export default FormInput