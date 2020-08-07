const Button = ({ children, href = "#", onClick }) => (
  <div className="mt-6 rounded-md shadow">
    {onClick ? (
      <button
        onClick={onClick}
        className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out w-full"
      >
        {children}
      </button>
    ) : (
      <a
        href={href}
        className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
      >
        {children}
      </a>
    )}
  </div>
);

export default Button;
