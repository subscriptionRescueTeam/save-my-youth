export type ArrowRightProps = {
  color?: string;
};

const ArrowRight = ({ color = '#929292' }: ArrowRightProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 17L15 12L10 7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRight;
