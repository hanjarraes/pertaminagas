import React from "react";

type ImageSelectProps = {
    data: Item[];
    value?: string[];
    variant?: number;
    onChange: (payload: string[]) => void;
};

type Item = {
    value: string;
    label: string;
    image?: any;

};
export const ImageSelect: React.FC<ImageSelectProps> = React.forwardRef(
    ({ data, value, variant = 1, onChange }, ref) => {

        function onItemChange(selected: string) {
            if (value?.includes(selected)) {
                onChange(value.filter((item) => item !== selected));
            } else {
                onChange([...(value ?? []), selected]);
            }
        }

        function isOptionSelected(option: string): boolean {
            return Boolean(value?.includes(option));
        }

        return (
            <div
                className="row"
            >
                {data.map((item, i) => {
                    const variant2Class = variant === 2 ? "variant-2" : "";
                    return (
                        <div
                            key={item.value}
                            className="col-6 col-lg-4"
                            onClick={() => onItemChange(item.value)}
                        >
                            <figure className={["figure image-select-item", isOptionSelected(item.value) ? "selected" : ""].join(" ")}>
                                {item.image ?
                                    <>
                                        <img src={item.image} alt={item.label} />
                                        <img src={item.image} alt={item.label} />
                                        <div className={["overlay", variant2Class].join(" ")}></div>
                                    </> : undefined
                                }
                                <div className={["text-checkbox", variant2Class].join(" ")}>
                                    <p className={item.image ? "text-white" : "text-dark"}>{item.label}</p>
                                    <input type="checkbox" checked={isOptionSelected(item.value)} readOnly />
                                </div>
                            </figure>
                        </div>
                    );
                })}
            </div>
        );
    }
);
