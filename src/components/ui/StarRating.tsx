import Starfat from "./icons/star";

type StarRatingProps = {
    rate: number
}

export default function StarRating({ rate }: StarRatingProps) {
    const rateOfFive = Math.round(rate / 2);

    return (
        <span className="flex ml-3">
            {Array.from({ length: rateOfFive }).map((_, index) => (
                <Starfat key={index} size={24} />
            ))}
        </span>
    )
}