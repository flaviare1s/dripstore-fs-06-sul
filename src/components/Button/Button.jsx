// type Tipo = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
// const x: Tipo;

function Button({ children, ...rest }) {
  return (
    <button
      {...rest}
      className="px-4 py-2 bg-white text-black border-black border-[1px]"
    >
      {children}
    </button>
  );
}

export { Button };
