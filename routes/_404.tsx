import { Head } from '$fresh/runtime.ts';
import { Layout } from '@/components/Layout.tsx';

export default function Error404() {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <Layout>Страницы нет такой бл</Layout>
    </>
  );
}
