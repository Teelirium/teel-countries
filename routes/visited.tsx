import { PageProps } from '$fresh/server.ts';
import { CountryListItem } from '@/components/CountryListItem.tsx';
import { Layout } from '@/components/Layout.tsx';
import countries from '@/data/countries.js';
import visited from '@/data/visited.js';

export default function Visited(props: PageProps) {
  return (
    <Layout path={props.route}>
      <section class='max-w-screen-md mx-auto flex flex-col items-center justify-center gap-4'>
        <h1 class='text-3xl font-bold'>Список всех посещённых* стран**</h1>
        <ol class='flex flex-col gap-2'>
          {visited.map(([date, code]) => {
            const country = countries.find((c) => c.cca3 === code);
            return (
              <>
                {country ? (
                  <CountryListItem country={country}>
                    <span>~</span>
                    {new Date(date).toLocaleDateString(undefined, {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </CountryListItem>
                ) : (
                  <li class='flex gap-2'>
                    <span>{code}</span>
                    <span>~</span>
                    {new Date(date).toLocaleDateString(undefined, {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </li>
                )}
              </>
            );
          })}
        </ol>
      </section>
    </Layout>
  );
}
