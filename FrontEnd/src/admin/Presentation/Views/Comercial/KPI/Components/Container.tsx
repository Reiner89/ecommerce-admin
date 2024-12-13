import { CardProps, Cards } from "./Cards";

export const Container = ({ cards }: Props) => {
  return (
    <>
      {cards.map((card, index) => (
        <div
          className="col w-full px-3 bg-white shadow-[0_20px_27px_0_rgba(0,0,0,.05)] rounded-2xl"
          key={index}
        >
          <Cards {...card} />
        </div>
      ))}
    </>
  );
};

interface Props {
  cards: CardProps[];
}
