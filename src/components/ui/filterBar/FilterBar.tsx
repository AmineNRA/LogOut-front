import Select from "react-select";
import { type StylesConfig } from "react-select";
import { type Filter } from '@/types/filter';

type FilterBarProps = {
    filterOptions: Filter,
    handleChange: (name: string, value: string | number) => (void)
}

export default function FilterBar({ filterOptions, handleChange }: FilterBarProps) {

    const customStyles: StylesConfig = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            border: state.isFocused ? '2px solid #BBCCDD' : '',
        }),
        menu: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "#1D232A",
            width: "max-content",
            minWidth: "100%",
            border: '1px solid #BBCCDD',
        }),
        dropdownIndicator: (baseStyles) => ({
            ...baseStyles,
            color: '#00B4D8',
        }),
        option: (baseStyles) => ({
            ...baseStyles,
            padding: '8px 12px',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            ':hover': {
                backgroundColor: '#3B82F6',
                color: '#FFFFFF',
            }
        })
    }

    return (
        <section className="flex gap-3 items-center" >
            <p className="text-app-text font-bold">Filtrer par :</p>
            {
                filterOptions.map((option) => (
                    <button className="text-app-text" key={option.name}>
                        <Select name={option.name} options={option.options} placeholder={option.placeholder} unstyled styles={customStyles} isSearchable={false} onChange={(value, actionMeta) => { if (value.value && actionMeta.name) handleChange(actionMeta.name, value.value) }} />
                    </button>
                ))
            }
        </section >
    )
}