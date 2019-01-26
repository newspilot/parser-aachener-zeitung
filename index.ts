import {FeedItem, FeedParser, FeedSource} from '../index.d';

const aachenerZeitung: FeedParser = {
    name: 'Aachener Zeitung',
    urls: [
        {name: 'Lokales-Aachen', url: 'https://www.aachener-zeitung.de/lokales/aachen/feed.rss'},
        {name: 'Lokales-Düren', url: 'https://www.aachener-zeitung.de/lokales/dueren/feed.rss'},
        {name: 'Lokales-Jülich', url: 'https://www.aachener-zeitung.de/lokales/juelich/feed.rss'},
        {name: 'Lokales-Eifel', url: 'https://www.aachener-zeitung.de/lokales/eifel/feed.rss'},
        {name: 'Lokales-Nordkreis', url: 'https://www.aachener-zeitung.de/lokales/nordkreis/feed.rss'},
        {name: 'Lokales-Eschweiler', url: 'https://www.aachener-zeitung.de/lokales/eschweiler/feed.rss'},
        {name: 'Lokales-Stolberg', url: 'https://www.aachener-zeitung.de/lokales/stolberg/feed.rss'},
        {name: 'Lokales-Heinsberg', url: 'https://www.aachener-zeitung.de/lokales/heinsberg/feed.rss'},
        {name: 'Lokales-Geilenkirchen', url: 'https://www.aachener-zeitung.de/lokales/geilenkirchen/feed.rss'},

        {name: 'Region', url: 'https://www.aachener-zeitung.de/nrw-region/feed.rss'},
        {name: 'Region-Belgien', url: 'https://www.aachener-zeitung.de/nrw-region/belgien/feed.rss'},
        {name: 'Region-Niederlande', url: 'https://www.aachener-zeitung.de/nrw-region/niederlande/feed.rss'},
        {name: 'Region-Tihange', url: 'https://www.aachener-zeitung.de/nrw-region/tihange/feed.rss'},
        {name: 'Region-Braunkohle', url: 'https://www.aachener-zeitung.de/nrw-region/braunkohle/feed.rss'},

        {name: 'Sport', url: 'https://www.aachener-zeitung.de/sport/feed.rss'},
        {name: 'Sport-Fußball', url: 'https://www.aachener-zeitung.de/sport/fussball/feed.rss'},
        {name: 'Sport-Fußball-Bundesliga', url: 'https://www.aachener-zeitung.de/sport/fussball/bundesliga/feed.rss'},
        {name: 'Sport-Fußball-DFB-Pokal', url: 'https://www.aachener-zeitung.de/sport/fussball/dfb-pokal/feed.rss'},
        {
            name: 'Sport-Fußball-Alemannia-Aachen',
            url: 'https://www.aachener-zeitung.de/sport/fussball/alemannia-aachen/feed.rss'
        },
        {
            name: 'Sport-Fußball-Borussia-Mönchengladbach',
            url: 'https://www.aachener-zeitung.de/sport/fussball/borussia-moenchengladbach/feed.rss'
        },
        {name: 'Sport-Fußball-1.-FC-Köln', url: 'https://www.aachener-zeitung.de/sport/fussball/1-fc-koeln/feed.rss'},
        {name: 'Sport-Volleyball', url: 'https://www.aachener-zeitung.de/sport/volleyball/feed.rss'},
        {
            name: 'Sport-Volleyball-Ladies-in-Black',
            url: 'https://www.aachener-zeitung.de/sport/volleyball/ladies-in-black/feed.rss'
        },
        {
            name: 'Sport-Volleyball-Powervolleys',
            url: 'https://www.aachener-zeitung.de/sport/volleyball/powervolleys/feed.rss'
        },
        {name: 'Sport-Lokalsport', url: 'https://www.aachener-zeitung.de/sport/regio-sport/feed.rss'},

        {name: 'Panorama', url: 'https://www.aachener-zeitung.de/panorama/feed.rss'},

        {name: 'Politik', url: 'https://www.aachener-zeitung.de/politik/feed.rss'},
        {name: 'Politik-Deutschland', url: 'https://www.aachener-zeitung.de/politik/deutschland/feed.rss'},
        {name: 'Politik-Welt', url: 'https://www.aachener-zeitung.de/politik/welt/feed.rss'},

        {name: 'Wirtschaft', url: 'https://www.aachener-zeitung.de/wirtschaft/feed.rss'},

        {name: 'Kultur', url: 'https://www.aachener-zeitung.de/kultur/feed.rss'},
        {name: 'Kultur-Theater', url: 'https://www.aachener-zeitung.de/kultur/theater/feed.rss'},
        {name: 'Kultur-Musik', url: 'https://www.aachener-zeitung.de/kultur/musik/feed.rss'},
        {name: 'Kultur-Buch', url: 'https://www.aachener-zeitung.de/kultur/buch/feed.rss'},
        {name: 'Kultur-Kunst', url: 'https://www.aachener-zeitung.de/kultur/kunst/feed.rss'},

        {name: 'Ratgeber', url: 'https://www.aachener-zeitung.de/ratgeber/feed.rss'},
        {name: 'Ratgeber-Gesundheit', url: 'https://www.aachener-zeitung.de/ratgeber/gesundheit/feed.rss'},
        {name: 'Ratgeber-Bauen-Wohnen', url: 'https://www.aachener-zeitung.de/ratgeber/bauen-wohnen/feed.rss'},
        {name: 'Ratgeber-Familie', url: 'https://www.aachener-zeitung.de/ratgeber/familie/feed.rss'},
        {name: 'Ratgeber-Recht', url: 'https://www.aachener-zeitung.de/ratgeber/recht/feed.rss'},
        {name: 'Ratgeber-Reisen', url: 'https://www.aachener-zeitung.de/ratgeber/reisen/feed.rss'},
        {name: 'Ratgeber-Auto', url: 'https://www.aachener-zeitung.de/ratgeber/auto/feed.rss'},
        {name: 'Ratgeber-Bildung-Beruf', url: 'https://www.aachener-zeitung.de/ratgeber/bildung-beruf/feed.rss'},
        {name: 'Ratgeber-Essen-Trinken', url: 'https://www.aachener-zeitung.de/ratgeber/essen-trinken/feed.rss'},
        {name: 'Ratgeber-Geld', url: 'https://www.aachener-zeitung.de/ratgeber/geld/feed.rss'},
        {name: 'Ratgeber-Lifestyle', url: 'https://www.aachener-zeitung.de/ratgeber/lifestyle/feed.rss'},
    ],
    parse: (feed: any): FeedSource => {
        const items: Array<FeedItem> = [];
        feed.items.forEach((item: any) => {
            items.push({
                title: item.title,
                description: item.contentSnippet,
                link: item.link,
                categories: (item.categories || []).map((category: string) => category.toLowerCase()),
                date: item.isoDate
            });
        });
        return {
            name: feed.title,
            description: feed.description,
            language: feed.language.split('-')[0],
            link: feed.link,
            feed: items
        };
    }
};

export default aachenerZeitung;