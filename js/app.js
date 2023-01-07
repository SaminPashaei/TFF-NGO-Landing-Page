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
    if (outCol === 0) {
      startNum = 0;
    } else {
      startNum = 2;
    }

    activityHTML += `
                      <div class="col-md-6">
                        <div class="row">
                    `;
    for (let inCol = startNum; inCol < startNum + 2; inCol++) {
      activityHTML += `
                      <div class="col-6 my-4 flex-center">
                        <div class="card text-center activity-card activity-${activityType[inCol].name}-bg">
                          <img src="/media/${activityType[inCol].name}.png" class="activity-card-img">

                          <div class="card-body p-3 pt-0 activity-card-body">
                            <h5 class="card-title flex-center activity-card-title">${activityType[inCol].title}</h5>
                          </div>

                          <div class="activity-info activity-${activityType[inCol].name}-bg">
                            <div class="flex-center activity-info-txt">
                              ${activityType[inCol].info}
                            </div>

                            <div class="flex-center activity-info-link">
                              <a href="#" class="read-link">Learn more »</a>
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

  document.querySelector("#activity-container").innerHTML = activityHTML;
}

ourActivities();
