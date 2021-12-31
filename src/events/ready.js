const Event = require('../structs/Event');

module.exports = class extends Event {
    constructor(...args) {
        super(...args, {
            once: true
        });
    }

    run() {
		console.log(`Successfully logged in as ${this.client.user.tag}`)
	}
}