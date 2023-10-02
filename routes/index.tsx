import { PageProps } from "$fresh/server.ts";
import { CountryListItem } from "@/components/CountryListItem.tsx";
import { Layout } from "@/components/Layout.tsx";
import countries from "@/data/countries.js";
import visited from "@/data/visited.js";
import { Country } from "@/types/Country.ts";
import { classes } from "@/util/classes.ts";

function isVisited(country: Country): boolean {
  return visited.some((v) => v[1] === country.cca3);
}

export default function Countries(props: PageProps) {
  return (
    <Layout path={props.route}>
      <section class="max-w-screen-md mx-auto flex flex-col items-center justify-center gap-4">
        <h1 class="text-3xl font-bold">Список всех* стран**</h1>
        <ol class="flex flex-col gap-2">
          {countries.map((c, i) => (
            <CountryListItem
              country={c}
              index={i + 1}
              isVisited={isVisited(c)}
            />
          ))}
        </ol>
      </section>
    </Layout>
  );
}
