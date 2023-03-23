import { useEffect, useState } from "react";
import debounce from "lodash/debounce";
import { queries } from "@utils/breakpoints";

interface Values {
  isMobile: boolean;
  isDesktop: boolean;
  isPhone: boolean;
  isTablet: boolean;
  isDesktopMedium: boolean;
  isDesktopLarge: boolean;
}

const getValues = (): Values => {
  const isPhone = window.matchMedia(queries.phone).matches;
  const isTablet = window.matchMedia(queries.tablet).matches;
  const isDesktopMedium = window.matchMedia(queries.desktopMedium).matches;
  const isDesktopLarge = window.matchMedia(queries.desktopLarge).matches;
  const isMobile = isPhone || isTablet;
  const isDesktop = isDesktopMedium || isDesktopLarge;

  return {
    isMobile,
    isDesktop,
    isPhone,
    isTablet,
    isDesktopLarge,
    isDesktopMedium,
  };
};

const initialValues = {
  isMobile: true,
  isDesktop: false,
  isPhone: true,
  isTablet: false,
  isDesktopMedium: false,
  isDesktopLarge: false,
};

export default function useScreenSize(): Values {
  const isSupported = typeof window !== "undefined" && "matchMedia" in window;

  const [values, setValues] = useState<Values>();

  useEffect(() => {
    if (!isSupported) {
      return;
    }

    const set = () => setValues(getValues());
    const setWithDebounce = debounce(set, 100);

    if (!values) {
      set();
    }

    window.addEventListener("resize", setWithDebounce);
    return () => {
      window.removeEventListener("resize", setWithDebounce);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSupported]);

  return values || initialValues;
}
