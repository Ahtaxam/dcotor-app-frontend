import React from 'react'

function ForgotPassword() {
    const handleInputChange = () => {
        
    }
  return (
    <div className="max-w-[570px] mx-auto rounded-lg shadow-lg md:p-10 mt-[50px]">
        <form className="py-4 md:py-0">
        <div className="mb-5 ">
              <input
                type="email"
                // value={formData.email}
                onChange={handleInputChange}
                name="email"
                placeholder="Enter Your Email"
                className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-[#0067FF] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
                required
              />
            </div>

            <div className="mt-7">
              <button
                type="submit"
                // disabled={loading && true}
                className="w-full bg-[#0067FF] text-white py-3 px-4 rounded-lg text-[18px] leading-[30px]"
              >
               Send Link to Email
              </button>
            </div>
            </form>
    </div>
  )
}

export default ForgotPassword