declare module 'bib2json' {
  interface BibEntry {
    EntryType: string;
    EntryKey: string;
    Fields: Record<string, string>;
  }

  interface BibResult {
    entries: BibEntry[];
    errors: unknown[];
  }

  const parseBibTeX: (source: string) => BibResult;
  export default parseBibTeX;
}
