import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedin from './ShareButtonLinkedin';
import ShareButtonPrint from './ShareButtonPrint';

const twitter = new ShareButtonTwitter('.btn-twitter', 'https://github.com/mateuslnascimento');
twitter.bind();

const facebook = new ShareButtonFacebook('.btn-facebook', 'https://github.com/mateuslnascimento');
facebook.bind();

const linkedin = new ShareButtonLinkedin('.btn-linkedin', 'https://github.com/mateuslnascimento');
linkedin.bind();

const print = new ShareButtonPrint('.btn-print');
print.bind();