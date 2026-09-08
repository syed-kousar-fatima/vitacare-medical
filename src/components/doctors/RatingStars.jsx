import { Star, StarHalf } from 'lucide-react';

const RatingStars = ({ rating, reviews, showCount = true }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
        ))}
        {hasHalfStar && <StarHalf size={14} className="fill-[#F59E0B] text-[#F59E0B]" />}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <Star key={i} size={14} className="text-[#E2E8F0] dark:text-[#334155]" />
        ))}
      </div>
      {showCount && (
        <span className="text-xs font-poppins text-[#64748B] dark:text-[#94A3B8]">
          ({reviews} Reviews)
        </span>
      )}
    </div>
  );
};

export default RatingStars;
