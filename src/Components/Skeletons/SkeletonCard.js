import { Shimmer } from "./Shimmer";
import { SkeletonElement } from "./SkeletonElement";

const SkeletonCard = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-card">
        <SkeletonElement type="skeleton-img" />
        <SkeletonElement type="skeleton-title" />
        <SkeletonElement type="skeleton-text" />
        <SkeletonElement type="skeleton-price" />
        <SkeletonElement type="skeleton-btn" />
      </div>
      <Shimmer/>
    </div>
  );
};
export { SkeletonCard };
