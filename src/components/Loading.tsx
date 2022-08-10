interface LoadingProps {
  t?: string
}
const Loading: React.FC<LoadingProps> = ({ t = "Please Wait..." }) => {
  return (
    <div className="fixed  top-0 left-0 right-0 bottom-0 h-100 bg-black/[.5] z-20 m-0 p-0">
      <div className="absolute top-1/2 text-white text-2xl cursor-default select-none text-bold m-0 p-0 left-1/2 -translate-y-1/2  -translate-x-1/2">
        <div className="justify-center items-center text-center flex flex-col">
          <span className="animate-spin rounded-full inline-flex h-20 w-20 rounded-full border-sky-400 border-t-2"></span>
          <h1 className="my-1 animate-pulse "> {t}</h1>
        </div>
      </div>
    </div>
  )
}

export default Loading
