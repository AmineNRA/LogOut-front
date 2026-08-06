import { useQuery } from "@tanstack/react-query";
import { getReviews } from "../api/getReviews";
import Loading from "@/components/ui/loading/Loading";
import { type review } from "@/types/review";
import ExpandableText from "@/components/ExpandableText/ExpandableText";
import { formatDate } from "@/utils/format";
import StarRating from "@/components/ui/StarRating";
import { useLocation } from "react-router-dom";

type ReviewsProps = {
    id: number
}

export default function Reviews({ id }: ReviewsProps) {

    const location = useLocation();

    const { data: reviews, isLoading, error } = useQuery({
        queryKey: ['reviews', id],
        queryFn: () => getReviews(id, location.pathname)
    })

    return (
        <>
            {isLoading ? <Loading /> :
                <ul className="text-app-text my-2">
                    {reviews.results.length > 0 ?
                        reviews.results.map((review: review) => (
                            <li key={review.id} className="grid grid-cols-[auto_1fr] items-center  first:border-t-0 border-y-2 border-y-[#273140] py-2">
                                <img src={review.author_details.avatar_path ? `https://image.tmdb.org/t/p/w400${review.author_details.avatar_path}` : "/user.png"} alt="avatar" className="max-w-10 grow mr-4 rounded-3xl" />
                                <div>
                                    <div className="flex gap-2">
                                        <p className="font-bold">{review.author}</p>
                                        {review.author_details.rating && <StarRating rate={review.author_details.rating} />}
                                        <p>{formatDate(review.created_at)}</p>
                                    </div>
                                    <ExpandableText text={review.content} amountOfWords={36} />
                                </div>
                            </li>
                        )) :
                        <p className="font-bold">Aucun avis pour le moment</p>
                    }
                </ul>
            }
        </>
    )
}