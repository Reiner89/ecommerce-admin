import { CardProps, Cards } from "./Cards";

export const Container = ({ className, cards }: Props) => {
  return (
    <div className={`row flex flex-col w-full ${className}`}>
      {cards.map((card, index) => (
        <div
          className={`col w-full h-[50%] bg-white dark:bg-[#27293d] shadow-[0_20px_27px_0_rgba(0,0,0,.05)] rounded-2xl ${
            index % 2 == 1 ? "mt-6" : ""
          }`}
          key={index}
        >
          <Cards {...card} />
        </div>
      ))}
    </div>
  );
};

interface Props {
  className?: string;
  cards: CardProps[];
}
