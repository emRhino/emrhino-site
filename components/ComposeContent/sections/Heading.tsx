interface HeadingProps {
  data: string;
}

export default function Heading({ data }: HeadingProps) {
  return <h2>{data}</h2>;
}
