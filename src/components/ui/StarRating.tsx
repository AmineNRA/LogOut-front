import StarFat from "./icons/star";
import StarFatHalf from "./icons/demiStar";
import { useState } from "react";

type StarRatingProps = {
    rate: number
}

export default function StarRating({ rate }: StarRatingProps) {

    const [rateOfFive, setRateOfFive] = useState(parseFloat((rate / 2).toFixed(1)))
    const [rows, setRows] = useState<React.JSX.Element[]>([]);

    while (rateOfFive > 0) {
        if (rateOfFive >= 0 && rateOfFive <= 0.9) {
            setRows([...rows, <StarFatHalf key={rateOfFive} size={24} />])
            setRateOfFive(rateOfFive - 1)
        }
        else {
            setRows([...rows, <StarFat key={rateOfFive} size={24} />])
            setRateOfFive(rateOfFive - 1)
        }
        break;
    }


    return (
        <span className="flex">
            {rows.map((star) => star)}
        </span>
    )
}