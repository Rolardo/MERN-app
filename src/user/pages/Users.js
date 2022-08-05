import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Gonzalo Roli",
      image:
        "https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
