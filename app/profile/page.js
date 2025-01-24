import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";

const Profile = async () => {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-xl">User not authenticated</p>
      </div>
    );
  }


  return (
    <div className="flex items-center  justify-center p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* User Information */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Hi, Welcome to your profile
        </h2>
        <p className="text-gray-600 mt-2">
          <strong className="text-gray-800">Name:</strong>{" "}
          {user.given_name || "No Name Available"}
        </p>
        <p className="text-gray-600 mt-1">
          <strong className="text-gray-800">Email:</strong>{" "}
          {user.email || "No Email Available"}
        </p>
      </div>
    </div>
  );
};

export default Profile;
