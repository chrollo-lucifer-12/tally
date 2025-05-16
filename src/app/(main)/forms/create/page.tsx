import { customAlphabet } from 'nanoid';
import {redirect} from "next/navigation";

const CreateFormsPage = () => {
    const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 6);
    const id = nanoid();

    redirect(`/forms/${id}/edit`)
}

export default CreateFormsPage