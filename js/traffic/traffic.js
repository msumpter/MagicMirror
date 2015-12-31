var traffic = {
	trafficLocation: '.compliment',
	currentTraffic: '',
	updateInterval: config.traffic.interval || 1800000,
	fadeInterval: config.traffic.fadeInterval || 4000,
	intervalId: null
};

/**
 * Changes the traffic visible on the screen
 */
traffic.updateTraffic = function () {

        $.ajax({
                type: 'GET',
                datatype:'json',
                url: "calendar.php" + "?url="+encodeURIComponent(config.traffic.location1.url),
                success: function (data) {
                    $('.traffic1').updateWithText(data.routes[0].legs[0].duration.text + config.traffic.location1.text, traffic.fadeInterval);

                }.bind(this),
                error: function () {
                        // non-specific error message that should be updated
                        console.error('No feed results for: ' + config.traffic.location1.url);
                }
        });
        $.ajax({
                type: 'GET',
                datatype:'json',
                url: "calendar.php" + "?url="+encodeURIComponent(config.traffic.location2.url),
                success: function (data) {
                    $('.traffic2').updateWithText(data.routes[0].legs[0].duration.text + config.traffic.location2.text, traffic.fadeInterval);

                }.bind(this),
                error: function () {
                        // non-specific error message that should be updated
                        console.error('No feed results for: ' + config.traffic.location1.url);
                }
        });


}

traffic.init = function () {

	this.updateTraffic();

	this.intervalId = setInterval(function () {
		this.updateTraffic();
	}.bind(this), this.updateInterval)

}
