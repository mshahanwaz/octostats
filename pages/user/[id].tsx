import * as React from "react";
import { useRouter } from "next/router";
import Profile from "../../components/Profile";

const User: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Profile id={id} />
      <p>{id} is query</p>
    </>
  );
};

export default User;
