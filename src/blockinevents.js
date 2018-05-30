import faker from 'faker'

export default [ {
    "id": "1",
    "date": faker.date.future(2,'2018-06-06'),
    "month": faker.random.number(13),
    "eventName": "KingLear",
    "people": faker.date.future(8),
    "information": {
        "description": "text",
        "location": {
            "nameLocation": "BFT",
            "city": "Minsk",
            "street": "Kalinina",
            "building": "30"
        },
        "picture": "",
        "firstCalendar": "2018-06-20",
        "lastCalendar": "2018-06-24",
        "price": faker.random.number(100)
    },
},
{
    "id": "2",
    "date": faker.date.future(2,'2018-06-06'),
    "month": faker.random.number(13),
    "eventName": "Rock Za Bobrov",
    "people": faker.date.future(8),
    "information": {
        "description": "text",
        "location": {
            "nameLocation": "Open-air",
            "city": "Bobruisk",
            "street": "Open-air",
            "building": ""
        },
        "picture": "",
        "firstCalendar": "2018-06-26",
        "lastCalendar": "2018-06-30",
        "price": faker.random.number(100)
    },
},
{
    "id": "3",
    "date": faker.date.future(2,'2018-06-06'),
    "month": faker.random.number(13),
    "eventName": "Afterparty MMF",
    "people": faker.date.future(8),
    "information": {
        "description": "text",
        "location": {
            "nameLocation": "Brugge",
            "city": "Minsk",
            "street": "Oktyabrskaya",
            "building": "12"
        },
        "picture": "",
        "firstCalendar": "2018-07-08",
        "lastCalendar": "2018-07-14",
        "price": faker.random.number(10)
    },
},
{
    "id": "4",
    "date": faker.date.future(2,'2018-06-06'),
    "month": faker.random.number(13),
    "people": faker.date.future(8),
    "eventName": "Session",
    "information": {
        "description": "text",
        "location": {
            "nameLocation": "BSU",
            "city": "Minsk",
            "street": "Lenina",
            "building": "23"
        },
        "picture": "",
        "firstCalendar": "2018-07-08",
        "lastCalendar": "2018-07-14",
        "price": faker.random.number(10)
    },
},
]