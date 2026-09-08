const Skeleton = ({ className = '', variant = 'rect' }) => {
  const variants = {
    rect: 'rounded-lg',
    circle: 'rounded-full',
    text: 'rounded h-4 w-full'
  };

  return (
    <div 
      className={`animate-pulse bg-[#E2E8F0] dark:bg-[#334155] ${variants[variant]} ${className}`}
    />
  );
};

export default Skeleton;
