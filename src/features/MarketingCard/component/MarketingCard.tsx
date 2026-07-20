import type { MarketingCardProps } from "./MarketingCard.types"

export default function MarketingCard({
    title,
    description,
    imageSrc,
    imageAlt,
    reverse = false
}: MarketingCardProps) {
    return (
        <div className={`flex p-6 ${reverse ? 'flex-row-reverse text-right' : ''} max-w-3xl gap-20`}>
            <div className="flex flex-col">
                <p className={`text-app-text-h font-bold text-2xl mb-4 `}>{title}</p>
                <p className="text-[#BADEFC]">{description}</p>
            </div>
            <img src={imageSrc} alt={imageAlt} />
        </div>
    )
}