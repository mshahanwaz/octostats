import * as React from "react";
import { useRouter } from "next/router";

const User: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>Routed page with id={id}</h1>
    </div>
  );
};

export default User;
