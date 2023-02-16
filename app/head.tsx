// export default function Head() {
//   return (
//     <>
//       <title>Create Next App</title>
//       <meta content="width=device-width, initial-scale=1" name="viewport" />
//       <meta name="description" content="Generated by create next app" />
//       <link rel="icon" href="/favicon.ico" />
//     </>
//   );
// }

import { HeadTags } from "../components/HeadTags";

export default function Head() {
  return (
    <HeadTags title="Polski Frontend – artykuły z polskich blogów frontendowych" />
  );
}
