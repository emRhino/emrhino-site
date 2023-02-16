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
    </>
  );
};
