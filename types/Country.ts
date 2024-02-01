export type Country = {
  name: CountryName & {
    nativeName?: {
      [key: string]: CountryName | undefined;
    };
  };
  cca3: string;
  flags: {
    svg: string;
    png: string;
  };
};

type CountryName = {
  common: string;
  official: string;
};
