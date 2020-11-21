import AbstractShareButtom from './AbstractShareButton';

export default abstract class AbastractLinkShareButton extends AbstractShareButtom {

    url: string;

    constructor(clazz: string, url: string) {
        super(clazz);
        this.url = url;
    }

    abstract createLink(): string;

    createAction(): any {
        const link = this.createLink();
        return () => window.open(link);
    };



}