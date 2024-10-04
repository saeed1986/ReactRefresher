export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      {/* this {..props} added to add any other style or generally other props like ids or classNames. */}
      <h2>{title}</h2>
      {children}
    </section>
  );
}
