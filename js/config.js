var config = {
    lang: 'en',
    time: {
        timeFormat: 12
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Miamisburg, OH',
            units: 'imperial',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'en',
            APPID: '3b974d547d83518e75c9e8e55ba811e6'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Good morning, handsome!',
            'Enjoy your day!',
            'How was your sleep?'
        ],
        afternoon: [
            'Hello, beauty!',
            'You look sexy!',
            'Looking good today!'
        ],
        evening: [
            'Wow, you look hot!',
            'You look nice!',
            'Hi, sexy!'
        ]
    },
    calendar: {
        maximumEntries: 10,
        url: "https://p18-calendars.icloud.com/published/2/_HBu5Y3IKT_IcuC-8Giwgrtb-X115rYMYEik3IdWZfZIunbeLTKI_aAF4Boa-HwS6BSdTwDkD_FWnvciy0iUo3rvJRhLkDhvXS4Nlc844iQ"
    },
    news: {
        feed: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
    },
    traffic: {
        location1: {
            text: " to West Chester",
            url: "http://maps.googleapis.com/maps/api/directions/json?origin=8898%20Fox%20Glove%20Way,%20Miamisburg,%20OH%2045342,%20USA&destination=9100%20W%20Chester%20Towne%20Centre%20Rd,%20West%20Chester,%20OH%2045069,%20USA&alternatives=true&sensor=false"
        },
        location2: {
            text: " to the mall",
            url: "http://maps.googleapis.com/maps/api/directions/json?origin=8898%20Fox%20Glove%20Way,%20Miamisburg,%20OH%2045342,%20USA&destination=2700%20Miamisburg%20Centerville%20Rd,%20Dayton,%20OH%2045459,%20USA&alternatives=true&sensor=false"
        }
    }
}
