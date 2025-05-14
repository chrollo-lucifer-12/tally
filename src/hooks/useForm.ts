import { useActionState } from "react";


export const useForm = <T = any>(serverAction: any) => {
    const [state, action, pending] = useActionState<T>(serverAction, null as unknown as Awaited<T>);

    return { state, action, pending };
};