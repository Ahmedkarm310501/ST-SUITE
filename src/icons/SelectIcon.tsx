const SelectIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.35714 7.125L0.875 9L4.35714 10.875M4.35714 7.125L9 9.625L13.6429 7.125M4.35714 7.125L0.875 5.25L9 0.875L17.125 5.25L13.6429 7.125M13.6429 7.125L17.125 9L13.6429 10.875M13.6429 10.875L17.125 12.75L9 17.125L0.875 12.75L4.35714 10.875M13.6429 10.875L9 13.375L4.35714 10.875"
        stroke="#6B6B6B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SelectIcon;
