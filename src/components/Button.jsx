const Button = ({ children, onClick, secondary=false }) => {
  return (
    <button
      onClick={onClick}
      className={
        'sm:whitespace-nowrap inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm duration-100 select-none ' +
        (secondary ? 'bg-slate-100 text-slate-900 hover:bg-slate-200 active:bg-slate-100' : 'bg-primary text-white hover:bg-primary-hover active:bg-primary-active')
      }
    >
      {children}
    </button>
  )
};

export default Button;