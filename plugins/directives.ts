export function importDirectives() {
  const pagesRoutes = (require as any).context('../directives', true, /\.ts$/);
  const keys = pagesRoutes.keys();

  keys.forEach((key: string) => {
    pagesRoutes(key);
  });
}

importDirectives();