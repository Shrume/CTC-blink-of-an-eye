// Text segments for display
const segments = [
  { type: "word",   text: "Hello, there.", end: true },
  { type: "word",   text: "You might be slightly confused, but I think by the time this word comes out you should be getting the hang of this.", end: true },
  { type: "phrase", text: "Why this?", hold: true },
  { type: "word",   text: "You might ask.", end: true },
  { type: "phrase", text: "Because blinking is an", hold: true },
  { type: "phrase", text: "often neglected part of our lives,", hold: true },
  { type: "word",   text: "we don’t really think about it until we are reminded of it.", end: true },
  { type: "phrase", text: "And while we’re on the subject—of fleeting things, of the barely noticed and easily lost—I ask that you be mindful, truly mindful, of each and every blink. For with the soft, near-silent fall of your eyelids, the world before you—these words, these thoughts rendered visible—may vanish, slipping like a whisper into the quiet space between moments, where time pauses and perception falters. The text you now see exists only in the fragile contract between light and attention, lingering no longer than your gaze allows. It lives in the act of seeing and perishes in the briefest act of forgetting. Gone in an instant. As real and as vanishing as a dream upon waking. Which is the long way of saying: please be mindful of your blinking because the text you see will disappear in the blink of an eye quite Literally.", end: true },
  { type: "phrase", text: "Oh", hold: true },
  { type: "phrase", text: "did you miss that?", hold: true },
  { type: "phrase", text: "If not, great,",   hold: true },
  { type: "word",   text: "but if you ever miss any text you want to go back to,", hold: true },
  { type: "word",   text: "just close your eyes for a few seconds and we'll rewind a bit.", end: true },
  { type: "phrase", text: "But yeah,", hold: true },
  { type: "phrase",   text: "by now you've blinked quite a few times,", end: true },
  { type: "word",   text: "what really is blinking?", end: true },
  { type: "word",   text: "There are three types of blinking.", end: true },
  { type: "phrase",   text: "The first type", hold:true },
  { type: "phrase",   text: "is spontaneous blinking,", hold:true },
  { type: "phrase",   text: "which is what you do for most of your life.", end:true },
  { type: "phrase",   text: "The second type is voluntary blinking,", hold:true },
  { type: "word",   text: "which is what you’ve been doing for the majority of your time on this website.", end:true },
  { type: "phrase",   text: "The third type is reflex blinking,", hold:true },
  { type: "word",   text: "which you would do in reaction to being startled.", end:true },
  { type: "phrase",   text: "Despite the different types of blinking,", hold:true },
  { type: "phrase",   text: "the duration of a blink is", hold:true },
  { type: "phrase",   text: "fairly consistent at", hold:true },
  { type: "phrase",   text: "around 0.1 to 0.4 seconds.", hold:true },
  { type: "phrase",   text: "If you try hard enough,", hold:true },
  { type: "word",   text: "you could blink more than five times in one second.", end:true },
  { type: "phrase",   text: "Although the length of each blink is about the same,", hold:true },
  { type: "phrase",   text: "blink intervals vary greatly.", hold:true },
  { type: "phrase",   text: "Under normal circumstances", hold:true },
  { type: "word",   text: "people blink between 15 and 20 times per minute.", end:true },
  { type: "phrase",   text: "When reading or", hold:true },
  { type: "phrase",   text: "looking at screens,", hold:true },
  { type: "phrase",   text: "that can drop to 4 to 10 blinks per minute,", hold:true },
  { type: "phrase",   text: "which is why your eyes", hold:true },
  { type: "word",   text: "feel sore after long periods at a laptop.", end:true },
  { type: "phrase",   text: "You blink more,", hold:true },
  { type: "phrase",   text: "around 30 times per minute,", hold:true },
  { type: "word",   text: "when you are conversing or under stress.", end:true },
  { type: "word",   text: "Age also affects blink rates.", end:true },
  { type: "phrase",   text: "Infants blink much less,", hold:true },
  { type: "phrase",   text: "roughly one or two times per minute,", hold:true },
  { type: "word",   text: "probably because their eyes are small and well lubricated.", end:true },
  { type: "word",   text: "Well that was quite a few blinks you've blinked,", hold:true },
  { type: "phrase",   text: "but not so much", hold:true },
  { type: "word",   text: "when you compare it to the amount you blink every day.", end:true },
  { type: "word",   text: "Assuming you sleep 8 hours a day ", hold:true },
  { type: "phrase",   text: "(aka. well rested),", hold:true },
  { type: "phrase",   text: "(aka. NOT a RISD Student),", hold:true },
  { type: "phrase",   text: "and blink at an average rate of", hold:true },
  { type: "phrase",   text: "15 blinks per minute over 16 waking hours,", end:true },
  { type: "word",   text: "that's 15 blinks/min × 60 min/hr × 16 hour/day = 14,400 blinks a day", end:true },
  { type: "word",   text: "And assuming your average blink lasts for 0.25 seconds", end:true },
  { type: "phrase",   text: "that's 14,400 blinks/day × 0.25 seconds = 3,600 seconds/day = 1 hour/day", hold:true },
  { type: "word",   text: "you spend with your eyes closed solely from blinking", end:true },
  { type: "word",   text: "That's quite a long time. Maybe it was a little out of your expectations, but there more.", end:true },
  { type: "word",   text: "Assuming your lifespan is the world's average life expectancy of 72 years,", end:true },
  { type: "word",   text: "1 hour/day × 365.25 days/year × 72 years ≈ 26,298 hours = 1,095.75 days or about 3 years of your life with your eyes closed simply from blinking.", hold:true },
  { type: "word",   text: "That's 4.16% of your entire life. Make of that what you will.", end:true },
  { type: "word",   text: "And that was just the time we spent blinking, what about the time we spend with eyes closed in total.", end:true },
  { type: "word",   text: "Assuming you have the luxury of sleeping on average 8 hours a day:", end:true },
  { type: "word",   text: "8 hours/day × 365.25 days/year × 72 years = 210,384 hours = 8,766 days ≈ 24 years, which is about 33.33% of your entire life.", end:true },
  { type: "phrase",   text: "At this point", hold:true },
  { type: "word",   text: "you must be intrigued about how much time other tasks would occupy right?", end:true },
  { type: "word",   text: "Worry not, here's a table of some of the universal chores to save you from more blinking.", end:true },
  { type: "phrase",   text: "Assuming you are a very health individual", hold:true },
  { type: "word",   text: "who works very hard (more than 10h a day)", hold:true },
  { type: "html",
    html:  
    `<table>
        <thead>
            <tr>
                <th>Activity</th>
                <th>Daily Hours</th>
                <th>Lifetime Hours</th>
                <th>Lifetime Years</th>
                <th>Percentage of Life (%)</th>
            </tr>
        </thead>
            <tbody>
                <tr><td>Sleeping</td><td>8.0</td><td>210,384</td><td>24.0</td><td>33.33%</td></tr>
                <tr><td>Work/Study</td><td>10.5</td><td>276,129</td><td>31.5</td><td>43.75%</td></tr>
                <tr><td>Meals</td><td>1.5</td><td>39,447</td><td>4.5</td><td>6.25%</td></tr>
                <tr><td>Bathroom</td><td>1.0</td><td>26,298</td><td>3.0</td><td>4.17%</td></tr>
                <tr><td>Commuting</td><td>1.0</td><td>26,298</td><td>3.0</td><td>4.17%</td></tr>
                <tr><td>Misc Chores</td><td>1.0</td><td>26,298</td><td>3.0</td><td>4.17%</td></tr>
                <tr><td>Blinking</td><td>1.0</td><td>26,298</td><td>3.0</td><td>4.17%</td></tr>
                <tr><td>Relaxation</td><td>0.5</td><td>13,149</td><td>1.5</td><td>2.08%</td></tr>
                <tr><td>Socializing</td><td>0.5</td><td>13,149</td><td>1.5</td><td>2.08%</td></tr>
            </tbody>
    </table>`, end: true},
    
  { type: "phrase",   text: "What's the point?", hold:true },
  { type: "phrase",   text: "You might ask.", end:true },
  { type: "word",   text: "The ancient Chinese idiom '滴水石穿' which literally translates to 'dripping water can penetrate stone' It's the idea that persistent, consistent effort, no matter how small, can eventually achieve significant results.", end:true },
  { type: "word",   text: "So maybe next time when you start doom scrolling on the toilet, be mindful of how long you will spend your life doing so.", end:true },
  { type: "Phrase",   text: "The End.", hold:true },
  { type: "Phrase",   text: "Thank you for blinking.", end:true },
];

