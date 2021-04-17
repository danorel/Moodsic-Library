import React from 'react';
interface FormViewProps {
    value: string;
    isSignIn: boolean;
    onClick: () => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function FormView({ value, isSignIn, onClick, onChange }: FormViewProps): JSX.Element;
export {};
