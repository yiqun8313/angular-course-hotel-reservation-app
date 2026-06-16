import { useState } from "react";
import Accordion from "./Accordion";
import Autocomplete from "./Autocomplete";
import Carousel from "./Carousel";
import ChatUI from "./ChatUI";
import ClickOrderBoxes from "./ClickOrderBoxes";
import DropdownList from "./DropdownList";
import InfiniteScroll from "./InfiniteScroll";
import MemoryGame from "./MemoryGame";
import { ModalDemo } from "./Modal";
import MultiSelectDropdown from "./MultiSelectDropdown";
import NestedComments from "./NestedComments";
import OTPInput from "./OTPInput";
import { PaginationDemo } from "./Pagination";
import { ProgressBarDemo } from "./ProgressBar";
import RecursiveItems from "./RecursiveItems";
import SearchBox from "./SearchBox";
import StarRating from "./StarRating";
import Tabs from "./Tabs";
import TicTacToc from "./TicTacToc";
import { ToastDemo } from "./Toast";
import ToDoList from "./ToDoList";
import WordGame from "./Wordls";
import TrafficLights from "./TrafficLights";
import VirtualList from "./VirtualList";
import SnakeGame  from "./SnakeGmae";
import Calendar from "./Calendar"

const mock = [
  {
    name: "a",
    children: [
      {
        name: "b",
        children: [
          {
            name: "f",
            children: [
              {
                name: "g",
                children: [{ name: "end" }],
              },
            ],
          },
          { name: "u" },
          { name: "k" },
          { name: "m" },
        ],
      },
    ],
  },
  { name: "c" },
];

const dropdownOptions = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
];

const tabs = [
  { label: "Home", content: "Home Page" },
  { label: "Profile", content: "Profile Page" },
  { label: "Settings", content: "Settings Page" },
];

const technologies = ["react", "redux", "router", "vue", "angular", "node", "next"];

const carouselImages = [
  "https://picsum.photos/seed/carousel-1/300/180",
  "https://picsum.photos/seed/carousel-2/300/180",
  "https://picsum.photos/seed/carousel-3/300/180",
];

function TestQuestion() {
  const [fruit, setFruit] = useState("");
  const [selectedFruits, setSelectedFruits] = useState([]);

  return (
    <>
      <ToDoList />
      <RecursiveItems data={mock} />
      <SearchBox />
      <TicTacToc />
      <DropdownList
        options={dropdownOptions}
        value={fruit}
        onChange={setFruit}
        placeholder="Select a fruit"
      />
      <MultiSelectDropdown
        options={dropdownOptions}
        value={selectedFruits}
        onChange={setSelectedFruits}
      />
      <MemoryGame />

      <WordGame />

      <TrafficLights />
      <StarRating />
      <ClickOrderBoxes />
      <SnakeGame />
      <ProgressBarDemo />
      <Accordion />
      <ModalDemo />
      <ToastDemo />
      <PaginationDemo />
      <NestedComments />
      <Tabs tabs={tabs} />
      <InfiniteScroll />
      <Autocomplete options={technologies} />
      <Carousel images={carouselImages} />
      <OTPInput />
      <ChatUI />
      <VirtualList />
      <Calendar />
    </>
  );
}

export default TestQuestion;
