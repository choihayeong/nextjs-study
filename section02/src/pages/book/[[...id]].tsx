import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  const { id } = router.query;

  return <h2>Book {id}</h2>;
}
