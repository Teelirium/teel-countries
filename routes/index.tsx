import { PageProps } from "$fresh/server.ts";
import { CountryListItem } from "@/components/CountryListItem.tsx";
import { Layout } from "@/components/Layout.tsx";
import countries from "@/data/countries.js";
import { VISITED_COUNTRIES } from "@/data/visited.js";
import { Country } from "@/types/Country.ts";

function isVisited(country: Country): boolean {
  return VISITED_COUNTRIES.some((visited) => visited[2] === country.cca3);
}

export default function Countries(props: PageProps) {
  return (
    <Layout path={props.route}>
      <section class="max-w-screen-md mx-auto flex flex-col items-center justify-center gap-4">
        <h1 class="text-3xl font-bold">Список всех* стран**</h1>
        <ol class="flex flex-col gap-2">
          {countries.sort((a, b) => +isVisited(b) - +isVisited(a)).map((
            country,
            idx,
          ) => (
            <CountryListItem
              country={country}
              index={idx + 1}
              isVisited={isVisited(country)}
            />
          ))}
        </ol>
      </section>
    </Layout>
  );
}
