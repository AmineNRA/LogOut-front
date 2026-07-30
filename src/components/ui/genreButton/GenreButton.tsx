type GenreButtonProps = {
    name: string,
}

export default function GenreButton({ name }: GenreButtonProps) {
    return (
        <button className="border rounded-lg p-[4px] bg-[#273140] font-bold mx-1">{name}</button>
    )
}