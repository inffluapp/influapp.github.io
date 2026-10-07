// The legal pages now live on the main site (www.influapp.com, built in Framer).
// Static GitHub Pages cannot send HTTP redirects, so each old page sends visitors
// on with a meta refresh, a JS redirect and a canonical link. The old content stays
// below as the fallback body for clients that follow neither.
export default function LegacyRedirect({ to }: Readonly<{ to: string }>) {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <link rel="canonical" href={to} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(to)});`,
        }}
      />
    </>
  );
}
