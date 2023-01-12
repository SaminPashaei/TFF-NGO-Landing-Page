function ourActivities() {
  let activityType = [
    {
      name: "population",
      title: "Population monitoring and control",
      info: "Sterilizing healthy stray cats area by area to prevent population growth",
    },
    {
      name: "community",
      title: "Community care",
      info: "Teaching community members to feed, treat and sterilize stray cats in their area",
    },
    {
      name: "rehibilitation",
      title: "Rehabilitation and placement",
      info: "Providing medical care to sick and injured stray cats, seeking homes for disadvantaged cats",
    },
    {
      name: "education",
      title: "Education and awareness",
      info: "Improving the public perception of stray cats through educational campaigns",
    },
  ];

  let activityHTML = `<div class="row">`;

  for (let outCol = 0; outCol < 2; outCol++) {
    let inColStart;
    if (outCol === 0) {
      inColStart = 0;
    } else {
      inColStart = 2;
    }

    activityHTML += `
                      <div class="col-md-6">
                        <div class="row">
                    `;

    for (let inCol = inColStart; inCol < inColStart + 2; inCol++) {
      activityHTML += `
                      <div class="col-6 my-4 flex-center">
                        <div class="card text-center activity-card activity-${activityType[inCol].name}">
                          <img src="/media/${activityType[inCol].name}.png" class="activity-card-img">

                          <div class="card-body p-3 pt-0">
                            <h5 class="card-title flex-center activity-card-title">${activityType[inCol].title}</h5>
                          </div>

                          <div class="flex-center activity-info-overlay activity-${activityType[inCol].name}">
                            ${activityType[inCol].info}
                          </div>
                        </div>
                      </div>
                    `;
    }
    activityHTML += `
                      </div>
                    </div>
                  `;
  }
  activityHTML += `</div>`;

  document.querySelector("#activity-html-container").innerHTML = activityHTML;
}

function ourWork() {
  let workType = [
    {
      num: "800+",
      title: "Medical Cases",
      img: "cat-medical-cases",
    },
    {
      num: "1500+",
      title: "Vaccinations",
      img: "cat-vaccinations",
    },
    {
      num: "1500+",
      title: "Sterlizations",
      img: "cat-sterlizations",
    },
    {
      num: "400+",
      title: "Treat On Street",
      img: "cat-treat-on-street",
    },
    {
      num: "2400+",
      title: "Cats Helped",
      img: "cat-cats-helped",
    },
  ];

  let workHTML = `<div class="row work-col-container">`;

  for (let colNum = 0; colNum < 2; colNum++) {
    let cardNumEnd, cardNumStart;
    if (colNum === 0) {
      cardNumStart = 0;
      cardNumEnd = 3;
    } else {
      cardNumStart = 3;
      cardNumEnd = 5;
    }

    workHTML += `<div class="col-md-6 work-col-${colNum + 1}">`;

    for (let cardNum = cardNumStart; cardNum < cardNumEnd; cardNum++) {
      workHTML += `<div class="work-card-container">`;

      let cardWorkHTML = `
                        <div class="card work-card">
                          <div class="card-body card-img work-card-body">
                            <div class="card-img-top work-num-bg">
                              <div class="card-img-top work-num">
                                ${workType[cardNum].num}
                              </div>
                            </div>
                            <div class="card-img-bottom work-title-bg">
                              <div class="card-img-bottom work-title">
                                ${workType[cardNum].title}
                              </div>
                            </div>
                          </div>
                        </div>
                      `;
      let imgWorkHTML = `
                      <div class="card work-card">
                        <img src="/media/${workType[cardNum].img}.jpg" class="work-card-body card-img">
                      </div>
                    `;

      if (cardNum % 2 === 0) {
        workHTML += cardWorkHTML + imgWorkHTML;
      } else {
        workHTML += imgWorkHTML + cardWorkHTML;
      }
      workHTML += `</div>`;
    }
    workHTML += `</div>`;
  }
  workHTML += `</div>`;

  document.querySelector("#work-html-container").innerHTML = workHTML;
}

