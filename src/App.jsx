/** @format */

import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

import { db } from "./config/firebase";
import { onSnapshot, collection } from "firebase/firestore";

import header from "./assets/header.png";
import teamAdmin from "./assets/teamAdmin.svg";
import leftBox from "./assets/leftBox.svg";
import rightBox from "./assets/rightBox.svg";
import emoji01 from "./assets/emojis/1.svg";
import emoji02 from "./assets/emojis/2.svg";
import emoji03 from "./assets/emojis/3.svg";
import emoji04 from "./assets/emojis/4.svg";
import emoji05 from "./assets/emojis/5.svg";
import emoji06 from "./assets/emojis/6.svg";
import emoji07 from "./assets/emojis/7.svg";
import emoji08 from "./assets/emojis/8.svg";
import emoji09 from "./assets/emojis/9.svg";

export default function App() {
  const [visibleEmojiIndex, setVisibleEmojiIndex] = useState(0);
  const [messagesList, setMessagesList] = useState([]);
  const [emojiArr, setEmojiArr] = useState([
    {
      emoji: emoji01,
      class: "emoji01",
    },
    {
      emoji: emoji02,
      class: "emoji02",
    },
    {
      emoji: emoji03,
      class: "emoji03",
    },
    {
      emoji: emoji04,
      class: "emoji04",
    },
    {
      emoji: emoji05,
      class: "emoji05",
    },
    {
      emoji: emoji06,
      class: "emoji06",
    },
    {
      emoji: emoji07,
      class: "emoji07",
    },
    {
      emoji: emoji08,
      class: "emoji08",
    },
    {
      emoji: emoji09,
      class: "emoji09",
    },
  ]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "messages"), snapshot => {
      const alldata = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      alldata.sort((a, b) => b.timeStamp - a.timeStamp);
      let newdata = alldata.slice(0, 10);
      newdata = newdata.map(item => ({ ...item, bool: false }));

      newdata[0] = { ...newdata[0], bool: true };
      function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
      shuffle(newdata);
      console.log(newdata);
      setMessagesList(newdata);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomizedEmojiArr = [...emojiArr].sort(() => Math.random() - 0.5);
      setEmojiArr(randomizedEmojiArr);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleEmojiIndex(prevIndex =>
        prevIndex === emojiArr.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [emojiArr]);

  const arrOne = [
    {
      bgImg: rightBox,
      name: messagesList[0]?.name || "",
      msg: messagesList[0]?.message || "",
      class: "leftOne",
      isNewMsg: messagesList[0] ? messagesList[0].bool : false,
    },
    {
      bgImg: leftBox,
      name: messagesList[1]?.name || "",
      msg: messagesList[1]?.message || "",
      class: "leftTwo",
      isNewMsg: messagesList[1] ? messagesList[1].bool : false,
    },
    {
      bgImg: rightBox,
      name: messagesList[2]?.name || "",
      msg: messagesList[2]?.message || "",
      class: "leftThree",
      isNewMsg: messagesList[2] ? messagesList[2].bool : false,
    },
    {
      bgImg: leftBox,
      name: messagesList[3]?.name || "",
      msg: messagesList[3]?.message || "",
      class: "leftFour",
      isNewMsg: messagesList[3] ? messagesList[3].bool : false,
    },
  ];

  const arrTwo = [
    {
      bgImg: rightBox,
      name: messagesList[4]?.name || "",
      msg: messagesList[4]?.message || "",
      class: "rightOne",
      isNewMsg: messagesList[4] ? messagesList[4].bool : false,
    },
    {
      bgImg: leftBox,
      name: messagesList[5]?.name || "",
      msg: messagesList[5]?.message || "",
      class: "rightTwo",
      isNewMsg: messagesList[5] ? messagesList[5].bool : false,
    },
    {
      bgImg: rightBox,
      name: messagesList[6]?.name || "",
      msg: messagesList[6]?.message || "",
      class: "rightThree",
      isNewMsg: messagesList[6] ? messagesList[6].bool : false,
    },
    {
      bgImg: rightBox,
      name: messagesList[7]?.name || "",
      msg: messagesList[7]?.message || "",
      class: "rightFour",
      isNewMsg: messagesList[7] ? messagesList[7].bool : false,
    },
    {
      bgImg: leftBox,
      name: messagesList[8]?.name || "",
      msg: messagesList[8]?.message || "",
      class: "rightFive",
      isNewMsg: messagesList[8] ? messagesList[8].bool : false,
    },
    {
      bgImg: rightBox,
      name: messagesList[9]?.name || "",
      msg: messagesList[9]?.message || "",
      class: "rightSix",
      isNewMsg: messagesList[9] ? messagesList[9].bool : false,
    },
  ];

  function getRandomNumber() {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
    // Scale the random number to be between 1 and 9
    const scaledNumber = Math.floor(randomNumber * 9) + 1;
    console.log(scaledNumber);
    return scaledNumber;
  }

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <img src={header} alt="header" />
      </header>

      <main className={styles.main}>
        <div className={styles.leftContainer}>
          {/* one */}
          <div className={styles.one}>
            {arrOne?.map((item, index) => (
              <div
                className={`${styles[item.class]} ${styles.singleContainer}  ${
                  item.name ? "" : styles.opacity
                } ${item.isNewMsg ? styles.shakeAnimation : ""}`}
                key={index}
              >
                <div className={styles.imgContainer}>
                  <img src={item.bgImg} alt="image" />
                </div>
                <div className={styles.msgBox}>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.msg}>{item.msg}</p>
                </div>
              </div>
            ))}
          </div>

          {/* two */}
          <div className={styles.two}>
            {arrTwo?.map((item, index) => (
              <div
                className={`${styles[item.class]}   ${styles.singleContainer} ${
                  item.name ? "" : styles.opacity
                } ${item.isNewMsg ? styles.shakeAnimation : ""}`}
                key={index}
              >
                <div className={styles.imgContainer}>
                  <img src={item.bgImg} alt="image" />
                </div>
                <div className={styles.msgBox}>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.msg}>{item.msg}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Emojis */}
          {emojiArr?.map((item, index) => (
            <div
              key={index}
              className={` ${styles[item.class]} ${
                index === visibleEmojiIndex
                  ? styles.popupScaleEffect
                  : styles.hidden
              }`}
            >
              <img src={item.emoji} alt="emoji" />
            </div>
          ))}
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.imgContainer}>
            <img src={teamAdmin} alt="teamAdmin" />
          </div>
        </div>
      </main>
    </div>
  );
}
