export const HeadTags = ({
  title,
  description = "emrhino Marcin",
  robots = true,
}: {
  title?: string;
  description?: string;
  robots?: boolean;
}) => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=yes, initial-scale=1.0, viewport-fit=cover"
      />
      <meta
        name="robots"
        content={robots ? "index,follow" : "noindex,nofollow"}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/fav/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/fav/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/fav/favicon-16x16.png"
      />
      <link rel="manifest" href="/fav/site.webmanifest"></link>
    </>
  );
};
