import { animateScroll } from "react-scroll";

export const scrollToBottomWithOutAnimated = (id: string) => {
  setTimeout(() => {
    animateScroll.scrollToBottom({
      containerId: id,
      duration: 0,
      delay: 0,
      smooth: true,
      isDynamic: true,
      offset: -50,
    });
  }, 10);
};

export const scrollToBottomWithAnimated = (id: string) => {
  setTimeout(() => {
    animateScroll.scrollToBottom({
      containerId: id,
      duration: 500,
      delay: 0,
      smooth: true,
      isDynamic: true,
      offset: -50,
    });
  }, 10);
};
