import { ReactNode } from "react";

const Logo = require('assets/img/Logo_Pertamina_Gas_Negara.png');

type FormWrapperProps = {
    title: string;
    description: string;
    children: ReactNode;
};
export function FormWrapper({ title, description, children }: FormWrapperProps) {
    return (
        <>
            <div className="px-3 py-3 px-lg-7 py-lg-3">
                <img src={Logo} alt="Logo Header Pertamina" className="form-logo" />
                <h2 className="title-m mb-3">
                    {title}
                </h2>
                <p className="body-m">{description}</p></div>

            {children}
        </>
    );
}
