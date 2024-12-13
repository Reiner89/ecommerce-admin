export const backgroundAsideBlanco = "bg-white dark:bg-white shadow-[rgba(0,0,0,0.05)_0rem_1.25rem_1.6875rem_0rem]";

export const bgAsideTransparent = "bg-[rgb(240,242,245)] dark:bg-transparent";

export const bgLabelAside = [
  {
    id: 0,
    background: "bg-pink-600",
    hover: "hover:bg-pink-600 hover:text-white",
  },
  {
    id: 1,
    background: "bg-cyan-950",
    hover: "hover:bg-cyan-950 hover:text-white",
  },
  {
    id: 2,
    background: "bg-[linear-gradient(195deg,rgb(73,163,241),rgb(26,115,232))]",
    hover: "hover:bg-[linear-gradient(195deg,rgb(73,163,241),rgb(26,115,232))] hover:text-white",
  },
  {
    id: 3,
    background: "bg-green-600",
    hover: "hover:bg-green-600 hover:text-white",
  },
  {
    id: 4,
    background: "bg-orange-400",
    hover: "hover:bg-orange-400 hover:text-white",
  },
  {
    id: 5,
    background: "bg-red-600",
    hover: "hover:bg-red-600 hover:text-white",
  },
];

export interface bgItemAside {
  id: number;
  background: string;
  hover: string;
}
