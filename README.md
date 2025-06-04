# study-nextjs

## Page Router

- 커맨더에 다음 명령어 실행

```bash
npx create-next-app@14 section02
```

- `/section02/next.config.mjs` 에서 `reactStrictMode: false`로 설정

- `/src/pages/book/[id].tsx`

  - `http://localhost:3000/book/aaa` 로 접속 할 수 있다.
  - `http://localhost:3000/book/`, `http://localhost:3000/book/aaa/ccc` 로 접근하면 404페이지로 이동함

- `[...id].tsx` : catch all segment

  - `http://localhost:3000/book/aaa/ccc` 로도 접속 할 수 있다.
  - `http://localhost:3000/book/` 로 접근하면 404페이지로 이동함

- `[[...id]].tsx` : optional catch all segment

  - `http://localhost:3000/book/`, `http://localhost:3000/book/aaa`, `http://localhost:3000/book/aaa/ccc` 로 접속 할 수 있다.
