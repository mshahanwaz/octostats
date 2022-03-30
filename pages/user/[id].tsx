import * as React from "react";
import { useRouter } from "next/router";
import Profile from "../../components/Profile";

interface ID {
  id: string;
}

export default function User() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData(id: any) {
      await fetch(`https://api.github.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
    if (id) fetchData(id);
  }, [id]);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <Profile data={data} />
    </>
  );
}
