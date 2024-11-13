"use client";

import { revalidateTagAction } from "@/actions/revalidate";

export const RevalidateButton = () => {
  const handleClick = () => {
    // revalidatePathAction("/actions"); // with url path
    revalidateTagAction("actions"); // with tag
  };

  return <button onClick={handleClick}>Revalidar Cache</button>;
};
