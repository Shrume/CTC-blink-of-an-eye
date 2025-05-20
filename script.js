// Most of the code below are aided by ChatGPT
const synth = new Tone.FMSynth({
  harmonicity: 3,            // ratio between carrier & modulator
  modulationIndex: 10,       // depth of modulation
  oscillator: { type: "sine" },
  envelope: {
    attack: 0.001,
    decay: 0.2,
    sustain: 0.2,
    release: 1
  }
}).toDestination();

const NOTES = ['F1','A1','G1'];

function playRandomNote() {
  const note = NOTES[Math.floor(Math.random() * NOTES.length)];
  if (Tone.context.state !== 'running') {
    Tone.context.resume();
  }
  synth.triggerAttackRelease(note, '8n');
}


const segments = [
  { type: "word",   text: " ", hold: true },
  { type: "word",   text: "Hello, there.", end: true },

  { type: "phrase",   text: "You might be slightly confused,", hold: true },
  { type: "phrase",   text: "but I think", hold: true },
  { type: "phrase",   text: "by the time", hold: true },
  { type: "word",   text: " this word comes out ", hold: true },
  { type: "phrase",   text: "you should be", hold: true },
  { type: "phrase",   text: "getting the hang", hold: true },
  { type: "word",   text: "of this.", end: true },

  { type: "phrase", text: "Why this?", hold: true },
  { type: "word",   text: "You might ask.", end: true },
  
  { type: "word", text: "Because", hold: true },
  { type: "phrase", text: "blinking is an", hold: true },
  { type: "phrase", text: "often neglected", hold: true },
  { type: "phrase", text: "part of our lives,", hold: true },
  { type: "phrase",   text: "we don’t really", hold: true },
  { type: "phrase",   text: "think about it", hold: true },
  { type: "phrase",   text: "until we are", hold: true },
  { type: "word",   text: "reminded of it.", end: true },

  { type: "phrase", text: "And while we’re on the subject—of fleeting things, of the barely noticed and easily lost—I ask that you be mindful, truly mindful, of each and every blink. For with the soft, near-silent fall of your eyelids, the world before you—these words, these thoughts rendered visible—may vanish, slipping like a whisper into the quiet space between moments, where time pauses and perception falters. The text you now see exists only in the fragile contract between light and attention, lingering no longer than your gaze allows. It lives in the act of seeing and perishes in the briefest act of forgetting. Gone in an instant. As real and as vanishing as a dream upon waking. Which is the long way of saying: please be mindful of your blinking because the text you see will disappear in the blink of an eye quite literally.", end: true },

  { type: "phrase", text: "Oh", hold: true },
  { type: "phrase", text: "did you miss that?", hold: true },
  { type: "phrase", text: "If not, great,",   hold: true },
  { type: "phrase",   text: "but if you", hold: true },
  { type: "phrase",   text: "ever miss any text", hold: true },
  { type: "phrase",   text: "you want to go back to,", hold: true },
  { type: "phrase",   text: "just close your eyes", hold: true },
  { type: "phrase",   text: "for a few seconds and", hold: true },
  { type: "word",   text: "we'll rewind a bit.", end: true },

  { type: "phrase", text: "But yeah,", hold: true },
  { type: "phrase",   text: "by now you've blinked", hold: true },
  { type: "phrase",   text: "quite a few times,", hold: true },
  { type: "word",   text: "but what really is blinking?", end: true },

  { type: "word",   text: "There are three types of blinking.", end: true },

  { type: "phrase",   text: "The first type", hold:true },
  { type: "phrase",   text: "is spontaneous blinking,", hold:true },
  { type: "phrase",   text: "which is what you do for most of your life.", end:true },

  { type: "phrase",   text: "The second type", hold:true },
  { type: "phrase",   text: "is voluntary blinking,", hold:true },
  { type: "phrase",   text: "which is what you’ve been doing", hold:true },
  { type: "phrase",   text: "for the majority of your time", hold:true },
  { type: "word",   text: "on this website.", end:true },

  { type: "phrase",   text: "The third type", hold:true },
  { type: "phrase",   text: "is reflex blinking,", hold:true },
  { type: "phrase",   text: "which you would do", hold:true },
  { type: "phrase",   text: "in reaction to", hold:true },
  { type: "word",   text: "being startled.", hold:true },
  { type: "phrase",   text: "(I was going to jump scare you to demonstrate that", hold:true },
  { type: "phrase",   text: "but I'm too kind)", end:true },

  { type: "phrase",   text: "Despite the different types of blinking,", hold:true },
  { type: "phrase",   text: "the duration of a blink is", hold:true },
  { type: "phrase",   text: "fairly consistent at", hold:true },
  { type: "phrase",   text: "around 0.1 to 0.4 seconds.", hold:true },
  { type: "phrase",   text: "If you try hard enough,", hold:true },
  { type: "phrase",   text: "you could blink more than", hold:true },
  { type: "word",   text: "5 times in 1 second.", end:true },

  { type: "phrase",   text: "Although the length of each blink is about the same,", hold:true },
  { type: "phrase",   text: "blink intervals vary greatly.", hold:true },
  { type: "phrase",   text: "Under normal circumstances", hold:true },
  { type: "word",   text: "people blink between", hold:true },
  { type: "word",   text: "15 and 20 times per minute.", end:true },

  { type: "phrase",   text: "When reading or", hold:true },
  { type: "phrase",   text: "looking at screens,", hold:true },
  { type: "phrase",   text: "that can drop to", hold:true },
  { type: "phrase",   text: "4 to 10 blinks per minute,", hold:true },
  { type: "phrase",   text: "which is why your eyes", hold:true },
  { type: "phrase",   text: "feel sore after long periods of", hold:true },
  { type: "word",   text: "reading or looking at screens.", end:true },

  { type: "phrase",   text: "On the other hand,", hold:true },
  { type: "phrase",   text: "you blink more,", hold:true },
  { type: "phrase",   text: "around 30 times per minute, when you are", hold:true },
  { type: "word",   text: "conversing or under stress.", end:true },
  
  
  /* These Lines are removed to shorten the experience
  { type: "word",   text: "Age also affects blink rates.", end:true },

  { type: "phrase",   text: "Infants blink much less,", hold:true },
  { type: "phrase",   text: "roughly 1 or 2 times per minute,", hold:true },
  { type: "word",   text: "probably because their eyes are small and well lubricated.", end:true },*/

  { type: "phrase",   text: "Well that was quite a few", hold:true },
  { type: "word",   text: "blinks you've blinked,", hold:true },
  { type: "phrase",   text: "but not so much", hold:true },
  { type: "phrase",   text: "when you compare it to", hold:true },
  { type: "word",   text: "the amount you blink every day.", end:true },

  { type: "word",   text: "Assuming", hold:true },
  { type: "phrase",   text: "you sleep 8 hours a day ", hold:true },
  //{ type: "phrase",   text: "(aka. well rested),", hold:true },
  { type: "phrase",   text: "(aka. NOT a RISD student),", hold:true },
  { type: "phrase",   text: "and blink at an average rate of", hold:true },
  { type: "phrase",   text: "15 blinks per minute", hold:true },
  { type: "word",   text: "over 16 waking hours,", end:true },

  { type: "word",   text: "that's", hold:true },
  { type: "phrase",   text: "15 blinks/min × ", hold:true },
  { type: "phrase",   text: "60 min/hr × ", hold:true },
  { type: "phrase",   text: "16 hour/day = ", hold:true },
  { type: "word",   text: "14,400 blinks a day", end:true },

  { type: "phrase",   text: "And assuming", hold:true },
  { type: "phrase",   text: "your average blink lasts", hold:true },
  { type: "phrase",   text: "for 0.25 seconds", hold:true },

  { type: "word",   text: "that's", hold:true },
  { type: "phrase",   text: "14,400 blinks/day × ", hold:true },
  { type: "phrase",   text: "0.25 seconds = ", hold:true },
  { type: "phrase",   text: "3,600 seconds/day = ", hold:true },
  { type: "word",   text: "1 hour/day", hold:true },

  { type: "word",   text: "you spend with your eyes closed solely from blinking.", end:true },

  { type: "phrase",   text: "That's quite a long time.", hold:true },
  { type: "phrase",   text: "Maybe it was a little out of your expectations,", hold:true },
  { type: "phrase",   text: "but there is more.", end:true },

  { type: "word",   text: "Assuming your lifespan is the world's average life expectancy of 72 years,", end:true },

  { type: "word",   text: "Assuming", hold:true },
  { type: "phrase",   text: "your lifespan is the", hold:true },
  //{ type: "phrase",   text: "(aka. well rested),", hold:true },
  { type: "phrase",   text: "world's average life expectancy", hold:true },
  { type: "phrase",   text: "of 72 years,", end:true },

  { type: "phrase",   text: "1 hour/day × ", hold:true },
  { type: "phrase",   text: "365.25 days/year ×", hold:true },
  { type: "phrase",   text: "72 years ≈ ", hold:true },
  { type: "phrase",   text: "26,298 hours =", hold:true },
  { type: "phrase",   text: "1,095.75 days,", hold:true },
  { type: "phrase",   text: "or about 3 years of your life", hold:true },
  { type: "phrase",   text: "with your eyes closed simply from blinking.", hold:true },
  { type: "phrase",   text: "That's 4.16% of your entire life.", hold:true },
  { type: "phrase",   text: "Make of that what you will.", end:true },


  { type: "phrase",   text: "And that was just the time we spent blinking.", hold:true },
  /*
  { type: "phrase",   text: "what about the time we spend with eyes closed in total.", end:true },

  { type: "word",   text: "Assuming you have the luxury of sleeping on average 8 hours a day:", end:true },

  { type: "phrase",   text: "8 hours/day × 365.25 days/year × 72 years = 210,384 hours = 8,766 days ≈ 24 years,", hold:true },
  { type: "word",   text: "which is about 33.33% of your entire life.", end:true },
  */
  { type: "phrase",   text: "At this point", hold:true },  
  { type: "phrase",   text: "you must be intrigued", hold:true },
  { type: "phrase",   text: "about how much time", hold:true },
  { type: "phrase",   text: "other tasks would occupy right?", hold:true },
  { type: "phrase",   text: "Right?", end:true },

  { type: "phrase",   text: "Worry not,", hold:true },
  { type: "phrase",   text: "here's a table of data", hold:true },
  { type: "phrase",   text: "to save you from", hold:true },
  { type: "word",   text: "more blinking.", hold:true },
  { type: "phrase",   text: "Assuming you are", hold:true },
  { type: "phrase",   text: "a very health individual", hold:true },
  { type: "word",   text: "who works very hard", hold:true },
  { type: "word",   text: "(more than 10 hours a day)", hold:true },
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
  { type: "word",   text: "You might ask.", end:true },

  { type: "phrase",   text: "The ancient Chinese idiom", hold:true },
  { type: "phrase",   text: "'滴水石穿',", hold:true },
  { type: "phrase",   text: "which literally translates to,", hold:true },
  { type: "phrase",   text: "'dripping water can penetrate stone',", hold:true },
  { type: "phrase",   text: "is the idea that", hold:true },
  { type: "phrase",   text: "persistent and consistent effort,", hold:true },
  { type: "phrase",   text: "no matter how small,", hold:true },
  { type: "phrase",   text: "can eventually achieve", end:true },
  { type: "word",   text: "significant results.", end:true },

  { type: "word", text: "So,", hold:true},
  { type: "phrase",   text: "I guess the takeaway is that ", hold:true }, 
  { type: "phrase",   text: "maybe next time when you start", hold:true }, 
  { type: "phrase",   text: "doom scrolling on the toilet,", hold:true }, 
  { type: "phrase",   text: "be mindful of how many", hold:true }, 
  { type: "phrase",   text: "years of your life you are willing to", hold:true }, 
  { type: "word",   text: "spend doing so.", end:true }, 

  { type: "phrase",   text: "The End.", hold:true },
  { type: "word",   text: "Thank you for blinking.", hold:true },

];

