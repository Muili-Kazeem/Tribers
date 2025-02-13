export interface IFilter {
  name: string;
  key?: string;
  min?: number;
  max?: number;
}

export enum FilterEnum {
  search = 'search',
  sort = 'sort',
  category = 'category',
  priceRange = 'price',
  percentage = 'percentage',
  location = 'location',
}

export interface IFilterForm {
  search: string;
  sort: IFilter;
  category: string;
  priceRange: [number, number];
  percentage: IFilter;
  location: string;
}

export const Categories: string[] = [
  'Clear',
  'Tech',
  'Engineering',
  'Security',
  'Finance',
  "Transport",
  "Hospitality",
  "Flight",
  "Human resouces",
];

export const Percentages: IFilter[] = [
  { name: "Clear" },
  { name: 'Free', min: 0, max: 0 },
  { name: '1 - 10%', min: 1, max: 10 },
  { name: '11 - 25%', min: 11, max: 25 },
  { name: '26 - 50%', min: 26, max: 50 },
  { name: "51 - 65%", min: 51, max: 65 },
  { name: "65% & Above", min: 65, max: 100 },
];

export const Locations: string[] = [
  'Clear',
  'Worodougou',
  'Yamoussoukro',
  "Sassandra-Marahoué District",
  "Woroba District",
  "Gôh-Djiboua District",
  'Centre',
  'Littoral',
  "North Bank Division",
];

export const Chronologies: IFilter[] = [
  { name: 'Newest to oldest', key: 'down' },
  { name: 'Oldest to newest', key: 'up' },
];

export const PriceRange = {
  min: 1000,
  max: 100000
}
