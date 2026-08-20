import Select from "react-select";
import { type StylesConfig } from "react-select";
import { type Filter } from '@/types/filter';
import { useLocation } from "react-router-dom";

type FilterBarProps = {
    filterOptions: Filter,
    handleChange: (name: string, value: string | number) => (void)
}

export default function FilterBar({ filterOptions, handleChange }: FilterBarProps) {

    const location = useLocation();

    const seriesGenre = {
        name: "genre",
        placeholder: "Genre",
        options: [
            { value: 10759, label: "Action & Aventure" },
            { value: 16, label: "Animation" },
            { value: 35, label: "Comédie" },
            { value: 80, label: "Crime" },
            { value: 99, label: "Documentaire" },
            { value: 18, label: "Drame" },
            { value: 10751, label: "Familial" },
            { value: 10762, label: "Kids" },
            { value: 9648, label: "Mystère" },
        ]

    }

    const filtersToDisplay = [...filterOptions];
    if (location.pathname === "/series") {
        filtersToDisplay[3] = seriesGenre;
    }

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
        <section className="flex gap-3 items-baseline" >
            <p className="text-app-text font-bold">Filtrer par :</p>
            {
                filtersToDisplay.map((option) => (
                    <button className="text-app-text" key={option.name}>
                        <Select name={option.name} options={option.options} placeholder={option.placeholder} unstyled styles={customStyles} isSearchable={false} onChange={(value, actionMeta) => { if (value.value && actionMeta.name) handleChange(actionMeta.name, value.value) }} />
                    </button>
                ))
            }
        </section >
    )
}