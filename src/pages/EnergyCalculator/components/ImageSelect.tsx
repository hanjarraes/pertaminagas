import React from "react";

type ImageSelectProps = {
    data: Item[];
    value?: string[];
    onChange: (payload: string[]) => void;
};

type Item = {
    value: string;
    label: string;
    image: any;
};
export const ImageSelect: React.FC<ImageSelectProps> = React.forwardRef(
    ({ data, value, onChange }, ref) => {

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
                    console.log(item.image);

                    return (
                        <div
                            key={item.value}
                            className="col-6 col-lg-4"
                            onClick={() => onItemChange(item.value)}
                        >
                            <figure className={["figure image-select-item", isOptionSelected(item.value) ? "selected" : ""].join(" ")}>
                                <img src={item.image} alt={item.label} />
                                <p>{item.label}</p>
                                {isOptionSelected(item.value) && <input type="checkbox" checked />}
                            </figure>
                        </div>
                    );
                })}
            </div>
        );
    }
);
