// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Word = ({ value, hidden = false }) => {
  const getStyle = () => {
    return {
      visibility: hidden ? "hidden" : "visible",
    };
  };
  return (
    <div className="digital">
      <p>{value}</p>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <p style={getStyle() as any}>{value}</p>
    </div>
  );
};
