import EventHandler from './EventHandler';
export default class ShareButton {
    eventHandler: EventHandler;
    url: string;

    constructor(url: string) {
        this.url = url;
        this.eventHandler = new EventHandler();
    }

    bind(clazz: string, socialNetWork: string) {

        let link: string;

        if (socialNetWork === "twitter") {
            link = `https://twitter.com/share?url=${this.url}`;
        }
        if (socialNetWork === "facebook") {
            link = `http://www.facebook.com/sharer.php?u=${this.url}`;
        }
        if (socialNetWork === "linkedin") {
            link = `http://www.linkedin.com/shareArticle?url=${this.url}`;
        }

        this.eventHandler.addEventListenerToClass(clazz, "click", () => window.open(link));
    }
}