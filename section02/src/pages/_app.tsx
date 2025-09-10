import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    router.push("/test");
    // router.replace("/test"); // 현재 페이지를 대체함(뒤로가기 했을 때, 현재 페이지로 돌아올 수 없음)
    // router.back(); // 이전 페이지로 이동
    // router.prefetch("/test"); // 사전 로드(미리 로드)
    // router.reload(); // 현재 페이지 새로고침
  }

  return (
    <div>
      <header>
        <Link href={"/"}>index</Link>
        &nbsp;
        <Link href={"/search"}>search</Link>
        &nbsp;
        <Link href={"/book/1"}>book/1</Link>
        <div>
          <button type="button" onClick={onClickButton}>/test 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </div>
  );
}