function successStories() {
  let catStory = [
    {
      name: "Kiba",
      story:
        "A staff member found this adorable cat near our office with a massive wound on his stomach and immediately brought him in for treatment. While he was recovering, Kiba acted as a good uncle to our young kittens. After Kiba's wound fully closed, he was sterilized and released back in his home territory to enjoy life as a healthy free cat, though he still visits now and then!",
    },
    {
      name: "Gappu",
      story:
        "Gappu was found by one of our rescuers, Abaan. He had a huge wound on his neck that we did not know the cause of. Since the wound covered a large portion of his neck, it took several weeks to heal. As the staff dressed the wound every day, they very much took to his friendly nature. The day we released Gappu was a very happy and emotional one.",
    },
    {
      name: "George",
      story:
        "George was found by a rescuer, Suman, in bad shape. He had a long cut on the side of his head as well as an abscess on his stomach, possibly from a fight with another male cat. Healing took even longer than usual because he would break out of his Elizabethan collar (plastic cone worn over the head) and irritate his wounds. It was all worth it because he now lives happily outdoors.",
    },
    {
      name: "Samosa",
      story:
        "One of our volunteers found Samosa outside her residential area with a deep abrasion on his right foreleg. It was initially difficult to dress his wounds because he was scared of us and in discomfort. He soon warmed up to us and even started asking for pets. We fell in love with his huge cheeks (typical of males that are sterilized later in life). After treatment and sterilization, Samosa is enjoying life outdoors.",
    },
  ];

  let storyHTML = `<div class="row">`;

  for (let outCol = 0; outCol < 2; outCol++) {
    let inColStart;
    if (outCol === 0) {
      inColStart = 0;
    } else {
      inColStart = 2;
    }

    storyHTML += `
                    <div class="col-md-6">
                      <div class="row">
                  `;

    for (let inCol = inColStart; inCol < inColStart + 2; inCol++) {
      storyHTML += `
                      <div class="col-6 my-4 flex-center">
                        <div class="card story-card">
                          <img src="/media/${catStory[inCol].name}.jpg" class="story-img">
                          <div class="story-info-overlay">
                            <h4 class="flex-center story-info-title">
                              ${catStory[inCol].name}
                            </h4>
                            <div class="story-popup">
                              <span class="story-popup-read">Show more</span>
                              <span class="flex-center story-popup-txt">
                                ${catStory[inCol].story}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    `;
    }
    storyHTML += `
                    </div>
                  </div>
                `;
  }
  storyHTML += `</div>`;

  document.querySelector("#story-html-container").innerHTML = storyHTML;
}

function storyPopup() {
  let popupRead = document.querySelectorAll(".story-popup-read");
  let popupTxt = document.querySelectorAll(".story-popup-txt");

  for (let index = 0; index < popupRead.length; index++) {
    popupRead[index].addEventListener("click", function () {
      if (popupRead[index].textContent === "Show more") {
        popupRead[index].textContent = "Show less";
      } else {
        popupRead[index].textContent = "Show more";
      }
      popupTxt[index].classList.toggle("show");
    });
  }
}

function donationForm() {
  document
    .querySelector("#donation-form")
    .addEventListener("submit", getDonorInfo);
}

function getDonorInfo(event) {
  event.preventDefault();

  let inputList = [
    {
      id: "first-name",
    },
    {
      id: "last-name",
    },
    {
      id: "email",
    },
    {
      id: "program",
    },
  ];

  for (let index = 0; index < 4; index++) {
    inputList[index].main = document.getElementById(
      `${inputList[index].id}-input`
    );

    inputList[index].error = document.getElementById(
      `${inputList[index].id}-error`
    );

    if (index < 3) {
      inputList[index].value = inputList[index].main.value.trim().toLowerCase();
    } else {
      inputList[index].value =
        inputList[index].main.options[
          inputList[index].main.selectedIndex
        ].value;
    }

    if (inputList[index].value.length === 0) {
      inputList[index].error.innerHTML = `* Please enter your ${removeHyphen(
        inputList[index].id
      )}`;
      inputList[index].complete = false;
    } else if (inputList[index].value === "0" && index === 3) {
      inputList[index].error.innerHTML = `* Please select a program.`;
      inputList[index].complete = false;
    } else {
      inputList[index].error.textContent = "";
      inputList[index].complete = true;
    }
  }

  if (inputList[0].complete) {
    let formComplete = true;
    for (let index = 1; index < 4; index++) {
      if (inputList[index - 1].complete !== inputList[index].complete) {
        formComplete = false;
        break;
      }
    }

    if (formComplete) {
      for (let index = 0; index < 4; index++) {
        if (index < 3) {
          inputList[index].main.value = "";
        } else {
          inputList[index].main.selectedIndex = "0";
        }
      }
      alert(
        `Thank you ${capitalizing(inputList[0].value)} ${capitalizing(
          inputList[1].value
        )} for your interest in making life better for our little furry friends. We'll be in touch! 😺💖`
      );
    }
  }
}

function removeHyphen(word) {
  return word.replace(/-/g, " ");
}

function capitalizing(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

ourActivities();
ourWork();
successStories();
storyPopup();
donationForm();
