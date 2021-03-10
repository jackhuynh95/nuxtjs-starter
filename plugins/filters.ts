export function importFilters() {
  const filters = (require as any).context('../filters', true, /\.ts$/);
  const keys = filters.keys();

  keys.forEach((key: string) => {
    filters(key);
  });
}

importFilters();