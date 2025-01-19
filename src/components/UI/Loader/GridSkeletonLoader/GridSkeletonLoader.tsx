import Skeleton from 'react-loading-skeleton'

export const GridSkeletonLoader = () => (
    <Skeleton
        containerClassName="min-h-[400px] grid grid-cols-1 md:grid-cols-3 gap-4 w-full"
        className="aspect-square !w-full"
        baseColor="#a1a5ab"
        highlightColor="#dadfe6"
        count={4}
        inline
        duration={0.75}
    />
)
