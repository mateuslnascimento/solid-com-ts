import EventHandler from './EventHandler';

export default abstract class AbstractShareButton {

    eventHandler: EventHandler;
    clazz: string;

    constructor(clazz: string) {
        this.clazz = clazz;
        this.eventHandler = new EventHandler();
    }

    abstract createAction();

    bind() {
        const action = this.createAction();
        this.eventHandler.addEventListenerToClass(this.clazz, 'click', action);
    }
}