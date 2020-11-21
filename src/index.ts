import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedin from './ShareButtonLinkedin';
import ShareButtonPrint from './ShareButtonPrint';
import DOMEventHandler from './DOMEventHandler';

const eventHandler = new DOMEventHandler();

const twitter = new ShareButtonTwitter(eventHandler, '.btn-twitter', 'https://github.com/mateuslnascimento');
twitter.bind();

const facebook = new ShareButtonFacebook(eventHandler, '.btn-facebook', 'https://github.com/mateuslnascimento');
facebook.bind();

const linkedin = new ShareButtonLinkedin(eventHandler, '.btn-linkedin', 'https://github.com/mateuslnascimento');
linkedin.bind();

const print = new ShareButtonPrint(eventHandler, '.btn-print');
print.bind();