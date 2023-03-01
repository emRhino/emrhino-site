import { Fragment } from "react";
import ParagraphContent from "./sections/ParagraphContent";
import ListContent from "./sections/ListContent";
import ImageContent from "./sections/ImageContent";
import LinksContent from "./sections/LinksContent";
import VideoContent from "./sections/VideoContent";

const chooseSection = (section, data) => {
  switch (section) {
    case "p":
      return <ParagraphContent data={data} />;
      break;
    case "image":
      return <ImageContent data={data} />;
      break;
    case "links":
      return <LinksContent data={data} />;
      break;
    case "list":
      return <ListContent data={data} />;
      break;
    case "video":
      return <VideoContent data={data} />;
      break;
    default:
      throw new Error(`${section} - niepoprawny szablon sekcji`);
  }
};

interface ProjectContentProps {
  sections: [
    {
      type: string;
      content: string;
    }
  ];
}

export default function ProjectContent({ sections }: ProjectContentProps) {
  const renderContent = sections.map((section) => (
    <Fragment key={section.content}>
      {chooseSection(section.type, section.content)}
    </Fragment>
  ));
  return <div className="content">{renderContent}</div>;
}
