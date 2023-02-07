import { ChangeEvent } from "react";

export interface TextAreaProps {
    id: string;
    value: string;
    type: string;
    placeholder?: string;
    onChange?: (e?: ChangeEvent<HTMLTextAreaElement>) => void;
};