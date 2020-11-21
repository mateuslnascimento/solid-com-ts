import AbastractLinkShareButton from './AbstractLinkShareButton';

export default class ShareButtonLinkedin extends AbastractLinkShareButton {

    constructor(clazz: string, url: string) {
        super(clazz, url);
    }
    createLink(): string {
        return `http://www.linkedin.com/shareArticle?url=${this.url}`;
    }
}