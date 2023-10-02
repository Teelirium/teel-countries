import { Country } from '@/types/Country.ts';
import { classes } from '@/util/classes.ts';
import { ComponentChildren } from 'preact';

type Props = {
  country: Country;
  isVisited?: boolean;
  index?: number;
  children?: ComponentChildren;
};

export function CountryListItem(props: Props) {
  const { country, isVisited = false, index, children } = props;
  return (
    <li
      class={classes(
        isVisited ? 'line-through order-first opacity-60 -z-1' : '',
        'flex gap-2 items-center'
      )}
    >
      {index !== undefined && <span>{index}.</span>}
      <span>{country.name.common}</span>
      <img class='w-10' src={country.flags.svg} />
      <span>{country.cca3}</span>
      <a
        href={`https://en.wikipedia.org/wiki/${country.name.common}`}
        class='text-blue-600'
      >
        wiki
      </a>
      {children}
    </li>
  );
}