// State variables
let currentIndex = 0;
let subIndex = 0;
let held = [];
const historyStack = [];

// Render function
function render() {
  let output = '';
  if (held.length) output += held.join(' ') + ' ';
  const seg = segments[currentIndex];
  const container = document.getElementById('text-display');
  if (!seg) return;
  if (seg.type === 'html') {
    container.innerHTML = output + seg.html;
  } else if (seg.type === 'phrase') {
    container.textContent = output + seg.text;
  } else {
    const words = seg.text.split(/\s+/);
    container.textContent = output + words.slice(0, subIndex + 1).join(' ');
  }
}

// Advance to next segment/word
function next() {
  const seg = segments[currentIndex];
  if (!seg) return;
  if (seg.type === 'phrase' || seg.type === 'html') {
    if (seg.hold) held.push(seg.type === 'html' ? '' : seg.text);
    if (seg.end) held = [];
    currentIndex++;
    subIndex = 0;
  } else {
    const words = seg.text.split(/\s+/);
    if (subIndex < words.length - 1) {
      subIndex++;
    } else {
      if (seg.hold) held.push(seg.text);
      if (seg.end) held = [];
      currentIndex++;
      subIndex = 0;
    }
  }
  historyStack.push({ currentIndex, subIndex, held: [...held] });
  render();
}