const infoBtn     = document.getElementById('info-btn');
const infoOverlay = document.getElementById('info-overlay');
const infoClose   = document.getElementById('info-close');
const historyStack = [];
const ORIGINAL_SEGMENT_COUNT = segments.length;

let blinkCount = 0;
let dynamicInserted = false;
let currentIndex = 0;
let subIndex = 0;
let held = [];


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

   if (currentIndex === ORIGINAL_SEGMENT_COUNT && !dynamicInserted) {
    segments.splice(ORIGINAL_SEGMENT_COUNT, 0, {
      type: 'phrase', text: `You've blinked ${blinkCount} times on this website.`, end: true
    });
    dynamicInserted = true;
  }

  render();
  if (currentIndex >= segments.length) {
    infoBtn.hidden = false;
}
}

function previous() {
  if (historyStack.length < 2) return;
  historyStack.pop();
  const prev = historyStack[historyStack.length - 1];
  currentIndex = prev.currentIndex;
  subIndex = prev.subIndex;
  held = [...prev.held];
  render();
}

document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  if (key === 'd') {
    e.preventDefault();
    next();
  } else if (key === 'a') {
    e.preventDefault();
    previous();
  }
});

historyStack.push({ currentIndex, subIndex, held: [...held] });
render();

const LEFT_EYE = [33,160,158,133,153,144];
const RIGHT_EYE = [263,387,385,362,380,373];
const BLINK_THRESHOLD = 0.23;
const LONG_BLINK_THRESHOLD = 1000;   // in ms
const REWIND_INTERVAL = 200;        // in ms
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
  
  const hasFace = results.multiFaceLandmarks.length > 0;
  if (!hasFace) {
    eyeWasClosed = false;
    if (rewindId) clearInterval(rewindId), rewindId = null;
    return;
  }

  if (results.multiFaceLandmarks.length) {
    const lm = results.multiFaceLandmarks[0];
    const avgEAR = (getEAR(lm, LEFT_EYE) + getEAR(lm, RIGHT_EYE)) / 2;
    const now = performance.now();

    if (avgEAR < BLINK_THRESHOLD) {
      if (!eyeWasClosed) {
        eyeWasClosed = true;
        eyeClosedStart = now;

        blinkCount++;
         updateBlinkTally();

        next();
        playRandomNote();
      }
      if (!rewindId && now - eyeClosedStart >= LONG_BLINK_THRESHOLD) {
        rewindId = setInterval(previous, REWIND_INTERVAL);
      }
    } else {
      if (eyeWasClosed) eyeWasClosed = false;
      if (rewindId) {
        clearInterval(rewindId);
        rewindId = null;
      }
    }
  }
}

