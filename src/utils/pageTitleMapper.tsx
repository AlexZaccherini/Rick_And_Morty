// project imports
import PageTitle from "../enumerations/pageTitle";

export const pageTitleToPath: (page: PageTitle) => string = (
  page: PageTitle
) => {
  switch (page) {
    case PageTitle.HOME: {
      return "/";
    }
    case PageTitle.CHARACTER_LIST: {
      return "/list";
    }
  }
};
