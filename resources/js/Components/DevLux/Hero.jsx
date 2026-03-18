const Hero = () => {
    return (
        <div className="relative h-[600px] overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://videos.pexels.com/video-files/7578546/7578546-hd_1920_1080_30fps.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Dream Home</h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl">With a wide range of properties, we are here to help you find the perfect place to call home.</p>
                
          
            </div>
        </div>
    );
};

export default Hero