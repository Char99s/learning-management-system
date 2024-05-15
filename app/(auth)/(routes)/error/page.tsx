import { IoMdCloseCircle } from "react-icons/io";

export default function ErrorPage() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-auth-pattern">
      <form className=" p-6 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white z-50">
        <div className="w-full flex justify-center flex-col">
          <div className="w-full flex justify-center">
            <IoMdCloseCircle className="w-10 h-10 text-red-500" />
          </div>
          <div className="w-full flex justify-center mt-4 mb-2">
            <h1 className="text-md">
              An error occured while creating your account
            </h1>
          </div>
        </div>
      </form>
    </div>
  );
}
