import React from "react";

type SingleSelectProps = {
    multiple?: false;
    value?: string;
    onChange: (payload: string) => void;
}

type MultipleSelectProps = {
    multiple: true;
    value?: string[];
    onChange: (payload: string[]) => void;
}

type ImageSelectProps = {
    data: Item[];
    variant?: number;

} & (SingleSelectProps | MultipleSelectProps);

type Item = {
    value: string;
    label: string;
    image?: any;

};
export const ImageSelect: React.FC<ImageSelectProps> = React.forwardRef(
    ({ data, value, variant = 1, multiple, onChange }, ref) => {

        function onItemChange(selected: string) {
            if (multiple) {
                if (value?.includes(selected)) {
                    onChange(value.filter((item) => item !== selected));
                } else {
                    onChange([...(value ?? []), selected]);
                }
            } else {
                if (selected !== value) onChange(selected);
            }
        }

        function isOptionSelected(option: string): boolean {
            return multiple ? Boolean(value?.includes(option)) : Boolean(option === value);
        }

        return (
            <div
                className="row"
            >
                {data.map((item, i) => {
                    const variant2Class = variant === 2 ? "variant-2" : "";
                    const isSelected = isOptionSelected(item.value)

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
                                    {multiple ?
                                        <input type="checkbox" checked={isSelected} readOnly />
                                        : isSelected ? <input type="checkbox" checked readOnly /> : undefined}
                                </div>
                            </figure>
                        </div>
                    );
                })}
            </div>
        );
    }
);
