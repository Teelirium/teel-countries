import { PageProps } from '$fresh/server.ts';
import { CountryListItem } from '@/components/CountryListItem.tsx';
import { Layout } from '@/components/Layout.tsx';
import countries from '@/data/countries.js';

export default function RandomCountry(props: PageProps) {
  const idx = Math.floor(Math.random() * countries.length);
  return (
    <Layout path={props.route}>
      <section class='max-w-screen-md mx-auto flex flex-col items-center justify-center gap-4'>
        <CountryListItem country={countries[idx]} />
      </section>
    </Layout>
  );
}
