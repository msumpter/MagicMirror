var traffic = {
	trafficLocation: '.compliment',
	currentTraffic: '',
	updateInterval: config.traffic.interval || 30000,
	fadeInterval: config.traffic.fadeInterval || 4000,
	intervalId: null
};

/**
 * Changes the traffic visible on the screen
 */
traffic.updateTraffic = function () {

        $.ajax({
                type: 'GET',
                datatype:'jsonp',
                url: "calendar.php" + "?url="+encodeURIComponent(config.traffic.location1.url),
                success: function (data) {
                    var obj = JSON.parse(data);
                    traffic.currentTraffic = obj.routes[0].legs[0].duration.text + config.traffic.location1.text;
                    //console.log(obj.routes[0].legs[0].duration.text);

                }.bind(this),
                error: function () {
                        // non-specific error message that should be updated
                        console.error('No feed results for: ' + config.traffic.location1.url);
                }
        });
        $.ajax({
                type: 'GET',
                datatype:'jsonp',
                url: "calendar.php" + "?url="+encodeURIComponent(config.traffic.location2.url),
                success: function (data) {
                    var obj = JSON.parse(data);
                    traffic.currentTraffic += '<br>' + obj.routes[0].legs[0].duration.text + config.traffic.location2.text;
                    //console.log(obj.routes[0].legs[0].duration.text);

                }.bind(this),
                error: function () {
                        // non-specific error message that should be updated
                        console.error('No feed results for: ' + config.traffic.location1.url);
                }
        });

	$('.traffic').updateWithText(traffic.currentTraffic, traffic.fadeInterval);

}

traffic.init = function () {

	this.updateTraffic();

	this.intervalId = setInterval(function () {
		this.updateTraffic();
	}.bind(this), this.updateInterval)

}
