"use client";

import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="grid place-items-center h-dvh p-2 text-secondary-700">
      <div>
        <h1 className="text-xl font-bold mb-8">اوپس! صفحه ای که دنبالش بودید، پیدا نشد.</h1>

        <div className="flex justify-center">
          <button onClick={() => router.back()} className="btn-icon-only size-8 text-xl rotate-180">
            <BiArrowBack />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
