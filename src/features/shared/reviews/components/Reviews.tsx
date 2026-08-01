import { useQuery } from "@tanstack/react-query";
import { getReviews } from "../api/getReviews";
import Loading from "@/components/ui/loading/Loading";

type ReviewsProps = {
    id: number
}

export default function Reviews({ id }: ReviewsProps) {



    const { data: reviews, isLoading, error } = useQuery({
        queryKey: ['reviews'],
        queryFn: () => getReviews(id)
    })

    console.log(reviews)

    return (
        <>
            {isLoading ? <Loading /> :
                <div className="text-app-text my-2">
                    {reviews.results.length > 0 ?
                        reviews.results.map((review) => (
                            <div key={review.id} className="grid grid-cols-[auto_1fr]">
                                <img src={review.author_details.avatar_path ? review.author_details.avatar_path : "/user.png"} alt="avatar" className="max-w-10 grow mr-4" />
                                <div>
                                    <div className="flex gap-2">
                                        <p>{review.author}</p>
                                        <p>{review.created_at}</p>
                                    </div>
                                    <p>{review.content.substring(0, 180) + "..."}</p>
                                </div>
                            </div>
                        )) :
                        <p className="font-bold">Aucun avis pour le moment</p>
                    }
                </div>
            }
        </>
    )
}