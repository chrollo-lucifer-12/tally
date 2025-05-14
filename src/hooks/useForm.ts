import {useActionState} from "react";


export const useForm = (sererAction : any) => {
    const [state, action, pending] = useActionState(sererAction, undefined);

    return {state, action, pending}
}