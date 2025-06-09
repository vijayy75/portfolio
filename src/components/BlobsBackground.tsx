const BlobsBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
      
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0c_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] bg-purple-600 opacity-30 blur-2xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 left-[30%] w-[500px] h-[500px] bg-fuchsia-700 opacity-25 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-cyan-500 opacity-20 blur-2xl rounded-full animate-pulse" />
    </div>
  );
};

export default BlobsBackground;
