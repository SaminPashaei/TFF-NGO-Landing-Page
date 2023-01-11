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

                          <div class="card-body p-3 pt-0 activity-card-body">
                            <h5 class="card-title flex-center activity-card-title">${activityType[inCol].title}</h5>
                          </div>

                          <div class="activity-info-overlay activity-${activityType[inCol].name}">
                            <div class="flex-center activity-info-txt">
                              ${activityType[inCol].info}
                            </div>

                            <div class="flex-center activity-info-link">
                              <a href="#" class="more-link">Learn more »</a>
                            </div>
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
  let storyName = ["Kiba", "Gappu", "George", "Samosa"];

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
                          <img src="/media/${storyName[inCol]}.jpg" class="story-img">
                          <div class="story-info-overlay">
                            <h4 class="flex-center story-info-title">
                              ${storyName[inCol]}
                            </h4>
                            <a href="#" class="more-link story-info-link">
                              Read more »
                            </a>
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

ourActivities();
ourWork();
successStories();
