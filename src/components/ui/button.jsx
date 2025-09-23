export function Button({ asChild, children, ...props }) {
  if (asChild && children?.type === "a") {
    return (
      <a
        {...props}
        className="inline-block rounded-2xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
      >
        {children.props.children}
      </a>
    );
  }
  return (
    <button
      {...props}
      className="rounded-2xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
}
