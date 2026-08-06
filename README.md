# Wenxi Li personal website

The repository root contains the currently published static build for
<https://liwenxi97.github.io/>. The maintainable React and TypeScript project
has been recovered into [`source/`](source/) from the source maps that were
committed with the original build.

## Local development

```bash
cd source
pnpm install
pnpm dev
```

Most website content is in `source/src/App.tsx`:

- biography and research interests;
- education and research projects;
- publications and selected presentations;
- presentations and awards.

Reusable publication, award, and footer components are in
`source/src/components/`. Images are in `source/src/assets/`.

## Build

```bash
cd source
pnpm build
```

The production site is generated in `source/dist/`. GitHub Pages is served from
the repository root, so a reviewed build must be copied there before committing:

```bash
cd ..
cp -R source/dist/. .
```

Commit both the maintainable files under `source/` and the generated files in
the repository root. The generated `source/dist/` directory itself remains
ignored.

## Recovery provenance

Run `pnpm recover` only when the original source maps in the repository root
need to be extracted again. Normal content updates should edit the recovered
files directly.
