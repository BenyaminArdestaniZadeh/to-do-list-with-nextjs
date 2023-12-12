"use client";

import {
  Button,
  Flex,
  Text,
  TextFieldInput,
  TextFieldRoot,
} from "@radix-ui/themes";
import React, { useEffect, useState } from "react";

//بعضی وقت ها شایذ نیاز باشه از هوکه یوزرف استفاده بشه . این هوک یه مقدار میوتیبل بر میگردونه که یکی از یوزکیس هاش مدیریت کردن صفحه کلیده

const page = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [toDoList, setToDoList] = useState(() => {
    const setData = localStorage.setItem("Item", JSON.stringify(toDoList));
    return setData;
  });

  // dalile save kardne data to local storage ine k zamani k safhe refresh shod , bedonim datayi k vared shode chia bodn , chon zamani k safhe refresh mishe data ha pak mishan va dg dastresi nadarim b datahayi k vared shode bode
  //datayi k migirim az user ya bayad to database zakhire beshe ya inke to ocal storage zalhire konim , hala inja k database nadarim miaym to local storage save mikonim

  useEffect(() => {
    const data = window.localStorage.getItem("Item");
    //he JSON.parse() function converts a JSON string back into a JavaScript object. This means that you can use JSON.parse() to read JSON data that is stored in a file or received from an API call
    if (data !== null) setToDoList(JSON.parse(data));
    console.log(" data:", data);
  }, []);

  useEffect(() => {
    const localStorageData = localStorage.getItem("Item") || "";
    setInputValue(localStorageData);
    setInputValue("");
    console.log("local storage", localStorageData);
  }, [toDoList]);

  //The main difference between JSON.stringify() and JSON.parse() is that JSON.stringify() converts objects to strings, while JSON.parse() converts strings back into objects.

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setToDoList(toDoList);
      // setToDoList([...toDoList, inputValue]);
      //The JSON.stringify() function converts a JavaScript object into a JSON string. A JSON string is a text representation of a JavaScript object, where each property and value of the object is encoded as a key-value pair.

      // localStorage.setItem("Item", JSON.stringify(toDoList));
      setInputValue("");
    }
  };

  return (
    <Flex
      width={"100%"}
      p={"8"}
      direction={"column"}
      align={"center"}
      gap={"5"}
    >
      <form
        action={""}
        method="post"
        onSubmit={(event) => submitHandler(event)}
      >
        <Flex gap={"7"}>
          <TextFieldRoot size={"3"}>
            <TextFieldInput
              onChange={(event) => setInputValue(event.target.value)}
              value={inputValue}
            />
          </TextFieldRoot>
          <Button>
            <Text>Submit</Text>
          </Button>
        </Flex>
      </form>
      <ul>
        {toDoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </Flex>
  );
};

export default page;
