// ==========================================
// AI Face Analysis - 영상 장면에 맞춰 텍스트 전환
// ==========================================

const aiVideo = document.querySelector(".ai_video");
const aiSteps = document.querySelectorAll(".ai_step");

// 각 장면이 시작되는 영상 시간(초): 01 얼굴형 분석 / 02 AI 추천 / 03 가상피팅
const STEP_START_TIMES = [0, 6.2, 9.4];

function getStepIndex(time) {
  let index = 0;
  STEP_START_TIMES.forEach((startTime, i) => {
    if (time >= startTime) index = i;
  });
  return index;
}

function updateAiStep() {
  const activeIndex = getStepIndex(aiVideo.currentTime);
  aiSteps.forEach((step, i) => {
    step.classList.toggle("is-active", i === activeIndex);
  });
}

if (aiVideo && aiSteps.length > 0) {
  aiVideo.addEventListener("timeupdate", updateAiStep);
  aiVideo.addEventListener("seeked", updateAiStep);
}
