export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {

  const getCardStyles = () => {
    const baseStyles = "rounded-xl shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 p-7 m-4 h-full w-full";

    return `${baseStyles} bg-white border border-gray-100 hover:border-gray-200`;
};

  return (
    <div className={`${getCardStyles()}`}>
      {children}
    </div>
  );
}