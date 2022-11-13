/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FC } from 'react';

type ProfileProps = {
  bio: string;
  currentLevel: number;
  username: string;
};

export const Profile: FC<ProfileProps> = ({ bio, currentLevel, username }) => {
  const nextLevel = Math.min(currentLevel + 1, 6);
  const Heading = `h${nextLevel}`;

  return (
    <div>
      {/* <Heading>{username}</Heading> */}
      <p>{bio}</p>
    </div>
  );
};
