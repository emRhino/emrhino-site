import { HeadTags } from "@/components/HeadTags";
import { home_page } from "@/data";

export default function Head() {
  return <HeadTags title={home_page.page_meta_title} />;
}
