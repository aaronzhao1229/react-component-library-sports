export default function LoadingComponent() {
  return (
    <div className="h-screen flex items-center justify-center">
        <div className="w-24 h-24 border-l-2 border-teal rounded-full animate-spin"></div>
        <h2 className="text-gray-700 text-xl m-2">Loading...</h2>
    </div>
  )
}