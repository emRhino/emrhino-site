interface ParagraphContentProps {
  data: string;
}

export default function ParagraphContent({ data }: ParagraphContentProps) {
  return <p>{data}</p>;
}
