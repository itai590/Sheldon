const path = require('path');
const fs = require('fs');
const SoundDetector = require('./sound-detector');
const hey = require('./hey');
const syncHey = require('./sync-hey');

setInterval(() => {
	syncHey();
}, 60 * 1000);

syncHey();

const configPath = path.resolve(__dirname, 'config.json');
const config = {
	MAX_RMS_AMPLITUDE: 0.5
};

if (fs.existsSync(configPath)) {
	try {
		Object.assign(config, JSON.parse(fs.readFileSync(configPath, { encoding: 'utf8' })));
		console.log("MAX_RMS_AMPLITUDE: ", config.MAX_RMS_AMPLITUDE);
	}
	catch (err) {
		console.error("couldn't read config.json", err);
	}
}

let soundDetector = new SoundDetector(config);

soundDetector.start();

let detections = 0;

hey.on('reset', () => {
	console.log("resetting detections");
	detections = 0;
});

soundDetector.on("detected", ({ duration, max, rms }) => {
	console.log(Date() + " detected " + rms);
	if (rms > config.MAX_RMS_AMPLITUDE) {
		console.log(Date() + " detected " + rms + ", detections: " + detections)
		if (++detections > 2) {
			hey.send();
		}
	}
});

