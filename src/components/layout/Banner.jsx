import { FaChevronDown } from "react-icons/fa";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Paragraph from "../Paragraph";
import Heading from "../Heading";
import card from "../../assets/card.png";
import playBtn from "../../assets/playBtn.png";
import Button from "../Button";
import List from "../List";
import { useEffect, useRef } from "react";

const Banner = () => {
  const dropRef = useRef(null);
  const btnRef = useRef(null);
  const dropRefOne = useRef(null);
  const btnRefOne = useRef(null);
  const dropRefTwo = useRef(null);
  const btnRefTwo = useRef(null);

  let handleClick = (dropRefCmn) => {
    const dropStyle = dropRefCmn.current.style;

    if (dropStyle.display === "block") {
      dropStyle.display = "none";
    } else {
      dropStyle.display = "block";
    }
  };

  let handleClickOutSite = (event, dropRefCmn, btnRefCmn) => {
    if (
      dropRefCmn.current &&
      !dropRefCmn.current.contains(event.target) &&
      !btnRefCmn.current.contains(event.target)
    ) {
      dropRefCmn.current.style.display = "none";
    }
  };

  useEffect(() => {
    document.addEventListener("click", (event) => {
      handleClickOutSite(event, dropRef, btnRef);
    });
    document.addEventListener("click", (event) => {
      handleClickOutSite(event, dropRefOne, btnRefOne);
    });
    document.addEventListener("click", (event) => {
      handleClickOutSite(event, dropRefTwo, btnRefTwo);
    });
    return () => {
      document.removeEventListener("click", (event) => {
        handleClickOutSite(event, dropRef, btnRef);
      });
      document.removeEventListener("click", (event) => {
        handleClickOutSite(event, dropRefOne, btnRefOne);
      });
      document.removeEventListener("click", (event) => {
        handleClickOutSite(event, dropRefTwo, btnRefTwo);
      });
    };
  }, []);

  return (
    <section className="pt-[232px] pb-[300px] bg-[#ececec] relative">
      <Container>
        <div>
          <Flex className="items-center gap-x-2">
            <div>
              <Image src={card} />
            </div>
            <div>
              <Paragraph
                text="Real Estate Agency"
                className="text-primaryColor font-Nun text-base font-normal"
              />
            </div>
          </Flex>

          <div className="w-[513px] mt-6">
            <Heading
              text="#Find# Your #Dream# House #By# Us"
              as="h1"
              className="text-black font-pop text-[60px] font-bold leading-[60px]"
            />
            <Paragraph
              text="Lorem ipsum dolor sit amet, consectetur adipisicing"
              className="text-secColor font-Nun text-base font-normal pt-3"
            />
            <Flex className="items-center gap-x-6 mt-6">
              <div>
                <Button btn="View Properties" />
              </div>
              <div>
                <Image src={playBtn} />
              </div>
            </Flex>
          </div>
        </div>
      </Container>

      <Container className=" pt-[48px] pb-[36px] shadow-md mt-[190px] px-7 bg-white rounded-lg">
        <Flex className="justify-between items-center">
          <div className="relative group">
            <div
              className="w-[267px] h-[47px] border px-3 py-3 border-solid border-[#6A6986] rounded-md"
              onClick={() => {
                handleClick(dropRef, btnRef);
              }}
              ref={btnRef}
            >
              <Flex className="justify-between items-center">
                <Heading
                  text="Choose Area"
                  as="h3"
                  className="text-[#5C5B7B] font-Nun text-base font-bold"
                />
                <FaChevronDown />
              </Flex>
            </div>

            <div
              className="absolute w-[267px] p-3 bg-slate-300 rounded-md border-solid border-[#6A6986] border top-[48px] hidden"
              ref={dropRef}
            >
              <ul className="text-center">
                <List text="Dhaka" href="#" />
                <List text="Barishal" href="#" />
                <List text="Chattogram" href="#" />
                <List text="Khulna" href="#" />
                <List text="Gazipur" href="#" />
              </ul>
            </div>
          </div>

          {/* ------------------------------ */}

          <div className="relative">
            <div
              className="w-[267px] h-[47px] border px-3 py-3 border-solid border-[#6A6986] rounded-md"
              onClick={() => {
                handleClick(dropRefOne, btnRefOne);
              }}
              ref={btnRefOne}
            >
              <Flex className="justify-between items-center">
                <Heading
                  text="Property Status"
                  as="h3"
                  className="text-[#5C5B7B] font-Nun text-base font-bold"
                />
                <FaChevronDown />
              </Flex>
            </div>

            <div
              className="absolute w-[267px] p-3 bg-slate-300 rounded-md border-solid border-[#6A6986] border top-[48px] hidden"
              ref={dropRefOne}
            >
              <ul className="text-center">
                <List text="Expired" href="#" />
                <List text="Pending" href="#" />
                <List text="Active" href="#" />
                <List text="Withdrawn" href="#" />
                <List text="Cancelled" href="#" />
                <List text="Closed" href="#" />
                <List text="Active With Contract" href="#" />
              </ul>
            </div>
          </div>

          {/* ------------------------------------------ */}

          <div className="relative">
            <div
              className="w-[267px] h-[47px] border px-3 py-3 border-solid border-[#6A6986] rounded-md"
              onClick={() => {
                handleClick(dropRefTwo, btnRefTwo);
              }}
              ref={btnRefTwo}
            >
              <Flex className="justify-between items-center">
                <Heading
                  text="Property Type"
                  as="h3"
                  className="text-[#5C5B7B] font-Nun text-base font-bold"
                />
                <FaChevronDown />
              </Flex>
            </div>

            <div
              className="absolute w-[267px] p-3 bg-slate-300 rounded-md border-solid border-[#6A6986] border top-[48px] hidden"
              ref={dropRefTwo}
            >
              <ul className="text-center">
                <List text="Apartment" href="#" />
                <List text="Cooperative property" href="#" />
                <List text="Manufactured home" href="#" />
                <List text="Single-family home" href="#" />
                <List text="Townhome" href="#" />
                <List text="Bungalow" href="#" />
              </ul>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
