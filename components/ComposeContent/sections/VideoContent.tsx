interface ListContentProps {
  data: [
    {
      label: string;
      source: string;
    }
  ];
}

export default function VideoContent({ data }: ListContentProps) {
  return <div>Video</div>;
}
