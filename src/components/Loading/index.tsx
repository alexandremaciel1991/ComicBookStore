import { LoadingContainer, SkeletonStyle } from "./styles";
import Skeleton from "@mui/material/Skeleton";

export const Loading = () => {
  return (
    <LoadingContainer>
      <SkeletonStyle variant="rectangular" width={270} height={418} />
      <SkeletonStyle variant="rectangular" width={270} height={418} />
      <SkeletonStyle variant="rectangular" width={270} height={418} />
      <SkeletonStyle variant="rectangular" width={270} height={418} />
      <SkeletonStyle variant="rectangular" width={270} height={418} />
      <SkeletonStyle variant="rectangular" width={270} height={418} />
      <SkeletonStyle variant="rectangular" width={270} height={418} />
      <SkeletonStyle variant="rectangular" width={270} height={418} />
      <SkeletonStyle variant="rectangular" width={270} height={418} />
      <SkeletonStyle variant="rectangular" width={270} height={418} />
    </LoadingContainer>
  );
};
