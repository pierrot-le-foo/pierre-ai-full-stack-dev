import WithInView from "./within-view";

export default function EnterAnimation({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <WithInView
      animate={(isInView) => ({
        y: isInView ? 0 : -10,
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.8,
      })}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </WithInView>
  );
}