function updateBlinkTally() {
  if (!dynamicInserted) return;

  segments[ORIGINAL_SEGMENT_COUNT].text =
    `You've blinked ${blinkCount} times on this website.`;

  if (currentIndex >= ORIGINAL_SEGMENT_COUNT) {
    currentIndex = ORIGINAL_SEGMENT_COUNT;
    render();
  }
}

const faceMesh = new FaceMesh({
  locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
});
faceMesh.setOptions({
  maxNumFaces: 1,
  refineLandmarks: true,
  minDetectionConfidence: 0.6,
  minTrackingConfidence: 0.5
});
faceMesh.onResults(onResults);

const camera = new Camera(document.querySelector('.input_video'), {
  onFrame: async () => { await faceMesh.send({ image: document.querySelector('.input_video') }); },
  width: 640,
  height: 480
});

const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', async () => {
  try {
    await Tone.start();

    await camera.start();

    document.getElementById('landing-screen').remove();
    document.getElementById('main-content').removeAttribute('hidden');
  } catch (err) {
    console.error('Error starting camera or audio:', err);
    alert('Unable to start camera. Please grant permission and reload.');
  }
});

infoBtn.addEventListener('click', () => {
  infoOverlay.hidden = false;
});

infoClose.addEventListener('click', () => {
  infoOverlay.hidden = true;
});
