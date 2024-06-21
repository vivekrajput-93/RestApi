import React from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface FilterProps {
    setRegion: (region: string) => void;
}

const Filter: React.FC<FilterProps> = ({ setRegion }) => {
    return (
        <Select onValueChange={setRegion}>
            <SelectTrigger className="w-[200px] font-bold outline-none absolute right-20">
                <SelectValue placeholder="Filter by Region" className="font-bold" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem className="cursor-pointer" value="all">All</SelectItem>
                    <SelectItem className="cursor-pointer" value="Africa">Africa</SelectItem>
                    <SelectItem className="cursor-pointer" value="Americas">Americas</SelectItem>
                    <SelectItem className="cursor-pointer" value="Asia">Asia</SelectItem>
                    <SelectItem className="cursor-pointer" value="Europe">Europe</SelectItem>
                    <SelectItem className="cursor-pointer" value="Oceania">Oceania</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default Filter;
