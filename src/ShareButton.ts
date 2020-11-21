export default class ShareButton {

    url: string;

    constructor(url: string) {
        this.url = url;
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
        const elements: any = document.querySelectorAll(clazz);

        for (const element of elements) {
            element.addEventListener("click", () => window.open(link))
        }

    }
}