import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedin from './ShareButtonLinkedin';

const twitter = new ShareButtonTwitter('.btn-twitter', 'https://github.com/mateuslnascimento');
twitter.bind();

const facebook = new ShareButtonFacebook('.btn-facebook', 'https://github.com/mateuslnascimento');
facebook.bind();

const linkedin = new ShareButtonLinkedin('.btn-linkedin', 'https://github.com/mateuslnascimento');
linkedin.bind();