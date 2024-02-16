import { useEffect } from "react";
import * as ga from "./ga/";

export const useGtag = (id, btnGClick, useBtnGClick) => {
  if (typeof window !== "undefined") {
    useBtnGClick(id);
  }

  useEffect(() => {
    if (btnGClick !== null) {
      ga?.gtagCounter(btnGClick);
      return useBtnGClick(null);
    }
  }),
    [btnGClick];
};
