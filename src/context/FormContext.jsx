import { initialState } from "../reducer/formReducer";
import formReducer from "../reducer/formReducer";
import React, {createContext, useReducer} from "react";

export const FormContext = createContext();

export const FormProvider = ({children}) => {
    const [state, dispatch] = useReducer(formReducer,initialState)

    return (
        <FormContext.Provider value={{state, dispatch}}>
            {children}
        </FormContext.Provider>
    )
}

