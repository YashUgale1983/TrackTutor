import React from "react";
import { redirect } from "next/navigation";
import { InfoIcon } from "lucide-react";
// import CreateCourseForm from "@/components/CreateCourseForm";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

type Props = {};

const CreatePage = async (props: Props) => {
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  if(!user || !user.id) redirect('/auth-callback?origin=create');
  
  return (
    <div className="flex flex-col bg-slate-200 rounded-3xl items-start max-w-xl px-8 py-5 mx-auto my-16 sm:px-0">
      <h1 className="self-center  text-3xl font-bold text-center sm:text-6xl">
        Learning Journey
      </h1>
      <div className="flex p-4 mt-5 border-none bg-slate-200">
        <InfoIcon className="w-12 h-12 mr-3 text-blue-400" />
        <div>
          Enter in a course title, or what you want to learn about. Then enter a
          list of units, which are the specifics you want to learn. And our AI
          will generate a course for you!
        </div>
      </div>

      {/* <CreateCourseForm isPro={isPro} /> */}
    </div>
  );
};

export default CreatePage;