// Rewind to previous
function previous() {
  if (historyStack.length < 2) return;
  historyStack.pop();
  const prev = historyStack[historyStack.length - 1];
  currentIndex = prev.currentIndex;
  subIndex = prev.subIndex;
  held = [...prev.held];
  render();
}

// Initialize display history
historyStack.push({ currentIndex, subIndex, held: [...held] });
render();

// Blink detection and MediaPipe setup
const LEFT_EYE = [33,160,158,133,153,144];
const RIGHT_EYE = [263,387,385,362,380,373];
const BLINK_THRESHOLD = 0.23;
const LONG_BLINK_THRESHOLD = 500;   // in ms
const REWIND_INTERVAL = 100;        // in ms
let eyeClosedStart = null;
let rewindId = null;
let eyeWasClosed = false;

function getEAR(lm, eye) {
  const [p1, p2, p3, p4, p5, p6] = eye.map(i => lm[i]);
  return (Math.hypot(p2.x - p6.x, p2.y - p6.y) +
          Math.hypot(p3.x - p5.x, p3.y - p5.y)) /
         (2 * Math.hypot(p1.x - p4.x, p1.y - p4.y));
}

function onResults(results) {
  if (results.multiFaceLandmarks.length) {
    const lm = results.multiFaceLandmarks[0];
    const avgEAR = (getEAR(lm, LEFT_EYE) + getEAR(lm, RIGHT_EYE)) / 2;
    const now = performance.now();

    if (avgEAR < BLINK_THRESHOLD) {
      // falling edge: eyes just closed
      if (!eyeWasClosed) {
        eyeWasClosed = true;
        eyeClosedStart = now;
        next();
      }
      // long blink triggers rewind
      if (!rewindId && now - eyeClosedStart >= LONG_BLINK_THRESHOLD) {
        rewindId = setInterval(previous, REWIND_INTERVAL);
      }
    } else {
      // eyes open: reset states
      if (eyeWasClosed) eyeWasClosed = false;
      if (rewindId) {
        clearInterval(rewindId);
        rewindId = null;
      }
    }
  }
}

// Set up MediaPipe FaceMesh and camera
const faceMesh = new FaceMesh({
  locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
});
faceMesh.setOptions({
  maxNumFaces: 1,
  refineLandmarks: true,
  minDetectionConfidence: 0.4,
  minTrackingConfidence: 0.5
});
faceMesh.onResults(onResults);

const camera = new Camera(document.querySelector('.input_video'), {
  onFrame: async () => { await faceMesh.send({ image: document.querySelector('.input_video') }); },
  width: 640,
  height: 480
});
camera.start();
