const OurCourseBanner = () => {
  return (
    <div className="w-full  flex items-center justify-center relative">
      <h1 className="absolute top-[10%] -translate-y-1/4 left-1/2 -translate-x-1/2 text-xl sm:text-3xl md:text-4xl font-extrabold transition-all gradient_courses">Our Courses</h1>
      <img 
        src="/assets/two_tigers.png" 
        className="w-full h-auto  max-w-full" 
        alt="Tigers" 
      />
    </div>
  )
}

export default OurCourseBanner;
