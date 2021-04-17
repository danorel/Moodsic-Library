/// <reference types="react" />
interface TabsViewProps {
    isSignIn: boolean;
    onClick: (newSignIn: boolean) => void;
}
export default function TabsView({ isSignIn, onClick }: TabsViewProps): JSX.Element;
export {};
