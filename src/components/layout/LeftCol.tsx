import { FC } from "react";
import { ProfileCard } from "../profileCard/ProfileCard";

export const LeftColumn: FC = () => {
  // ***** return jsx *****
  return (
    <div className="lg:w-2/5 lg:min-h-screen lg:fixed lg:overflow-y-auto p-2 lg:p-12 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        {/* Profile card - white with red accents */}
        <ProfileCard />
      </div>
    </div>
  );
};
